import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

export default class Item extends PureComponent {
	static propTypes = {
		item: PropTypes.shape({
			id: PropTypes.string.isRequired,
			title: PropTypes.string.isRequired,
			is_removed: PropTypes.bool.isRequired,
		}),
	}

	render() {
		return (
			<div className="items-list__item">
				{this.props.item.title}
			</div>
		);
	}
}
