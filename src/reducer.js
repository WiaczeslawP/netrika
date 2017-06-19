import {handleActions} from 'redux-actions';
import * as actions from './constants';

export const initialState = {
	items: [],
};

export default handleActions({
	[actions.ADD_ITEM]: (state, action) => ({
		...state,
		items: [...state.items, action.payload.item],
	}),
	[actions.TOGGLE_ITEM]: (state, action) => ({
		...state,
		items: state.items.map(item => (item.id === action.payload.itemID ?
			{...item, is_removed: !item.is_removed}
			: item
		)),
	}),
	[actions.RENAME_ITEM]: (state, action) => ({
		...state,
		items: state.items.map(item => (item.id === action.payload.itemID ?
			{...item, title: action.payload.title}
			: item
		)),
	}),
}, initialState);
