import React, { Component } from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './src/reducers';
import { Header } from './src/components/common/Header';
import LoginForm from './src/components/LoginForm';

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

        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

        return (
            <Provider store={store}>
                <View
                    style={{ marginTop: 25 }}
                >
                    <Header headerText={"Login / Create User"}/>
                    <LoginForm />
                </View>
            </Provider>
        );
    }
}

export default App;
