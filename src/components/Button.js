import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

export default class Button extends PureComponent {
	static propTypes = {
		children: PropTypes.node.isRequired,
		onClick: PropTypes.func.isRequired,
	}

	render() {
		return (
			<button
				type="button"
				onClick={this.props.onClick}
			>
				{this.props.children}
			</button>
		);
	}
}
