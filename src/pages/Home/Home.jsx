import { Typography } from '@mui/material';
import Navbar from './components/navbar/Navbar'
import Subscription from './components/subscription/Subscription';
import styles from './styles/Home.module.css';

export default function Home() {
  const auth = localStorage.getItem("authToken");
  return (
    <div>
        <Navbar />
        <div>
          <div className={styles.subscription}>
            <h2 className={styles.title}>Paid Subscriptions</h2>
            <Subscription />
          </div>
        </div>
    </div>
  )
}
