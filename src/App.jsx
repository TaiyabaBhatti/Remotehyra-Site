import PagesRoute from "./routing/PagesRoute";
import Layout from "./routing/Layout";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";


function App() {


  useEffect(()=>{

AOS.init({
  once: false, 
      duration: 600, 
      easing: 'ease-in-out'
})


  },[])






  return (

    <Layout>
      <PagesRoute />
    </Layout>
  );
}

export default App;
