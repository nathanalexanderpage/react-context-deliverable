import React from 'react';

export const LightContext = React.createContext({
  on: true,
  turnOnOff: () => {}
})
