import '@/styles/globals.css'
import Footer from '@/Components/Shared/Footer';
import Navbar from "@/Components/Shared/Navbar";
import { useRouter } from 'next/router';



export default function App({ Component, pageProps }) {
  const router = useRouter();
  return <>
        <Navbar></Navbar>
        <Component {...pageProps} />
        {router.pathname==="/cart"?"":<Footer></Footer>}
  </>
}