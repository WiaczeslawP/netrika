import {createAction} from 'redux-actions';
import * as actions from './constants';

export const addItem = createAction(
	actions.ADD_ITEM,
	item => ({item}),
);

export const toggleItem = createAction(
	actions.TOGGLE_ITEM,
	itemID => ({itemID}),
);

export const renameItem = createAction(
	actions.RENAME_ITEM,
	({itemID, title}) => ({itemID, title}),
);
