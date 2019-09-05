import React, { Component } from 'react';
import { connect } from 'react-redux'
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Markdown from 'react-native-markdown-renderer';


class Solution extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View>
                    <Text style={styles.title}>{this.props.solution.title}</Text>
                    <Markdown>html={this.props.solution.content}</Markdown>
                </View>
            </View>
        );
    }
}

const mapStateToProps = ({ solutions, codeSnippets }) => {
    const solution = solutions[0];
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
