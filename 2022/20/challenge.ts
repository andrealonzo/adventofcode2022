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

    function getAnswer(head: Node, nums: number[]) {
        const numArr: number[] = convertToArray(head, nums.length)
        return numArr[(numArr.indexOf(0) + 1000) % numArr.length] + numArr[(numArr.indexOf(0) + 2000) % numArr.length] + numArr[(numArr.indexOf(0) + 3000) % numArr.length]
    }

    const mix = (nodes: Node[]) => {
        for (let j = 0; j < nodes.length; j++) {
            const nodeToMix = nodes[j]
            if (nodeToMix.num === 0 || nodeToMix.num % (nodes.length - 1) === 0) {
                continue
            }
            let curNode = nodeToMix
            nodeToMix.next.prev = nodeToMix.prev
            nodeToMix.prev.next = nodeToMix.next
            let move;
            if (nodeToMix.num > 0) {
                move = nodeToMix.num % (nodes.length - 1)
            } else if (nodeToMix.num < 0) {
                move = nodes.length - Math.abs(nodeToMix.num % (nodes.length - 1) - 1)
            }
            for (let i = 0; i < move; i++) {
                curNode = curNode.next
            }
            curNode.next.prev = nodeToMix
            nodeToMix.prev = curNode
            nodeToMix.next = curNode.next
            curNode.next = nodeToMix
        }

    }
    const calculateAnswer1 = () => {
        const nums = parseInput(input)
        const head: Node = convertToLinkedList(nums)
        let nodes: Node[] = convertToNodeArray(head, nums.length)
        mix(nodes)
        return getAnswer(head, nums);
    };

    const calculateAnswer2 = () => {
        const nums = parseInput(input).map((num) => num * 811589153)
        const head: Node = convertToLinkedList(nums)
        let nodes: Node[] = convertToNodeArray(head, nums.length)
        for (let i = 0; i < 10; i++) {
            mix(nodes)
        }
        return getAnswer(head, nums);
    };


    return {
        calculateAnswer1: calculateAnswer1,
        calculateAnswer2: calculateAnswer2,
    }

}
