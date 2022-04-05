import React from 'react';
import Plot from 'react-plotly.js';
import { useContext } from 'react';
import DataContext from "../store/data-store.js";
import FineContext from "../store/Fine-store.js";
import MildContext from "../store/Mild-store.js";
import BadContext from "../store/Bad-store";
import AwfulContext from "../store/Awful-store";

function Chart() 
{
  const GoodCtx = useContext(DataContext)
  let moodNums = GoodCtx.getMoodNum()

  const FineCtx = useContext(FineContext);
  let FineNums = FineCtx.getFineNum();

  const MildCtx = useContext(MildContext);
  let MildNums = MildCtx.getMildNum();

  const BadCtx = useContext(BadContext);
  let BadNums = BadCtx.getBadNum();

  const AwfulCtx = useContext(AwfulContext);
  let AwfulNums = AwfulCtx.getAwfulNum();

  return (
    <div className="chartBox">
    <Plot 
      data={[
        {
          x: ['Good','Fine','Mild','Bad','Awful'],
          y: [moodNums,FineNums,MildNums,BadNums,AwfulNums],
          marker: {color: '#7ed957'}
        }
      ]}
      layout={ {  width: 635, height: 510, title: 'Daily Stress Recorder'}}
    />
    </div>
  );
}
  
  export default Chart;