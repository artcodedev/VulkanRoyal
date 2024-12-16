
import styles from "../style/page.module.css";
import Header_top from "@/app/Components/Header_top"
import Header from "@/app/Components/Header"
import Main_Container from "@/app/Components/Main_Container"
import NotFound from "@/app/not-found";

export default function Index({ params }: { params: { lang: string } }) {

  return (

    <>{

      (['ru', 'en'].indexOf(params.lang) == -1) ?  <NotFound /> : 
    
      
    <div className={styles['ru'] + ' ' + styles['layout-royal']}>

      <div data-project-folder="CV" className={styles['layout'] + ' ' + styles['layout-royal']} style={{backgroundPosition: "50% 0", backgroundRepeat: "repeat-y"}}>

        <Header_top />

        <Header h_banner={true}/>

         <Main_Container page="main" />

       </div>

     </div>}</>
 

  );
}
