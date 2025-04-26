import Header from "../components/Header" 
import Footer from "../components/Footer"
 

 
export default function Layout({children}){


return (
    <>

    {/* just the part between Header and Footer component will be changing */}
    <Header/>
    {children}
    <Footer/>
    
    </>
)

 }