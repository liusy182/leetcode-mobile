import React, { Component } from 'react';
import { connect } from 'react-redux'
import { StyleSheet, Text, View, ScrollView, 
    Button, Image, Dimensions, TouchableOpacity, Linking } from 'react-native';
import HTML from 'react-native-render-html';

import { getDifficultyColor } from '../helpers';

const imgPrefix = 'https://lc-all-assets.s3-us-west-2.amazonaws.com/'

class Question extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            title: (
                navigation.state.params.question &&
                navigation.state.params.question.title
            ) || 'Problem',
        };
    };

    renderers = {
        img: (htmlAttribs, children, convertedCSSStyles, passProps) => {
            let src = htmlAttribs.src.replace('../img/', '');
            return (
                <Image 
                    key={src}
                    style={{ 
                        width: Dimensions.get('window').width,
                        height: 300,
                        resizeMode: 'contain'
                     }}
                    source={{  uri: imgPrefix + src }} 
                />);
        }
    }

    goCopyright = () => {
        const { question } = this.props;
        const url = `https://leetcode.com/problems/${question.slug}/`;
        Linking.canOpenURL(url).then(supported => {
            if (supported) {
                Linking.openURL(url);
            } else {
                console.log("Don't know how to open URI: " + url);
            }
        }).catch(console.log);
    }

    render() {
        const { question, navigation } = this.props;
        return (
            <View style={styles.container}>
                <ScrollView>
                    <Text style={styles.title}>{question.title}</Text>
                    <View style={styles.meta}>
                        <View style={styles.levelWrapper}>
                            <Text style={{ ...styles.level, color: getDifficultyColor(question.difficulty) }}>
                                {question.difficulty}
                            </Text>
                        </View>
                        {question.topicTags.map(tag => (
                            <View key={tag} style={styles.tagWrapper}>
                                <Text style={styles.tag}>{tag}</Text>
                            </View>))}
                    </View>
                    <TouchableOpacity 
                        style={styles.copyright} 
                        onPress={this.goCopyright}
                    >
                        <Text style={styles.copyrightTxt}>{"view in leetcode.com"}</Text>
                    </TouchableOpacity>
                    <HTML html={question.content} renderers={this.renderers} question={question}/>
                    {question.solution && (
                        <View style={styles.solutionContainer}>
                            <Button 
                                title="Solution" 
                                onPress={() => navigation.navigate('Solution', { question })}
                            />
                        </View>)
                    }
                </ScrollView>
            </View>
        );
    }
}

const mapStateToProps = ({}, ownProps) => {
    const { question } = ownProps.navigation.state.params;
    return {
        question
    }
    
};

const mapDispatchToProps = dispatch => ({
})


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Question)


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
    solutionContainer: {
        marginBottom: 20,
    },
    meta: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        flexWrap: 'wrap',
        paddingVertical: 4,
    },
    levelWrapper: {
        marginRight: 4,
        marginVertical: 4,
        padding: 4,
    },
    level: {
        fontSize: 14,
    },
    tagWrapper: {
        flexWrap: 'wrap',
        margin: 4,
        padding: 4,
        borderColor: '#67B7D1',
        borderWidth: 1,
        borderRadius: 4,
    },
    tag: {
        fontSize: 12,
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
