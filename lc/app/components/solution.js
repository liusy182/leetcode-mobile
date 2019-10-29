import React, { Component } from 'react';
import { connect } from 'react-redux'
import { StyleSheet, ScrollView, View, Text, TouchableOpacity, Linking } from 'react-native';
import HTML from 'react-native-render-html';
import Markdown from 'react-native-markdown-renderer';


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
        iframe: (htmlAttribs, children, convertedCSSStyles, passProps) => {
            const { key, solution } = passProps;
            const solutionDetails = solution[htmlAttribs.name];
            if (!solutionDetails) {
                return;
            }
            return (
                <View key={key}>
                    <Text style={styles.langTag}>{solutionDetails[0].langSlug}</Text>
                    <ScrollView horizontal={true}>
                        <Markdown style={styles.codeBlock}>
                            {'```\n' + solutionDetails[0].code + '\n```'}
                        </Markdown>
                    </ScrollView>
                </View>
            );
        },
    };

    alterNode = (node) => {
        const { name, parent } = node;
    };

    alterData = (node) => {
        const { name, parent, children } = node;
    };

    alterChildren = (node) => {
        const { name, children } = node;
        
    }

    ignoreNodesFunction = (node, parentTagName, parentIsText) => {
        const { name, children, data } = node;

        // ignore the header - table of content
        if (name == 'li' && parentTagName === 'ul'
            && children && children.length > 0
            && children[0].name === 'a'
            && children[0].attribs
            && children[0].attribs.href === '#solution'
           ) {
            return true;
        }
        if (name === 'p' && node.children && node.children.length > 0
            && node.children[0].data
            && node.children[0].data.toLowerCase().trim().startsWith('analysis written by')) {
            return true;
        }
        return false;
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
                    <HTML 
                        html={solution.content}
                        renderers={this.renderers}
                        alterNode={this.alterNode}
                        alterData={this.alterData}
                        alterChildren={this.alterChildren}
                        ignoreNodesFunction={this.ignoreNodesFunction}
                        solution={solution} />
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
    }, 
    langTag: {
        fontWeight: '700' 
    },
    codeBlock: {
    }
});
