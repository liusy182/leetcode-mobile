import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Dimensions, StyleSheet, View, TextInput } from 'react-native';

class SearchBar extends Component {

    state = {
        text: this.props.filterText,
    }

    onChangeText = (text) => {
        this.setState({ text })
        clearTimeout(this.timeout);
        this.timeout = setTimeout(() => {
            this.props.onChangeText(this.state.text);
        }, 400);
    }

    render() {
        const { orderBy } = this.props;
        const { text, showSortMenu } = this.state;
        return (
            <View style={styles.container}>
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
        borderBottomColor: '#d5d5d5',
        borderBottomWidth: 1,
    },
    search: {
        fontSize: 20,
        padding: 8,
        flexGrow: 1,
    },
});
