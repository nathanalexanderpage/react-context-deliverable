import React from 'react';
import {LightContext} from './LightContext';

function Bulb() {
  return (
    <LightContext.Consumer>
    { // open a block
      ({on}) => { // Anonymous function with destructuring syntax to access `color` from the Context
        let style = {
          background: this.state.on ? 'yellow' : 'black'
        }
        return (
          <div style={style} className="Bulb"></div>
        )
      }
    }
    </LightContext.Consumer>
  )
}

export default Bulb;
