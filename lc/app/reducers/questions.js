const defaultState = [{
    key: '1',
    id: 1,
    title: 'Two Sum',
    content: `<p>Given an array of integers, return <strong>indices</strong> of the two numbers such that they add up to a specific target.</p>
<p>You may assume that each input would have <strong><em>exactly</em></strong> one solution, and you may not use the <em>same</em> element twice.</p>
<p><strong>Example:</strong></p>
<pre>
Given nums = [2, 7, 11, 15], target = 9,

Because nums[<strong>0</strong>] + nums[<strong>1</strong>] = 2 + 7 = 9,
return [<strong>0</strong>, <strong>1</strong>].
</pre>
`,
    tags: [
        'Array',
        'Hash Table',
    ]
}]

const questions = (state = defaultState, action) => {
    switch (action.type) {
        case 'GET_QUESTIONS':
            return ;
        default:
            return state
    }
}

export default questions