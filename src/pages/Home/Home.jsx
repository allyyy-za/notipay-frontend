import { Typography } from "@mui/material";
import Bills from "./components/bills/Bills";
import Navbar from "./components/navbar/Navbar";
import Subscriptions from "./components/subscriptions/Subscriptions";
import styles from "./styles/Home.module.css";

export default function Home() {
  const auth = localStorage.getItem("authToken");
  return (
    <div>
      <Navbar />
      <div>
        <div className={styles.subscription}>
          <h2 className={styles.title}>Paid Subscriptions</h2>
          <Subscriptions />
        </div>
        <div>
          <h2 className={styles.title}>Bills</h2>
          <Bills />
        </div>
      </div>
    </div>
  );
}
