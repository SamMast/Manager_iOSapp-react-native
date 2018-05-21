import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import LoginForm from './components/LoginForm';

class App extends Component {
	componentWillMount() {
		const config = {
			apiKey: 'AIzaSyBDh8YmpnoMt8JlM2QnhxEuwGcDKZsZK7M',
			authDomain: 'manager-1c1b5.firebaseapp.com',
			databaseURL: 'https://manager-1c1b5.firebaseio.com',
			projectId: 'manager-1c1b5',
			storageBucket: 'manager-1c1b5.appspot.com',
			messagingSenderId: '161194370990'
		};

		firebase.initializeApp(config);
	}

	render() {
		const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
		
		return (
			<Provider store={store}>
				<LoginForm />
			</Provider>
		);
	}
}

export default App;
