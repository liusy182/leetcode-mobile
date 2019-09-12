import React, { Component } from 'react';
import { connect } from 'react-redux'
import { StyleSheet, View, Text } from 'react-native';

class Settings extends Component {
    static navigationOptions = {
        title: 'Settings',
    }

    render() {
        const { navigation } = this.props;
        return (
            <View style={styles.container}>
                <Text>Settings</Text>
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
)(Settings)


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
    }
});
