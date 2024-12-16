
import Sidebar_Block_Top from "@/app/Components/Sidebar_Block_Top"
import Sidebar_Search from "@/app/Components/Sidebar_Search"
import Sidebar_Strip from "@/app/Components/Sidebar_Strip"
import Sidebar_Bonus from "@/app/Components/Sidebar_Bonus"
import Sidebar_Top_Prizes from "@/app/Components/Sidebar_Top_Prizes"
import Sidebar_News from "@/app/Components/Sidebar_News"
import Sidebar_Tournament from "@/app/Components/Sidebar_Tournament"
import Nav_Wrapper from "@/app/Components/Nav_Wrapper"
import Cnt_Main_Top from "@/app/Components/Cnt_Main_Top"
import Main_Games_Block from "@/app/Components/Main_Games_Block"
import Jackpot from "@/app/Components/Jackpot"
import Footer from "@/app/Components/Footer"
import Terms from "@/app/Components/Terms"
import Online_Casino from "@/app/Components/Online_Casino"
import Igra_Na_Razdevanie from "@/app/Components/Igra_Na_Razdevanie"
import Privileges from "@/app/Components/Privileges"
import Mob_App from "@/app/Components/Mob_App"
import Faq from "@/app/Components/Faq"
import All_news from "@/app/Components/All_news"
import Hall_of_fame from "@/app/Components/Hall_of_fame"


const Main_Container = ({ page }: { page: string }) => {

    let page_s = <Main_Games_Block />;

    if (page == "main") page_s = <Main_Games_Block />
    if (page == "online_casino") page_s = <Online_Casino />
    if (page == "jackpot") page_s = <Jackpot />
    if (page == "terms") page_s = <Terms />
    if (page == "igra_na_razdevanie") page_s = <Igra_Na_Razdevanie />
    if (page == "privileges") page_s = <Privileges />
    if (page == "mob-app") page_s = <Mob_App />
    if (page == "faq") page_s = <Faq />
    if (page == "all_news") page_s = <All_news />
    if (page == "hall_of_fame") page_s = <Hall_of_fame /> 


    return(
        <>
        <section className="container">
            <div className="wrapper">

                <div className="container-wrapper grid-wrapper">


                    <div className="content content--main">

                        <Cnt_Main_Top />

                        <Nav_Wrapper />

                        <div>
                            <div className="cnt-main cnt-main--static">

                                {page_s}

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
        </>
    );
}


export default Main_Container;