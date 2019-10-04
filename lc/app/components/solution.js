import React, { Component } from 'react';
import { connect } from 'react-redux'
import { StyleSheet, ScrollView, View } from 'react-native';
import HTML from 'react-native-render-html';


class Solution extends Component {
    render() {
        const { solution } = this.props;
        return (
            <View style={styles.container}>
                <ScrollView>
                    <HTML html={solution.content} />
                </ScrollView>
            </View>
        );
    }
}

const mapStateToProps = ({}, ownProps) => {
    const { question } = ownProps.navigation.state.params;
    const solution = question.solution
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
        alignItems: 'stretch',
    },
    title: {
        fontSize: 24,
    }
});
