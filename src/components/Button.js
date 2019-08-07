import React from 'react';
import '../styles/Button.css';


class Button extends React.Component {
	render() {
		return(
			<div>
				<button class="button" onClick={this.props.onClick}>
				{this.props.label}
				</button>
			</div>
			)
	}
}

export default Button;