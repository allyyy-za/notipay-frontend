import { Stack } from "@mui/material";
import Bills from "./components/bills/Bills";
import Navbar from "./components/navbar/Navbar";
import Subscriptions from "./components/subscriptions/Subscriptions";
import styles from "./styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div>
        <Stack spacing={0} direction="column" className={styles.stack}>
          <item>
            <div className={styles.subscription}>
              <h2 className={styles.title}>Paid Subscriptions</h2>
              <Subscriptions />
            </div>
          </item>
          <item>
            <div className={styles.bill}>
              <h2 className={styles.title}>Bills</h2>
              <Bills className={styles.popup} />
            </div>
          </item>
          <item>
            <div className={styles.footer}></div>
          </item>
        </Stack>
      </div>
    </div>
  );
}
