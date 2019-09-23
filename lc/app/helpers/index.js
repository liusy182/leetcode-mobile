export const getDifficultyColor = (difficulty) => {
    if (difficulty === 'Easy') {
        return '#008000'
    } else if (difficulty === 'Medium') {
        return '#FFA500';
    } else if (difficulty === 'Hard') {
        return '#FF0000';
    }
    return '#000'

}

export const getDifficultyMark = (difficulty) => {
    if (difficulty === 'Easy') {
        return 'E'
    } else if (difficulty === 'Medium') {
        return 'M';
    } else if (difficulty === 'Hard') {
        return 'H';
    }
    return ''

}