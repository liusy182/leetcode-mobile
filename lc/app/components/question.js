import React, { Component } from 'react';
import { connect } from 'react-redux'
import { StyleSheet, Text, View, ScrollView, Button, Image, Dimensions } from 'react-native';
import HTML from 'react-native-render-html';

import { getDifficultyColor } from '../helpers';

class Question extends Component {
    renderers = {
        img: (htmlAttribs, children, convertedCSSStyles, passProps) => {
            return false;
            // return (<Image source={require(htmlAttribs.src)} />);
        }
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
                    <HTML html={question.content} renderers={this.renderers}/>
                    {question.solution && (
                        <View style={styles.solutionContainer}>
                            <Button 
                                title="Solution" 
                                onPress={() => navigation.navigate('Solution', {questionid: question.id})}
                            />
                        </View>)
                    }
                </ScrollView>
            </View>
        );
    }
}

const mapStateToProps = ({ questions }, ownProps) => {
    const { questionId } = ownProps.navigation.state.params;
    return {
        question: questions.find((question) => question.id == questionId)
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
    }
});
