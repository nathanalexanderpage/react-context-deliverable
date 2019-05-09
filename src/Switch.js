import React from 'react';
import {LightContext} from './LightContext';

function Switch() {
  return (
    <div>
      <LightContext.Consumer>
        <button onClick={this.state.toggleSwitch}>
        </button>
      </LightContext.Consumer>
    </div>
  )
}

export default Switch;
