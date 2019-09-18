import React, { Component } from 'react';
import { connect } from 'react-redux'
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
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
            q => q.title.toLowerCase().includes(text));
    }
    return  {
        questions: cleanedQuestions.map(q => ({
            ...q,
            key: q.id
        }))
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
        alignItems: 'flex-start',
    },
    list: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
    },
    title: {
        fontSize: 20,
    }
});
