import Link from "next/link";
import classes from "./MainNavigation.module.css";
import { Avatar } from '@nextui-org/react';
import { useContext } from 'react';
import DataContext from '../store/data-store.js'
import FineContext from "../store/Fine-store";
import MildContext from "../store/Mild-store";
import BadContext from "../store/Bad-store";
import AwfulContext from "../store/Awful-store";

function MainNavigation(props) {
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
    <div>
      <header className={classes.header}>
        <img src="TS.png" alt="ST"></img>
        <nav>
          <titles>
          <div>
            <Avatar text={moodNums} size="md" color="success" textColor="white"/>
          </div>
          <div>
            <Avatar text={FineNums} size="md" color="secondary" textColor="white"/>
          </div>
          <div>
            <Avatar text={MildNums} size="md" color="primary" textColor="white"/>
          </div>
          <div>
            <Avatar text={BadNums} size="md" color="warning" textColor="white"/>
          </div>
          <div>
            <Avatar text={AwfulNums} size="md" color="error" textColor="white"/>
          </div>
            <space>
              <Link href="/">Home</Link>
            </space>
            <space>
              <Link href ="/StressPage">Stress Recorder</Link>
            </space>
            <space>
              <Link href ="/ChartPage">Stress Chart</Link>
            </space>
          </titles>
        </nav>
      </header>
    </div>
  )
}

export default MainNavigation;
