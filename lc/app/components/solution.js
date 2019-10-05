import React, { Component } from 'react';
import { connect } from 'react-redux'
import { StyleSheet, ScrollView, View, Text, TouchableOpacity, Linking } from 'react-native';
import HTML from 'react-native-render-html';


class Solution extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            title: (
                navigation.state.params.question && 
                navigation.state.params.question.title
            ) || 'Solution',
        };
    };

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

    goCopyright = () => {
        const { question } = this.props;
        const url = `https://leetcode.com/problems/${question.slug}/solution/`;
        Linking.canOpenURL(url).then(supported => {
            if (supported) {
                Linking.openURL(url);
            } else {
                console.log("Don't know how to open URI: " + url);
            }
        }).catch(console.log);
    }

    render() {
        const { solution } = this.props;
        return (
            <View style={styles.container}>
                <ScrollView>
                    <TouchableOpacity
                        style={styles.copyright}
                        onPress={this.goCopyright}
                    >
                        <Text style={styles.copyrightTxt}>{"view in leetcode.com"}</Text>
                    </TouchableOpacity>
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
        solution,
        question,
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
    },
    copyright: {
        justifyContent: 'flex-start',
        alignItems: 'flex-start'
    },
    copyrightTxt: {
        fontSize: 12,
        color: '#0a84ff',
    }
});
