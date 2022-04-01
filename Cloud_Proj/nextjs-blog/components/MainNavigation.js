import Link from "next/link";
import classes from "./MainNavigation.module.css";
import { Avatar } from '@nextui-org/react';
import { useContext } from 'react';
import DataContext from '../store/data-store.js'
import FineContext from "../store/Fine-store";

function MainNavigation(props) {
  const dataCtx = useContext(DataContext)
  let moodNums = dataCtx.getMoodNum()

  const dataCtxs = useContext(FineContext);
  let FineNums = dataCtxs.getFineNum();
  
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
            <Avatar text={moodNums} size="md" color="primary" textColor="white"/>
          </div>
          <div>
            <Avatar text={moodNums} size="md" color="warning" textColor="white"/>
          </div>
          <div>
            <Avatar text={moodNums} size="md" color="error" textColor="white"/>
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
