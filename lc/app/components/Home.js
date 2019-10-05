import React, { Component } from 'react';
import { connect } from 'react-redux'
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import SearchBar from './SearchBar';
import QuestionList from './QuestionList';


class Home extends Component {
    static navigationOptions = ({ navigation }) => ({
        title: 'Problems',
        headerRight: (
            <TouchableOpacity 
                style={styles.settings} 
                onPress={() => navigation.navigate('Settings') }>
                <Ionicons name="md-settings" size={32} color="grey" />
            </TouchableOpacity>
        ),
    })
    
    state = {
        filterText: '',
        orderBy: 'number',
    }

    onChangeText = (text) => {
        this.setState({filterText: text});
    }

    render() {
        const { navigation } = this.props;
        const { filterText, orderBy } = this.state;
        return (
            <View style={styles.container}>
                <SearchBar orderBy={orderBy} onChangeText={this.onChangeText}/>
                <QuestionList navigation={navigation} filterText={filterText} orderBy={orderBy}/>
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
)(Home)


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'stretch',
    },
    settings: {
        marginRight: 8,
    }
});
