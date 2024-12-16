
import Image from 'next/image'


const Sidebar_Top_Prizes = () => {
    return (
        <>

            <div className="sidebar-block sidebar-block--top-prizes">
                <div className="sidebar-spikes">
                    <i className="sidebar-spikes__top"></i>
                </div>
                <div className="sidebar-spikes">
                    <i className="sidebar-spikes__bottom"></i>
                </div>
                <h3 className="sidebar__header">
                    Топ 5 выигрышей
                </h3>

                <div className="top-prizes">
                    <div className="top-prizes__item">
                        <div className="top-prizes__place">1</div>
                        <div className="top-prizes__info">
                            <span className="top-prizes__name">aleks1***</span>
                            <span className="top-prizes__talisman">
                                <a className="ico-talisman-sm" title="Кроличья лапка" data-href="https://royal-casino.live/ru/store/products#talismans" href="#popup-reg">
                                    <Image src="/uploads/artifacts/ico/tal_rc_rbt_40_40.png" height={19} width={19} alt="Кроличья лапка" />
                                </a>
                            </span>
                            <span className="top-prizes__result">7&thinsp;601&thinsp;500
                                <strong data-symbol-currency="">₸</strong>
                            </span>
                        </div>


                        <div className="top-prizes__game">
                            <Image src="/uploads/games/bonanzabillion_web-1689772868.jpg" alt="Bonanza Billion" fill={true} />
                            <a rel="nofollow" href="#popup-reg"></a>
                        </div>
                    </div>
                    <div className="top-prizes__item">
                        <div className="top-prizes__place">2</div>
                        <div className="top-prizes__info">
                            <span className="top-prizes__name">mila2020o***</span>
                            <span className="top-prizes__result">6&thinsp;000&thinsp;000
                                <strong data-symbol-currency="">₸</strong>
                            </span>
                        </div>


                        <div className="top-prizes__game">
                            <Image src="/uploads/games/alwayshot-400-254.jpg" alt="Always Hot" fill={true} />
                            <a rel="nofollow" href="#popup-reg"></a>
                        </div>
                    </div>
                    <div className="top-prizes__item">
                        <div className="top-prizes__place">3</div>
                        <div className="top-prizes__info">
                            <span className="top-prizes__name">646***</span>
                            <span className="top-prizes__result">2&thinsp;500&thinsp;000
                                <strong data-symbol-currency="">₸</strong>
                            </span>
                        </div>


                        <div className="top-prizes__game">
                            <Image src="/uploads/games/slotopool_176x112-1601645415.jpg" alt="Slot-o-Pol" fill={true} />
                            <a rel="nofollow" href="#popup-reg"></a>
                        </div>
                    </div>
                    <div className="top-prizes__item">
                        <div className="top-prizes__place">4</div>
                        <div className="top-prizes__info">
                            <span className="top-prizes__name">nazka-1***</span>
                            <span className="top-prizes__result">2&thinsp;100&thinsp;000
                                <strong data-symbol-currency="">₸</strong>
                            </span>
                        </div>


                        <div className="top-prizes__game">
                            <Image src="/uploads/games/bigatlantisfrenzy_web-1689772874.jpg" alt="Big Atlantis Frenzy" fill={true} />
                            <a rel="nofollow" href="#popup-reg"></a>
                        </div>
                    </div>
                    <div className="top-prizes__item">
                        <div className="top-prizes__place">5</div>
                        <div className="top-prizes__info">
                            <span className="top-prizes__name">valera.py***</span>
                            <span className="top-prizes__result">2&thinsp;000&thinsp;000
                                <strong data-symbol-currency="">₸</strong>
                            </span>
                        </div>


                        <div className="top-prizes__game">
                            <Image src="/uploads/games/explodiac-400-254-min.jpg" alt="Explodiac" fill={true} />
                            <a rel="nofollow" href="#popup-reg"></a>
                        </div>
                    </div>
                </div>

                <div className="sidebar-btns">
                    <a href="/ru/hall-of-fame" className="btn btn-blue btn-lg" data-ga-event="sidebar__hall-of-fame">
                        <span>Посмотреть все</span>
                    </a>
                </div>
            </div>


        </>
    );
}


export default Sidebar_Top_Prizes;