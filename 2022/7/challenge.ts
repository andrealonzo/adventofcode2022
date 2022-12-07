export interface Directory {
    parent: Directory | undefined;
    name: string,
    contents: DirectoryContents
}

interface DirectoryFile {
    name: string
    size: number
}

interface DirectoryContents {
    directories: Directory[],
    files: DirectoryFile[]
}

export const createCalculator = (input: string): any => {
    function parseCommands() {
        return input.split(/\n/)
    }

    const rootDirectory: Directory = {
        name: "/",
        parent: undefined,
        contents: {
            directories: [],
            files: []
        }
    }

    const parseInput = (): any => {

        const commands = parseCommands()
        let curNode = rootDirectory
        for (let i = 0; i < commands.length; i++) {
            const commandParams = commands[i].split(" ");
            if (commandParams[0] === "$" && commandParams[1] === "cd") {
                if (commandParams[2] === "/") {
                    curNode = rootDirectory
                } else if (commandParams[2] === "..") {
                    //@ts-ignore
                    curNode = curNode.parent
                } else {
                    for (let j = 0; j < curNode.contents.directories.length; j++) {
                        const curDir = curNode.contents.directories[j]
                        if (curDir.name === commandParams[2]) {
                            curNode = curDir
                            break
                        }
                    }
                }
            } else if (commandParams[0] === "$" && commandParams[1] === "ls") {
                //don't do anything?
            } else if (commandParams[0] === "dir") {
                const newDir: Directory = {
                    name: commandParams[1],
                    parent: curNode,
                    contents: {
                        directories: [],
                        files: []
                    }
                }
                curNode.contents.directories.push(newDir)
            } else {
                //list of files
                const newFile: DirectoryFile = {
                    name: commandParams[1],
                    size: parseInt(commandParams[0])
                }
                curNode.contents.files.push(newFile)
            }
        }
        return rootDirectory
    }
    const treeToString = (node: Directory, spaces: string): string => {
        let str = spaces + "- " + node.name + " (dir)\n"
        for (let i = 0; i < node.contents.files.length; i++) {

            str += spaces + "   - " + node.contents.files[i].name + " (file, size=" + node.contents.files[i].size + ")\n"
        }
        for (let i = 0; i < node.contents.directories.length; i++) {
            str += treeToString(node.contents.directories[i], spaces + "  ")
        }
        return str
    }
    parseInput()
    const calculateAnswer1 = () => {
        return totalSizeOfDirectoriesAtMost(100000)
    };


    function findSmallestDirectorySizeToDelete(directorySizes: number[]) {
        const totalDiskAvailable = 70000000
        const spaceNeeded = 30000000
        const sortedSizes = directorySizes.sort((a,b)=>a-b)
        const curTotalSpace = sortedSizes.reduce((prev,cur)=>{
            if(prev>cur)
                return prev
            return cur
        })
        const unusedSpace = totalDiskAvailable - curTotalSpace
        const requiredDirectorySize =spaceNeeded - unusedSpace
         const possibleCandidates = sortedSizes.filter((size)=>size > requiredDirectorySize)
        return possibleCandidates[0]
    }

    const calculateAnswer2 = () => {
        const directorySizes = getDirectorySizes()
            .map((directorySize)=>directorySize.size)
        return findSmallestDirectorySizeToDelete(directorySizes)
    };
    const printTree = () => {
        return treeToString(rootDirectory, "")
    }

    //@ts-ignore
    let directorySizes= []
    //@ts-ignore
    const getDirectorySize = (directory):number => {
        let directorySize = 0
        for (let i = 0; i < directory.contents.files.length; i++) {
            directorySize +=  directory.contents.files[i].size
        }
        for (let i = 0; i < directory.contents.directories.length; i++) {
            directorySize += getDirectorySize(directory.contents.directories[i])
        }
        directorySizes.push({
            name:directory.name,
            size:directorySize
        })
        return directorySize

    }
    const getDirectorySizes = () =>{
        getDirectorySize(rootDirectory)
        //@ts-ignore
        return directorySizes
    }

    const totalSizeOfDirectoriesAtMost = (num:number) =>{
        const directorySizes  = getDirectorySizes()
        return directorySizes
            .map((directorySize)=>directorySize.size)
            .filter((directorySize)=>directorySize<=num)
            .reduce((prev,cur)=>prev+cur)
    }

    return {
        calculateAnswer1: calculateAnswer1,
        calculateAnswer2: calculateAnswer2,
        parseInput,
        printTree,
        getDirectorySize,
        getDirectorySizes,
        totalSizeOfDirectoriesAtMost
    }

}
