import React, { Component } from 'react';
import { connect } from 'react-redux'
import { StyleSheet, View, Text, Button, Linking } from 'react-native';

class Settings extends Component {
    static navigationOptions = {
        title: 'Settings',
    }

    render() {
        const { navigation } = this.props;
        return (
            <View style={styles.container}>
                
                <View style={styles.copyright}>
                    <Text>content copyright: leetcode.com</Text>
                </View>
                <View style={styles.version}>
                    <Text>{'Version: 1.0.0'}</Text>
                </View>
                <View style={styles.feedback}>
                    <Button
                        title="Feedback"
                        onPress={() => Linking.openURL(
                            'mailto:liusy182@hotmail.com?subject=AppFeedback')}
                    />
                </View>
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
        justifyContent: 'center',
        alignItems: 'stretch',
    }, 
    copyright: {
        fontSize: 18,
        paddingHorizontal: 16,
        paddingVertical: 8,
        justifyContent: 'center',
        alignItems: 'center',
    }, 
    version: {
        fontSize: 18,
        paddingHorizontal: 16,
        paddingVertical: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },
    feedback: {
        fontSize: 18,
        paddingHorizontal: 16,
        paddingVertical: 16,
        justifyContent: 'center',
        alignItems: 'stretch',
    }
});
