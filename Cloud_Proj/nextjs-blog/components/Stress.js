import { useContext } from "react";
import DataContext from "../store/data-store.js";
import FineContext from "../store/Fine-store.js";
import MildContext from "../store/Mild-store.js";
import BadContext from "../store/Bad-store.js";
import AwfulContext from "../store/Awful-store.js";

function Stress() {

  const GoodCtx = useContext(DataContext);
  let moodNum = GoodCtx.getMoodNum();

  const FineCtx = useContext(FineContext);
  let FineNum = FineCtx.getFineNum();

  const MildCtx = useContext(MildContext);
  let MildNum = MildCtx.getMildNum();

  const BadCtx = useContext(BadContext);
  let BadNum = BadCtx.getBadNum();

  const AwfulCtx = useContext(AwfulContext);
  let AwfulNum = AwfulCtx.getAwfulNum();

  function incrementGood() {
    moodNum = GoodCtx.getMoodNum();
    moodNum = parseInt(moodNum) + 1;
    GoodCtx.setMoodNum("" + moodNum);
  }

  function incrementFine() {
    FineNum = FineCtx.getFineNum();
    FineNum = parseInt(FineNum) + 1;
    FineCtx.setFineNum("" + FineNum);
  }

  function incrementMild() {
    MildNum = MildCtx.getMildNum();
    MildNum = parseInt(MildNum) + 1;
    MildCtx.setMildNum("" + MildNum);
  }

  function incrementBad() {
    BadNum = BadCtx.getBadNum();
    BadNum = parseInt(BadNum) + 1;
    BadCtx.setBadNum("" + BadNum);
  }

  function incrementAwful() {
    AwfulNum = AwfulCtx.getAwfulNum();
    AwfulNum = parseInt(AwfulNum) + 1;
    AwfulCtx.setAwfulNum("" + AwfulNum);
  }

  return (

      <div className="StressBox">
        <img src="STR.png" alt="STR" class="center"></img>
          <button class="GoodBtn" auto onClick={() => incrementGood()}>Good</button>
          <button class="FineBtn" auto onClick={() => incrementFine()}>Fine</button>
          <button class="MildBtn" auto onClick={() => incrementMild()}>Mild</button>
          <button class="BadBtn" auto onClick={() => incrementBad()}>Bad</button>
          <button class="AwfulBtn" auto onClick={() => incrementAwful()}>Awful</button>
      </div>
  );
}

export default Stress;
