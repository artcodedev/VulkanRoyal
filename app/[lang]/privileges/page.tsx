import Header_top from "@/app/Components/Header_top"
import Header from "@/app/Components/Header"
import Main_Container from "@/app/Components/Main_Container"

const Index = () => {

    return (<>
        <div className="ru layout-royal">

            <div data-project-folder="CV" className="layout layout-royal" style={{ backgroundPosition: "50% 0", backgroundRepeat: "repeat-y" }}>

                <Header_top />

                <Header h_banner={false}/>

                <Main_Container page="privileges"/>

            </div>

        </div></>)

}

export default Index;