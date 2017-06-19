import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import EditItemContainer from 'containers/EditItemContainer';
import uniqid from 'uniqid';

export default class EditItemsList extends PureComponent {
	static propTypes = {
		items: PropTypes.arrayOf(PropTypes.shape({
			id: PropTypes.string.isRequired,
			title: PropTypes.string.isRequired,
			is_removed: PropTypes.bool.isRequired,
		})).isRequired,
		addItem: PropTypes.func.isRequired,
	}

	handleAddItem = () => this.props.addItem({
		id: uniqid(),
		title: '',
		is_removed: false,
	})

	render() {
		const {items} = this.props;
		return (
			<div className="edit-items-list">
				<div>
					{items.map((item, index) =>
						<EditItemContainer item={item} index={index} key={item.id} />
					)}
				</div>
				<Button onClick={this.handleAddItem}>
					Add Item
				</Button>
			</div>
		);
	}
}
