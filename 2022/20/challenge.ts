interface Node {
    num: number,
    next: Node | undefined,
    prev: Node | undefined
}

export const createCalculator = (input: string): any => {
    const parseInput = (input: string): number[] => {
        return input.split(/\n/).map(Number)
    }

    function convertToLinkedList(nums: number[]): Node {
        const head: Node = {
            num: nums[0],
            next: undefined,
            prev: undefined
        }
        let cur = head
        for (let i = 1; i < nums.length; i++) {
            let node: Node = {
                num: nums[i],
                prev: cur,
                next: undefined
            }
            cur.next = node
            cur = node
        }
        cur.next = head
        head.prev = cur
        return head
    }

    function convertToArray(node: Node, length: number): number[] {
        let arr: number[] = []
        let cur = node
        for (let i = 0; i < length; i++) {
            arr.push(cur.num)
            cur = cur.next
        }
        return arr
    }

    function convertToNodeArray(node: Node, length: number): Node[] {
        let mixOrder: Node[] = []
        let cur = node
        for (let i = 0; i < length; i++) {
            mixOrder.push(cur)
            cur = cur.next
        }
        return mixOrder
    }

    const calculateAnswer1 = () => {
        const nums = parseInput(input)
        const head: Node = convertToLinkedList(nums)
        let cur = head
        for (let i = 0; i < nums.length; i++) {
            cur = cur.next
        }
        let mixOrder: Node[] = convertToNodeArray(head, nums.length)
        // console.log("stack",stack)

        while (mixOrder.length > 0) {
            let nodeToSwap = mixOrder.shift()
            // console.log("node to swap", nodeToSwap)

            if (nodeToSwap.num > 0) {
                let prevNode = nodeToSwap.prev
                let nextNode = nodeToSwap.next
                nextNode.prev = prevNode
                prevNode.next = nextNode
                let curNode = nodeToSwap
                for (let i = 0; i < nodeToSwap.num; i++) {
                    curNode = curNode.next
                }
                curNode.next.prev = nodeToSwap
                nodeToSwap.prev = curNode
                nodeToSwap.next = curNode.next
                curNode.next = nodeToSwap
            } else if (nodeToSwap.num < 0) {
                let prevNode = nodeToSwap.prev
                let nextNode = nodeToSwap.next
                nextNode.prev = prevNode
                prevNode.next = nextNode
                let curNode = nodeToSwap
                for (let i = 0; i < Math.abs(nodeToSwap.num) + 1; i++) {
                    curNode = curNode.prev
                }
                curNode.next.prev = nodeToSwap
                nodeToSwap.prev = curNode
                nodeToSwap.next = curNode.next
                //@ts-ignore

                curNode.next = nodeToSwap
            }
            const numArr: number[] = convertToArray(head, nums.length)
            // console.log("numArr", numArr)
            // console.log("curNode", nodeToSwap)
        }


        const numArr: number[] = convertToArray(head, nums.length)
        // console.log("numArr", numArr)
        const answer = numArr[(numArr.indexOf(0) + 1000) % numArr.length] + numArr[(numArr.indexOf(0) + 2000) % numArr.length] + numArr[(numArr.indexOf(0) + 3000) % numArr.length]

        console.log("answer", answer)
        // console.log(nums)
        return answer
    };


    const calculateAnswer2 = () => {
        const nums = parseInput(input).map((num) => num * 811589153)
        const head: Node = convertToLinkedList(nums)
        let mixOrder: Node[] = convertToNodeArray(head, nums.length)
        for (let i = 0; i < 10; i++) {
            for (let j = 0; j < mixOrder.length; j++) {
                let nodeToSwap = mixOrder[j]
                let nodeArr: Node[] = convertToNodeArray(nodeToSwap, nums.length)
                let prevNode = nodeToSwap.prev
                let nextNode = nodeToSwap.next
                let curNode = nodeToSwap
                if (nodeToSwap.num === 0 || nodeToSwap.num % (mixOrder.length - 1) === 0) {
                    continue
                }
                nextNode.prev = prevNode
                prevNode.next = nextNode
                if (nodeToSwap.num > 0) {
                    for (let i = 0; i < nodeToSwap.num % (mixOrder.length - 1); i++) {
                        curNode = curNode.next
                    }
                } else if (nodeToSwap.num < 0) {
                    for (let i = 0; i < nodeToSwap.num % (mixOrder.length - 1); i++) {
                        curNode = curNode.next
                    }
                    curNode = nodeArr[nodeArr.length - Math.abs(nodeToSwap.num % (nodeArr.length - 1)) - 1]
                }
                curNode.next.prev = nodeToSwap
                nodeToSwap.prev = curNode
                nodeToSwap.next = curNode.next
                curNode.next = nodeToSwap

            }

        }
        const numArr: number[] = convertToArray(head, nums.length)
        const answer = numArr[(numArr.indexOf(0) + 1000) % numArr.length] + numArr[(numArr.indexOf(0) + 2000) % numArr.length] + numArr[(numArr.indexOf(0) + 3000) % numArr.length]
        return answer
    };


    return {
        calculateAnswer1: calculateAnswer1,
        calculateAnswer2: calculateAnswer2,
    }

}
