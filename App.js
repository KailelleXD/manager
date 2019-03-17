import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './src/reducers';
import LoginForm from './src/components/LoginForm'

class App extends Component {
    componentWillMount() {
        const config = {
            apiKey: 'AIzaSyDjycm3Q1qlZqZtQGxl9dXkIJMhtDIyTuM',
            authDomain: 'manager-7a675.firebaseapp.com',
            databaseURL: 'https://manager-7a675.firebaseio.com',
            projectId: 'manager-7a675',
            storageBucket: 'manager-7a675.appspot.com',
            messagingSenderId: '1003336414221'
        };
        firebase.initializeApp(config);
    }

    render() {
        return (
            <Provider store={createStore(reducers)}>
                <LoginForm />
            </Provider>
        );
    }
}

export default App;
