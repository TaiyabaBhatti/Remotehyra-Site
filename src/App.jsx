import PagesRoute from "./routing/PagesRoute";
import Layout from "./routing/Layout";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import PageTitle from "./routing/PageTitle";




function App() {

  const currentLocation = useLocation();
  
 
 useEffect(()=>{

 




    // scroll animation
AOS.init({
  once: false, 
      duration: 600, 
      easing: 'ease-in-out'
})


  },[])






  return (

    <Layout>
<PageTitle/>
      <PagesRoute />
    </Layout>
  );
}

export default App;
