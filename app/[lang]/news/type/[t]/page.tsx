
import Header_top from "@/app/Components/Header_top"
import Header from "@/app/Components/Header"
import Cnt_Main_Top from "@/app/Components/Cnt_Main_Top"
import Nav_Wrapper from "@/app/Components/Nav_Wrapper"
import Sidebar_Block_Top from "@/app/Components/Sidebar_Block_Top"
import Sidebar_Search from "@/app/Components/Sidebar_Search"
import Sidebar_Strip from "@/app/Components/Sidebar_Strip"
import Sidebar_Bonus from "@/app/Components/Sidebar_Bonus"
import Sidebar_Top_Prizes from "@/app/Components/Sidebar_Top_Prizes"
import Sidebar_News from "@/app/Components/Sidebar_News"
import Sidebar_Tournament from "@/app/Components/Sidebar_Tournament"
import Footer from "@/app/Components/Footer"
import News__nav_list from "@/app/Components/News__nav_list"
import NotFound from "@/app/not-found";
import Main_Container from "@/app/Components/Main_Container"


const Index = ({ params }: { params: { t: Number } }) => {

    const st: number = parseInt(params.t.toString())

    const item_type: number = st == 0 ? 10 : st - 1

    return (<>

        {item_type > 3 ? <NotFound /> : <div className="ru layout-royal">

            <div data-project-folder="CV" className="layout layout-royal" style={{ backgroundPosition: "50% 0", backgroundRepeat: "repeat-y" }}>

                <Header_top />

                <Header h_banner={false} />

                <section className="container">
                    <div className="wrapper">

                        <div className="container-wrapper grid-wrapper">


                            <div className="content content--main">

                                <Cnt_Main_Top />

                                <Nav_Wrapper />

                                <div>
                                    <div className="cnt-main cnt-main--static">

                                        <div className="cnt-main cnt-main--static" data-content-block="">
                                            <div className="news__page">
                                                <h1 className="news__page_title">
                                                    <span> Новости «Royal casino» казино</span>
                                                </h1>

                                                <News__nav_list active={item_type} />

                                                <div className="news__items">{params.t.toString()}</div>


                                            </div>
                                        </div>

                                    </div>
                                </div>


                            </div>

                            <aside className="sidebar" data-test="right_sidebar">

                                <Sidebar_Block_Top />

                                <Sidebar_Search />

                                <Sidebar_Strip />

                                <Sidebar_Bonus />

                                <Sidebar_Tournament />

                                <Sidebar_Top_Prizes />

                                <Sidebar_News />


                            </aside>
                        </div>

                        <Footer />


                    </div>
                </section>

                {/* {<>{params.t}</>} */}

                {/* <Main_Container page="terms"/> */}

            </div>

        </div>}

    </>)
}

export default Index;