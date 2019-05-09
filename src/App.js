import React, {Component} from 'react';
import Bulb from './Bulb';
import Switch from './Switch';
import {LightContext} from './LightContext';

class App extends Component {
  state = {
    on: true,
    toggleSwitch: () => {
      this.setState({
        on: !this.state.on
      })
    }
  }

  render () {
    return (
      <LightContext.Provider value={this.state}>
        <Bulb />
        <Switch />
      </LightContext.Provider>
    )
  }
}

export default App;
