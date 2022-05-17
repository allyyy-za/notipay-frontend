import { Typography } from '@mui/material';
import Navbar from './components/navbar/Navbar'

export default function Home() {
  const auth = localStorage.getItem("authToken");
  return (
    <div>
        <Navbar />
        <div>
          <Typography>Paid Subscriptions</Typography>
        </div>
    </div>
  )
}
