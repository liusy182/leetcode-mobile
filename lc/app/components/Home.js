import React, { Component } from 'react';
import { connect } from 'react-redux'
import { StyleSheet, View, Button } from 'react-native';
import SearchBar from './SearchBar';
import QuestionList from './QuestionList';


class Home extends Component {
    static navigationOptions = ({ navigation }) => ({
        title: 'Questions',
        headerRight: (
            <Button
                onPress={() => navigation.navigate('Settings') }
                title = "Settings"
            />),
    })

    render() {
        const { navigation } = this.props;
        return (
            <View style={styles.container}>
                <SearchBar />
                <QuestionList navigation={navigation}/>
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
        alignItems: 'flex-start',
    }
});