import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Dimensions, StyleSheet, TouchableOpacity, View, TextInput, Text } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

class SearchBar extends Component {

    state = {
        text: this.props.filterText,
        showSortMenu: false,
    }

    onChangeText = (text) => {
        this.setState({ text })
        clearTimeout(this.timeout);
        this.timeout = setTimeout(() => {
            this.props.onChangeText(this.state.text);
        }, 400);
    }

    onPress = () => {
        this.setState({ showSortMenu: !this.state.showSortMenu })
    }

    render() {
        const { orderBy } = this.props;
        const { text, showSortMenu } = this.state;
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={this.onPress} style={styles.sort}>
                    <MaterialIcons name="sort" size={28} />
                    {showSortMenu && (
                        <View style={styles.sortMenu}>
                            <Text>{'Sort By:'}</Text>
                            <TouchableOpacity style={styles.sortItem}>
                                <Text>{'Number'}</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.sortItem}>
                                <Text>{'Difficulty'}</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.sortItem}>
                                <Text>{'Alphabetically'}</Text>
                            </TouchableOpacity>
                        </View>
                    )}
                </TouchableOpacity>
                <TextInput 
                    style={styles.search} 
                    autoCapitalize={'none'}
                    autoCompleteType={'off'}
                    autoCorrect={false}
                    placeholder={'Search'}
                    onChangeText={this.onChangeText}
                    value={text}
                />
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
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
    },
    search: {
        fontSize: 20,
        padding: 8,
    },
    sort: {
        paddingHorizontal: 8,
        position: 'relative',
    },
    sortMenu: {
        position: 'absolute',
        backgroundColor: '#d2d2d2',
        left: 0,
        top: 30,
        width: Dimensions.get('window').width,
        height: 'auto',
        zIndex: 100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
    }, 
    sortItem: {
        padding: 8
    }
});
