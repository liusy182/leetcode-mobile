import React, { Component } from 'react';
import { connect } from 'react-redux'
import { StyleSheet, Text, View, FlatList } from 'react-native';
import HTML from 'react-native-render-html';


class QuestionList extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View>
                    <FlatList
                        styles={styles.list}
                        data={this.props.questions}
                        renderItem={({item}) => (
                            <View>
                                <Text style={styles.title}>{item.title}</Text>
                            </View>
                        )}
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