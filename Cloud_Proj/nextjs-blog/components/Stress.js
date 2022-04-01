import { useContext } from "react";
import DataContext from "../store/data-store.js";
import FineContext from "../store/Fine-store.js";
function Stress() {

  const dataCtx = useContext(DataContext);
  let moodNum = dataCtx.getMoodNum();

  const dataCtxs = useContext(FineContext);
  let FineNum = dataCtxs.getFineNum();

  function incrementMoods() {
    moodNum = dataCtx.getMoodNum();
    moodNum = parseInt(moodNum) + 1;
    dataCtx.setMoodNum("" + moodNum);
  }

  function incrementMoods1() {
    FineNum = dataCtxs.getFineNum();
    FineNum = parseInt(FineNum) + 1;
    dataCtxs.setFineNum("" + FineNum);
  }
  return (

      <div className="StressBox">
        <img src="STR.png" alt="STR" class="center"></img>
          <button class="GoodBtn" auto onClick={() => incrementMoods()}>Good</button>
          <button class="FineBtn" auto onClick={() => incrementMoods1()}>Fine</button>
          <button class="MildBtn" auto onClick={() => incrementMoods()}>Mild</button>
          <button class="BadBtn" auto onClick={() => incrementMoods()}>Bad</button>
          <button class="AwfulBtn" auto onClick={() => incrementMoods()}>Awful</button>
      </div>
  );
}

export default Stress;
