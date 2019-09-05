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
                        data={this.props.questions}
                        renderItem={({item}) => (
                            <View>
                                <Text>{item.title}</Text>
                                <HTML html={item.content} />
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
        top: 40,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
});
