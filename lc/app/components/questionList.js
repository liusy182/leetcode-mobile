import React, { Component } from 'react';
import { connect } from 'react-redux'
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';

class QuestionItem extends Component {

    onPress = () => {
        this.props.navigation.navigate('Question', { questionId: this.props.item.id })
    }

    render() {
        const { item } = this.props;
        return (
            <TouchableOpacity onPress={this.onPress}>
                <Text style={styles.title}>{item.title}</Text>
            </TouchableOpacity>
        );
    }
}


class QuestionList extends Component {
    render() {
        const { questions, navigation } = this.props;
        return (
            <View style={styles.container}>
                <View>
                    <FlatList
                        styles={styles.list}
                        data={questions}
                        renderItem={({ item }) => <QuestionItem item={item} navigation={navigation}/>}
                    />
                </View>
            </View>
        );
    }
}

const mapStateToProps = ({questions}) => ({
    questions,
})

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
