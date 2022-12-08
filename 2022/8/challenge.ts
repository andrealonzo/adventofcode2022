export const createCalculator = (input: string): any => {
    const parseInput = (input: string): number[][] => {
        return input
            .split(/\n/)
            .map((row) => row.split("").map(Number))
    }
    const grid = parseInput(input)
    const maxHeightFn = (prevMaxHeight: number, curHeight: number) => prevMaxHeight >= curHeight ? prevMaxHeight : curHeight

    function isVisible(grid: number[][], i: number, j: number) {
        const targetTreeHeight = grid[i][j]

        const maxHeightLeftTrees = grid[i].slice(0, j).reduce(maxHeightFn)
        const maxHeightRightTrees = grid[i].slice(j+1, grid.length).reduce(maxHeightFn)
        const maxHeightTopTrees = grid.map((row)=>row[j]).slice(0,i).reduce(maxHeightFn)
        const maxHeightBottomTrees = grid.map((row)=>row[j]).slice(i+1,grid.length).reduce(maxHeightFn)

        return targetTreeHeight > maxHeightLeftTrees
            || targetTreeHeight > maxHeightRightTrees
            || targetTreeHeight > maxHeightTopTrees
            || targetTreeHeight > maxHeightBottomTrees;
    }

    const calculateAnswer1 = () => {
        let numVisible = 0
        for (let i = 1; i < grid.length - 1; i++) {
            for (let j = 1; j < grid[i].length - 1; j++) {
                if (isVisible(grid, i, j))
                    numVisible++
            }

        }
        return numVisible + grid.length + grid.length + (grid.length - 2) + (grid.length - 2)
    };


    function getScenicScore(grid: number[][], i: number, j: number) {
        const targetTreeHeight = grid[i][j]
        let leftScenicScore = 0;
        let rightScenicScore = 0;
        let topScenicScore = 0;
        let bottomScenicScore = 0;
        for (let k = j - 1; k >= 0; k--) {
            leftScenicScore++
            if (targetTreeHeight <= grid[i][k]) {
                break
            }
        }
        for (let k = j + 1; k < grid.length; k++) {
            rightScenicScore++
            if (targetTreeHeight <= grid[i][k]) {
                break
            }
        }
        for (let k = i - 1; k >= 0; k--) {
            topScenicScore++
            if (targetTreeHeight <= grid[k][j]) {
                break
            }
        }
        for (let k = i + 1; k < grid.length; k++) {
            bottomScenicScore++
            if (targetTreeHeight <= grid[k][j]) {
                break
            }
        }
        return topScenicScore * bottomScenicScore * leftScenicScore * rightScenicScore

    }

    const calculateAnswer2 = () => {
        let maxScenicScore = 0
        for (let i = 1; i < grid.length - 1; i++) {
            for (let j = 1; j < grid[i].length - 1; j++) {
                const scenicScore = getScenicScore(grid, i, j)
                maxScenicScore = scenicScore > maxScenicScore ? scenicScore : maxScenicScore
            }

        }
        return maxScenicScore
    };


    return {
        calculateAnswer1: calculateAnswer1,
        calculateAnswer2: calculateAnswer2,
    }

}
