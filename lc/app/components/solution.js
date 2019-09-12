import React, { Component } from 'react';
import { connect } from 'react-redux'
import { StyleSheet, ScrollView, View } from 'react-native';
import Markdown from 'react-native-markdown-renderer';


class Solution extends Component {
    render() {
        const { solution } = this.props;
        return (
            <View style={styles.container}>
                <ScrollView>
                    <Markdown>{solution.content}</Markdown>
                </ScrollView>
            </View>
        );
    }
}

const mapStateToProps = ({ solutions, codeSnippets }, ownProps) => {
    const { questionId } = ownProps.navigation.state.params;
    const solution = solutions.find((solution) => solution.questionId == questionId)
    solution.content = solution.content
        .replace(/\$\$CodeSnippet([\d+])\$\$/g, (match, id) => '```\n' + codeSnippets[id].code + '\n```')
        .replace(/↵/g, '\n');
    return {
        solution
    };
}

const mapDispatchToProps = dispatch => ({

})


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Solution)


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
    },
    title: {
        fontSize: 24,
    }
});
