// Code Product Component Here
import React from 'react';
import PropTypes from 'prop-types';

export default class Product extends React.Component {
	render() {
		return (
			<div className="product">
				<ul>
					<li>{this.props.name}</li>
					<li>{this.props.producer}</li>
					<li>{this.props.hasWatermark ? 'true' : 'false'}</li>
					<li>{this.props.color}</li>
					<li>{this.props.weight}</li>

				</ul>
			</div>
			)
	}
}

Product.defaultProps = {
	hasWatermark: false
}

Product.propTypes = {
	name: PropTypes.string.isRequired,
	producer: PropTypes.string,
	hasWatermark: PropTypes.bool,
	color: PropTypes.oneOf(['white', 'eggshell-white', 'salmon']).isRequired,
	weight: function(props, propName) {
		if (!props[propName]) {
			return new Error(propName + ' is Required.')
		}

		if (typeof props[propName] !== 'number') {
			return new Error(propName + 'is not a number.')
		}

		if ((props[propName] < 80 || props[propName] > 300)) { return new Error(propName + 'must be between 80 and 300.')
		}
	}
}



