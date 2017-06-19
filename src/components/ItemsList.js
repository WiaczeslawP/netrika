import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import Button from 'components/Button';
import EditItemsListContainer from 'containers/EditItemsListContainer';
import Item from 'components/Item';

export default class ItemsList extends PureComponent {
	static propTypes = {
		items: PropTypes.arrayOf(PropTypes.shape({
			id: PropTypes.string.isRequired,
			title: PropTypes.string.isRequired,
			is_removed: PropTypes.bool.isRequired,
		})),
	}

	state = {
		showEditPanel: false,
	}

	toggleEditPanel = () => this.setState({showEditPanel: !this.state.showEditPanel})

	render() {
		return (
			<div className="items-list-container">
				<div className="items-list">
					<div>
						{this.props.items.map(item => <Item item={item} key={item.id} />)}
					</div>
					<div className="toggle-button">
						<Button onClick={this.toggleEditPanel}>
							{this.state.showEditPanel ? 'Close menu' : 'Open menu'}
						</Button>
					</div>
				</div>
				{this.state.showEditPanel ?
					<EditItemsListContainer/>
				: null}
			</div>
		);
	}
}
