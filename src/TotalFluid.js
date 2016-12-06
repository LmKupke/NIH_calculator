import React, { Component } from 'react';
// import BabyWeight from 'BabyWeight';

class TotalFluid extends Component {
  constructor(props) {
    super(props)
    this.state = {
      totalIntravenousFR: '',
      nonHalFR: '',
      halFR: '',
      intralipidFR: ''
    };
    this.totalIntFluidRate = this.totalIntFluidRate.bind(this);
    this.nonHalFRFunc = this.nonHalFRFunc.bind(this);
    // this.totalIntravenousFR = this.totalIntravenousFR.bind(this);
  }

  totalIntFluidRate(event) {
    this.setState({
      totalIntravenousFR: event.target.value
    });
  }
  nonHalFRFunc(event) {
    this.setState({
      nonHalFR: event.target.value
    });
  }

  render() {
    return(
      <div>
        <div>
          <label>Total Intravenous Fluid Rate:</label>
          <input type="text" value={this.state.totalIntravenousFR} onChange={this.totalIntFluidRate} />
          <input type="text" value={parseInt(this.state.totalIntravenousFR) * 24 * this.props.babyWeightKgs} />

        </div>
        <div>
          <label>Non-HAL Fluid Rate:</label>
          <input type="text" value={this.state.nonHalFR} onChange={this.nonHalFRFunc} />
        </div>

      </div>
    );
  }
}

export default TotalFluid;
