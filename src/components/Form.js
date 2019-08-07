import React from 'react';
import TextInput from './TextInput.js';
import Button from './Button.js';
import '../styles/Form.css';


class Form extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			bmi: ''

		};

		this.heightChange = this.heightChange.bind(this);
		this.weightChange = this.weightChange.bind(this);
		this.computeBmi = this.computeBmi.bind(this);
		this.getBmi = this.getBmi.bind(this);
	}
	weightChange(weightValue) {
    	this.setState({ weight : weightValue });
	}

	heightChange(heightValue) {
 	   this.setState({ height:  heightValue / 100 });
	}

	computeBmi() {
		let calcBmi = ( this.state.weight / this.state.height) / this.state.height;
		let bmiValue = calcBmi.toFixed(1)
    	this.setState({ bmi : bmiValue });
    	let bmiClass = this.getBmi(bmiValue);
    	this.setState({ bmiClass : bmiClass });
	}

	getBmi(bmi) {
    if(bmi < 18.5) {
        return "Underweight";
    }
    if(bmi >= 18.5 && bmi < 24.9) {
        return "Normal weight";
    }
    if(bmi >= 25 && bmi < 29.9) {
        return "Overweight";
    }
    if(bmi >= 30) {
        return "Obesity";
    }
}


	render() {
		return(
			<div className="container"> 
				<div className="title">
					<h1>BMI Healthy Weight Calculator</h1>
				</div>
				<hr />
				<div className="row">
					<TextInput label="Height" placeholder="Enter height in centimeters" onChange={this.heightChange} />
				</div>
				<div className="row">
					<TextInput label="Weight" placeholder="Enter Weight in kg" onChange={this.weightChange} />
				</div>
				<div className="row">
                	<Button label="SUBMIT" onClick={ this.computeBmi } />
            	</div>
            	<div className="results">
    				<h2>BMI: {this.state.bmi}</h2>
				</div>
				<div className="results">
    				<h2>Status: {this.state.bmiClass}</h2>
				</div>	
			</div>
			
		)

	}
}

export default Form;
