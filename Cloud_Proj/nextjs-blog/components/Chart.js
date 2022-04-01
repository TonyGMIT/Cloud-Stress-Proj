import React from 'react';
import Plot from 'react-plotly.js';

function Chart() 
{
  return (
    <div className="chartBox">
    <Plot 
      data={[
        {
          x: ['Monday','Tuesday','Wednesday','Thursday','Friday', 'Saturday', 'Sunday'],
          y: [5,4,5,2,3,1,2],
          marker: {color: '#7ed957'}
        }
      ]}
      layout={ {  width: 635, height: 510, title: 'Daily Stress Recorder'}}
    />
    </div>
  );
}
  
  export default Chart;