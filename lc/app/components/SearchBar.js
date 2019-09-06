import React, { Component } from 'react';
import { connect } from 'react-redux'
import { StyleSheet, Text, View } from 'react-native';


class SearchBar extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>{'Search Bar'}</Text>
            </View>
        );
    }
}

const mapStateToProps = () => ({
})

const mapDispatchToProps = dispatch => ({
})


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SearchBar)


const styles = StyleSheet.create({
    container: {
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
    },
    title: {
        fontSize: 16,
    }
});
