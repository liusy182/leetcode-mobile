import React, { Component } from 'react';
import { connect } from 'react-redux'
import { StyleSheet, ScrollView, View, Text } from 'react-native';
import HTML from 'react-native-render-html';


class Solution extends Component {
    renderers = {
        a: (htmlAttribs, children, convertedCSSStyles, passProps) => {
            const { key, data } = passProps;
            return (
                <Text key={key}>
                    {children || data}
                </Text>
            );
        },
        iframe: (htmlAttribs, children, convertedCSSStyles, passProps) => {
            const { key, data } = passProps;
            return (
                <Text key={key}>
                    {'iframe'}
                </Text>
            );
        }
    }

    render() {
        const { solution } = this.props;
        return (
            <View style={styles.container}>
                <ScrollView>
                    <HTML html={solution.content} renderers={this.renderers} solution={solution} />
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
        paddingHorizontal: 8,
        paddingVertical: 8,
    },
    title: {
        fontSize: 24,
    }
});
