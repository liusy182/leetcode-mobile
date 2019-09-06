import React, { Component } from 'react';
import { connect } from 'react-redux'
import { StyleSheet, Text, View, Button } from 'react-native';
import HTML from 'react-native-render-html';


class Question extends Component {
    render() {
        const { question, navigation } = this.props;
        return (
            <View style={styles.container}>
                <View>
                    <Text style={styles.title}>{question.title}</Text>
                    <HTML html={question.content} />
                </View>
                <Button 
                    title="Solution" 
                    onPress={() => navigation.navigate('Solution', {questionid: question.id})}
                />
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
        alignItems: 'flex-start',
    },
    title: {
        fontSize: 24,
    }
});
