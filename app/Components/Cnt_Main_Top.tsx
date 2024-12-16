
import Main_Jackpot from "@/app/Components/Main_Jackpot"
import Carousel_Winners from "@/app/Components/Carousel_Winners"
import Carousel_Winners_Top from "@/app/Components/Carousel_Winners_Top"

const Cnt_Main_Top = () => {

    return(
        <>
        <div className="cnt-main cnt-top">

            <Main_Jackpot />

            <Carousel_Winners_Top />

            <Carousel_Winners />

        </div>
        </>
    );
}


export default Cnt_Main_Top;