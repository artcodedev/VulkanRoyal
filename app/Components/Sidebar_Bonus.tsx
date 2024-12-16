


const Sidebar_Bonus = () => {

    return (
        <>
            <div data-sidebar-widget-parent="" data-test="sales_bonus_widget">

                <div className="sidebar-block sidebar-block--bonus is-loaded" data-bonus-widget-wrap="active-sales" data-sidebar-widget="wrapper"><div data-bonus-widget="" data-bonus-id="585">
                    <div className="sidebar-spikes">
                        <i className="sidebar-spikes__top"></i>
                    </div>
                    <div className="sidebar-spikes">
                        <i className="sidebar-spikes__bottom"></i>
                    </div>
                    <div className="sidebar-block__section">
                        <p className="sidebar__header">бонус <span data-bonus-percent="">15%</span></p>
                    </div>

                    <div className="sidebar-block__section">
                        <p className="sidebar__title">Депозит от</p>
                        <span className="sidebar__header-number">5&thinsp;000 ₸</span>
                    </div>

                    <div className="sidebar-block__section">
                        <p className="sidebar__title">Предложение действует</p>

                        <div className="timer-string--lg timer__stoped timer__hide-days" data-bonus-timer="" data-timer-string="" data-style="text" data-timeto="7200" data-pairs="3" data-type="dynamic" id="timer_ztmsp" data-timer-inited="1"><span className="timer-string-count" data-digit-type="Hours">02</span><span className="timer-string-countDiv">:</span><span className="timer-string-count" data-digit-type="Minutes">00</span><span className="timer-string-countDiv">:</span><span className="timer-string-count" data-digit-type="Seconds">00</span></div>
                    </div>


                    <div className="sidebar-btns " data-bonus-toggle-state="">
                        <div data-bonus-toggle-state-unactivated=""><a className="btn btn-blue btn-lg" href="#popup-reg"><span>Активировать</span></a></div>
                        <div data-bonus-toggle-state-activated=""><button className="btn btn-blue btn-lg btn-disabled"><span>Активирован</span></button></div>
                    </div>

                    <div className="sidebar-links"><a href="/ru/bonuses/list">Подробнее</a></div>
                </div></div>
                <div className="loader-wrap" data-sidebar-widget="preloader">





                    <div className="preloader ">
                        {/* <Image src="/uploads/brands/royal-casino-loader-static-01-1.svg"  width={48} height={48}  /> */}
                    </div>


                </div>
            </div>
            {/* <div data-sidebar-widget-parent data-test="sales_bonus_widget">
            <div classNameName="sidebar-block sidebar-block--bonus is-loaded" data-bonus-widget-wrap="active-sales" data-sidebar-widget="wrapper">
                <div data-bonus-widget data-bonus-id="585">
                    <div classNameName="sidebar-spikes">
                        <i classNameName="sidebar-spikes__top"></i>
                    </div>
                    <div classNameName="sidebar-spikes">
                        <i classNameName="sidebar-spikes__bottom"></i>
                    </div>

                    <div classNameName="sidebar-block__section">
                        <p classNameName="sidebar__header">
                        бонус
                        <span data-bonus-percent="">15%</span>
                        </p>
                    </div>

                    <div classNameName="sidebar-block__section">
                        <p classNameName="sidebar__title">Депозит от</p>
                        <span classNameName="sidebar__header-number">5 000 ₸</span>
                    </div>

                    <div classNameName="sidebar-block__section">
                        <p classNameName="sidebar__title">Предложение действует</p>

                        <div classNameName="timer-string--lg timer__stoped timer__hide-days" data-bonus-timer="" data-timer-string="" data-style="text" data-timeto="7200" data-pairs="3" data-type="dynamic" id="timer_33486" data-timer-inited="1">
                            <span classNameName="timer-string-count" data-digit-type="Hours">02</span>
                            <span classNameName="timer-string-countDiv">:</span>
                            <span classNameName="timer-string-count" data-digit-type="Minutes">00</span>
                            <span classNameName="timer-string-countDiv">:</span>
                            <span classNameName="timer-string-count" data-digit-type="Seconds">00</span>
                        </div>
                    </div>

                    <div classNameName="sidebar-btns " data-bonus-toggle-state="">
                        <div data-bonus-toggle-state-unactivated="">
                            <a classNameName="btn btn-blue btn-lg" href="#popup-reg">
                                <span>Активировать</span>
                            </a>
                        </div>
                        <div data-bonus-toggle-state-activated="">
                            <button classNameName="btn btn-blue btn-lg btn-disabled">
                                <span>Активирован</span>
                            </button>
                        </div>
                    </div>
                    <div classNameName="sidebar-links"><a href="/ru/bonuses/list">Подробнее</a></div>
                </div>
            </div>
        </div> */}
        </>
    );
}


export default Sidebar_Bonus;