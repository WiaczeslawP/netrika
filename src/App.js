import React, {PureComponent} from 'react';
import {Provider} from 'react-redux';
import configureStore from 'store/configureStore';
import ItemsListContainer from 'containers/ItemsListContainer';
import './App.css'

const store = configureStore({});

export default class App extends PureComponent {
	render() {
		return (
			<Provider store={store}>
				<div className="app">
					<ItemsListContainer />
				</div>
			</Provider>
		);
	}
}
