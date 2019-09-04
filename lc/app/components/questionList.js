import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

export default class QuestionList extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View>
                    <FlatList
                        data={[{ key: 'a' }, { key: 'b' }, { key: 'c' }, { key: 'd' }]}
                        renderItem={({ item }) => <Text>{item.key}</Text>}
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        top: 40,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
});
