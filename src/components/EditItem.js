import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import Textarea from './Textarea';
import Button from './Button';

export default class EditItem extends PureComponent {
	static propTypes = {
		item: PropTypes.shape({
			id: PropTypes.string.isRequired,
			title: PropTypes.string.isRequired,
			is_removed: PropTypes.bool.isRequired,
		}),
		renameItem: PropTypes.func.isRequired,
		toggleItem: PropTypes.func.isRequired,
		index: PropTypes.number.isRequired,
	}

	handleChange = (title) => this.props.renameItem({
		itemID: this.props.item.id,
		title,
	})

	handleClick = () => this.props.toggleItem(this.props.item.id)

	render() {
		const {index, item} = this.props;
		return (
			<div className="edit-items-list__item">
				<div>Item #{index}</div>
				<div>
					<Textarea
						value={item.title}
						onChange={this.handleChange}
						isDisabled={item.is_removed}
					/>
				</div>
				<Button onClick={this.handleClick}>
					{item.is_removed ? 'Restore' : 'Remove'}
				</Button>
			</div>
		);
	}
}
