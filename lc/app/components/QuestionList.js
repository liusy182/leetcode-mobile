import React, { Component } from 'react';
import { connect } from 'react-redux'
import { StyleSheet, Text, View, FlatList } from 'react-native';
import QuestionListItem from './QuestionListItem';

class QuestionList extends Component {
    render() {
        const { questions, navigation } = this.props;
        return (
            <View style={styles.container}>
                <View>
                    <FlatList
                        styles={styles.list}
                        data={questions}
                        renderItem={({ item }) => <QuestionListItem item={item} navigation={navigation}/>}
                    />
                </View>
            </View>
        );
    }
}

const mapStateToProps = ({questions}, ownProps) => {
    let cleanedQuestions = questions;
    if (ownProps.filterText) {
        const text = ownProps.filterText.toLowerCase();
        cleanedQuestions = cleanedQuestions.filter(
            q => q.title.toLowerCase().includes(text)
                || q.id.includes(text)
                || q.difficulty.toLowerCase().includes(text)
                || q.topicTags.find(v => v.toLowerCase().includes(text))
        );
    }
    return  {
        questions: cleanedQuestions.map(q => ({
            ...q,
            key: q.id
        })).sort((a, b) => parseInt(a.id) - parseInt(b.id))
    };
}

const mapDispatchToProps = dispatch => ({
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(QuestionList)


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'stretch',
    },
    list: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'stretch',
    },
    title: {
        fontSize: 20,
    }
});
