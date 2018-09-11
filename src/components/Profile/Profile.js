import React, { Component } from 'react';
import { Chart } from 'react-google-charts';

class Profile extends Component {
  state = {
    earn: false,
    myEarn: false,
    waste: false,
    myWaste: false,
    bought: false,
    myBought: false,
    sold: false,
    mySold: false,
    fetchNotEnded: true,
  };

  fetchData() {
    fetch('http://5b7e8126adf2070014bfa378.mockapi.io/statistics-all-earn')
      .then(res => res.json())
      .then(res => this.setState({ earn: parseInt(res[0].earn, 10) }));

    fetch('http://5b7e8126adf2070014bfa378.mockapi.io/statistics-my-earn')
      .then(res => res.json())
      .then(res => this.setState({ myEarn: parseInt(res[0].earn, 10) }));

    fetch('http://5b7e8126adf2070014bfa378.mockapi.io/statistics-all-waste')
      .then(res => res.json())
      .then(res => this.setState({ waste: parseInt(res[0].waste, 10) }));

    fetch('http://5b7e8126adf2070014bfa378.mockapi.io/statistics-my-waste')
      .then(res => res.json())
      .then(res => this.setState({ myWaste: parseInt(res[0].waste, 10) }));

    fetch('http://5b7e8126adf2070014bfa378.mockapi.io/statistics-all-bought')
      .then(res => res.json())
      .then(res => this.setState({ bought: parseInt(res[0].bought, 10) }));

    fetch('http://5b7e8126adf2070014bfa378.mockapi.io/statistics-my-bought')
      .then(res => res.json())
      .then(res => this.setState({ myBought: parseInt(res[0].bought, 10) }));

    fetch('http://5b7e8126adf2070014bfa378.mockapi.io/statistics-all-sold')
      .then(res => res.json())
      .then(res => this.setState({ sold: parseInt(res[0].sold, 10) }));

    fetch('http://5b7e8126adf2070014bfa378.mockapi.io/statistics-my-sold')
      .then(res => res.json())
      .then(res => this.setState({ mySold: parseInt(res[0].sold, 10) }));
  }

  fetchEndCheck() {
    let result = false;

    for (const key in this.state) {
      if (!this.state[key]) {
        result = false;
        break;
      }
      result = true;
    }
    if (result && this.state.fetchNotEnded) {
      this.setState({ fetchNotEnded: false }, () => this.sortData());
    }
  }

  sortData() {
    this.setState(prev => ({
      earn: [
        ['Dollars', 'Earn', { role: 'style' }],
        ['Avarage', prev.earn, 'color: #871B47'],
        ['Yours', prev.myEarn, 'color: #76A7FA'],
      ],
      waste: [
        ['Dollars', 'Waste', { role: 'style' }],
        ['Avarage', prev.waste, 'color: #871B47'],
        ['Yours', prev.myWaste, 'color: #76A7FA'],
      ],
      bought: [
        ['Dollars', 'Bought', { role: 'style' }],
        ['Avarage', prev.bought, 'color: #871B47'],
        ['Yours', prev.myBought, 'color: #76A7FA'],
      ],
      sold: [
        ['Dollars', 'Sold', { role: 'style' }],
        ['Avarage', prev.sold, 'color: #871B47'],
        ['Yours', prev.mySold, 'color: #76A7FA'],
      ],
    }));
  }

  componentDidUpdate() {
    this.fetchEndCheck();
  }

  componentDidMount() {
    this.fetchData();
  }

  render() {
    const { earn, waste, bought, sold, fetchNotEnded } = this.state;

    if (fetchNotEnded) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <Chart
          options={{ title: 'Earn', legend: 'none' }}
          chartType="BarChart"
          data={earn}
          width="100%"
        />
        <Chart
          options={{ title: 'Waste', legend: 'none' }}
          chartType="BarChart"
          data={waste}
          width="100%"
        />
        <Chart
          options={{ title: 'Bought', legend: 'none' }}
          chartType="BarChart"
          data={bought}
          width="100%"
        />
        <Chart
          options={{ title: 'Sold', legend: 'none' }}
          chartType="BarChart"
          data={sold}
          width="100%"
        />
      </div>
    );
  }
}

export default Profile;
