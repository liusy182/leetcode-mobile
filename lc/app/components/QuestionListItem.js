import React, { Component } from 'react';
import { connect } from 'react-redux'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { getDifficultyColor, getDifficultyMark } from '../helpers';


class QuestionListItem extends Component {

    onPress = () => {
        this.props.navigation.navigate('Question', { question: this.props.item })
    }

    render() {
        const { item } = this.props;
        return (
            <TouchableOpacity style={styles.container} onPress={this.onPress}>
                <View style={styles.textContainer}>
                    <View style={styles.titleWrapper}>
                        <Text style={styles.title}>{`${item.id}. ${item.title}`}</Text>
                    </View>
                    {item.solution && item.solution.content && (
                        <View style={styles.solutionWrapper}>
                            <Text style={styles.solution}>
                                {'S'}
                            </Text>
                        </View>)}
                    <View style={styles.levelWrapper}>
                        <Text style={{ ...styles.level, color: getDifficultyColor(item.difficulty) }}>
                            {getDifficultyMark(item.difficulty)}
                        </Text>
                   </View>
                </View>
                <View style={styles.tagContainer}>
                    {item.topicTags.map(tag => (
                        <View key={tag} style={styles.tagWrapper}>
                            <Text style={styles.tag}>{tag}</Text>
                        </View>))}
                </View>
            </TouchableOpacity>
        );
    }
}

const mapStateToProps = () => ({
})

const mapDispatchToProps = dispatch => ({
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(QuestionListItem)


const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderBottomColor: '#D3D3D3',
        borderBottomWidth: 1,
        justifyContent: 'center',
        alignItems: 'stretch',
    },
    textContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    titleWrapper: {
        flexGrow: 1,
        flexShrink: 1,
    },
    title: {
        fontSize: 16,
    },
    levelWrapper: {
        flexGrow: 0,
        paddingLeft: 8,
    },
    level: {
        fontSize: 14,
        textAlign: 'right',
        color: '#A9A9A9',
    }, 
    solutionWrapper: {
        flexGrow: 0,
        paddingLeft: 8,
    },
    solution: {
        fontSize: 14,
        textAlign: 'right'
    },
    tagContainer: {
        marginTop: 4,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        flexWrap: 'wrap'
    },
    tagWrapper: {
        flexWrap: 'wrap',
        padding: 4,
        marginRight: 4,
        borderColor: '#67B7D1',
        borderWidth: 1,
        borderRadius: 4,
    }, 
    tag: {
        fontSize: 12,
    }
});
