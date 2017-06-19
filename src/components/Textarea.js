import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

export default class Textarea extends PureComponent {
	static propTypes = {
		value: PropTypes.string.isRequired,
		onChange: PropTypes.func.isRequired,
		isDisabled: PropTypes.bool,
	}

	static defaultProps = {
		isDisabled: false,
	}

	handleChange = (event) => {
		const {onChange} = this.props;
		const {value} = event.currentTarget;
		onChange(value);
	}

	render() {
		return (
			<textarea
				value={this.props.value}
				onChange={this.handleChange}
				disabled={this.props.isDisabled}
			/>
		);
	}
}
