import React, { Component } from 'react';

class BabyWeight extends Component {
  constructor(props) {
   super(props);
   this.state = {babyWeightGs: '', babyWeightKgs: ''};
   this.convertToKG = this.convertToKG.bind(this);
   this.convertToG = this.convertToG.bind(this);
  }

  convertToKG(event) {
    this.setState({
      babyWeightKgs: event.target.value/1000,
      babyWeightGs: event.target.value
    });
  }
  convertToG(event) {
    this.setState({
      babyWeightKgs: event.target.value,
      babyWeightGs: event.target.value * 1000
    });
  }

  render() {
    return (

    <div>
      <label>
          Weight (grams):
          <input type="text" value={this.state.babyWeightGs} onChange={this.convertToKG} />
          Weight (kg):
              <input type="text" value={this.state.babyWeightKgs} onChange={this.convertToG} />
      </label>
    </div>
    );
  }
}

export default BabyWeight;
