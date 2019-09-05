const defaultState = {
    1: {
        key: '1',
        id: 1,
        solutionId: 1,
        code: 'public int[] twoSum(int[] nums, int target) {↵    Map<Integer, Integer> map = new HashMap<>();↵    for (int i = 0; i < nums.length; i++) {↵        map.put(nums[i], i);↵    }↵    for (int i = 0; i < nums.length; i++) {↵        int complement = target - nums[i];↵        if (map.containsKey(complement) && map.get(complement) != i) {↵            return new int[] { i, map.get(complement) };↵        }↵    }↵    throw new IllegalArgumentException("No two sum solution");↵}'
    }, 
    2: {
        key: '2',
        id: 2,
        solutionId: 1,
        code: 'public int[] twoSum(int[] nums, int target) {↵    Map<Integer, Integer> map = new HashMap<>();↵    for (int i = 0; i < nums.length; i++) {↵        int complement = target - nums[i];↵        if (map.containsKey(complement)) {↵            return new int[] { map.get(complement), i };↵        }↵        map.put(nums[i], i);↵    }↵    throw new IllegalArgumentException("No two sum solution");↵}'
    }, 
    3: {
        key: '3',
        id: 3,
        solutionId: 1,
        code: 'public int[] twoSum(int[] nums, int target) {↵    for (int i = 0; i < nums.length; i++) {↵        for (int j = i + 1; j < nums.length; j++) {↵            if (nums[j] == target - nums[i]) {↵                return new int[] { i, j };↵            }↵        }↵    }↵    throw new IllegalArgumentException("No two sum solution");↵}'
    }
};

const codeSnippets = (state = defaultState, action) => {
    switch (action.type) {
        default:
            return state
    }
}

export default codeSnippets