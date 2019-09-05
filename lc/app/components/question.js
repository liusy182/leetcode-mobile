import React, { Component } from 'react';
import { connect } from 'react-redux'
import { StyleSheet, Text, View, FlatList } from 'react-native';
import HTML from 'react-native-render-html';


class Question extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View>
                    <Text style={styles.title}>{this.props.questions[0].title}</Text>
                    <HTML html={this.props.questions[0].content} />
                </View>
            </View>
        );
    }
}

const mapStateToProps = ({ questions }) => ({
    questions,
})

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
