import React from 'react';

const spinner = () => (
  <div className="ui segment" style={{ height: '530px' }}>
    <div className="ui active inverted dimmer">
      <div className="ui large text loader"></div>
    </div>
  </div>
);

export default spinner;
