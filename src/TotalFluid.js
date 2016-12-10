import React, { Component } from 'react';
// import BabyWeight from 'BabyWeight';

class TotalFluid extends Component {
  constructor(props) {
    super(props)
    this.state = {
      totalIntravenousFR: '0',
      totalIntravenousFRKG: '0',
      nonHalFR: '',
      halFR: '',
      intralipidFR: ''
    };
    this.totalIntFluidRate = this.totalIntFluidRate.bind(this);
    this.nonHalFRFunc = this.nonHalFRFunc.bind(this);
    this.totalIntFluidRatemLKgHr = this.totalIntFluidRatemLKgHr.bind(this);
    // this.totalIntravenousFR = this.totalIntravenousFR.bind(this);
  }

  totalIntFluidRate(event) {
    this.setState({
      totalIntravenousFR: event.target.value,
      totalIntravenousFRKG: parseInt(event.target.value * 24)/ this.props.babyWeightKgs
    });
  }
  nonHalFRFunc(event) {
    this.setState({
      nonHalFR: event.target.value
    });
  }
  totalIntFluidRatemLKgHr(event) {
    this.setState({
      totalIntravenousFR: parseInt(event.target.value * this.props.babyWeightKgs)/24,
      totalIntravenousFRKG: event.target.value
    });
  }

  render() {
    return(
      <div>
        <div>
          <label>Total Intravenous Fluid Rate(mL/kg/hr)</label>
          <input type="text" onChange={this.totalIntFluidRatemLKgHr} value={this.state.totalIntravenousFRKG} />
          <label>Total Intravenous Fluid Rate (mL/hr):</label>
          <input type="text" value={this.state.totalIntravenousFR} onChange={this.totalIntFluidRate} />
        </div>
        <div>
          <div><label>Non-HAL IV FLUIDS</label></div>
        <div><label>Intralipid (20%)</label></div>
      <div><b><label>Hyperalimentation</label></b></div>
      <a href="mailto:lincolnkupke@gmail.com?Subject=Hello%20again" target="_top">Email Lincoln Kupke</a>
        </div>

      </div>
    );
  }
}

export default TotalFluid;
