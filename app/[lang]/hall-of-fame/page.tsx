
import styles from "../../style/page.module.css";
import Header_top from "@/app/Components/Header_top"
import Header from "@/app/Components/Header"
import Main_Container from "@/app/Components/Main_Container"
import Test from "@/app/Components/Test"

export default function Index() {
  return (

 
    <div className={styles['ru'] + ' ' + styles['layout-royal']}>

      <div data-project-folder="CV" className={styles['layout'] + ' ' + styles['layout-royal']} style={{backgroundPosition: "50% 0", backgroundRepeat: "repeat-y"}}>

        <Header_top />

        <Header h_banner={false}/>

        <Main_Container page="hall_of_fame" />

        {/* <Test title="some"/> */}
        {/* <div>RUUUUUUUU</div> */}

      </div>

    </div>
  );
}
