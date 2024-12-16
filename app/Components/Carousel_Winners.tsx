
import Image from 'next/image'

const Carousel_Winners = () => {

    const winners = []

    return (
        <>
            <div id="carousel-winners" className="carousel carousel-winners carousel-winners--now" data-ride="carousel">
                <div className="carousel-winners__title">Сейчас выигрывают</div>
                <div className="carousel-inner" role="listbox">
                    <div className="item active">
                        <a className="carousel-winners__img" rel="nofollow" href="/ru/games/scroll_of_dead" data-game-url="/ru/games/scroll_of_dead" data-check-user-rights="game">
                            <Image src="/uploads/games/scroll_of_dead_web_s_400x254_cv.jpg" alt="Scroll of Dead" width="203" height="54" />
                        </a>

                        <div className="carousel-winners__data">
                            <div className="carousel-winners__win">
                                384&thinsp;<span><strong data-symbol-currency="">₸</strong></span>
                            </div>
                            <div className="carousel-winners__user">
                                <span className="user-name">87054994***</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Carousel_Winners;