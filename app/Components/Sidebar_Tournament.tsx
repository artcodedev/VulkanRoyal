import Image from 'next/image'

const Sidebar_Tournament = () => {

    return (
        <>
            <div className="sidebar-block sidebar-block--tournament" data-tournament-widget-wrapper="" style={{ maxHeight: "660px" }}>
                <div className="sidebar-spikes">
                    <i className="sidebar-spikes__bottom"></i>
                </div>
                <div className="tournament-widget-nav">
                </div>
                <div className="tournament-widget tournament-widget--active" data-type="tournament-widget" data-tournament="regular" data-widget="tournament-regular" data-currency="₸" data-widget-type="main" data-tournament-id="2328" data-tournament-widget-id="1">
                    <a className="tournament-widget__promo" href="/ru/tournaments/2328">
                        <div className="sidebar-block__section">
                            <p className="sidebar__title">Турнир</p>
                            <h3 className="sidebar__header">Круиз удачи</h3>
                        </div>
                        <div className="sidebar-block__section">
                            <p className="sidebar__title">призовой фонд</p>
                            <span className="sidebar__header-number" data-tournament="prize-fund">
                                611&thinsp;411
                                <span data-symbol-currency="">₸</span>
                            </span>
                        </div>
                        <div className="sidebar-block__section">
                            <p className="sidebar__title">До завершения</p>
                            <div className="timer-string--lg timer__hide-days" data-timer-string="" data-timeto="62631" data-pairs="3" data-timer-init="auto" data-type="dynamic" id="timer_ign6lg" data-timer-inited="1">
                                <span className="timer-string-count" data-digit-type="Hours">17</span><span className="timer-string-countDiv">:</span><span className="timer-string-count" data-digit-type="Minutes">23</span><span className="timer-string-countDiv">:</span><span className="timer-string-count" data-digit-type="Seconds">52</span></div>
                        </div>
                        <div className="sidebar-block__img">
                            <Image src="/uploads/tournament_img/01_456x300_goodlucksruise.jpg" alt="Круиз удачи" width={300} height={100} />
                        </div>
                    </a>
                    <div className="tournament-members">
                        <div data-tournament-widget-stat="">
                            <div className="tournament-members__head">
                                <span className="tournament-members__column-title">Участник</span>
                                <span className="tournament-members__column-title">Результат</span>
                            </div>
                            <div data-tournament="users-scores">
                                <div className="tournament-members__member ">
                                    <span className="tournament-members__member-place">1</span>
                                    <span className="tournament-members__member-name">multik04***</span>
                                    <span className="tournament-members__member-prize">15&thinsp;861&thinsp;067.5</span>
                                </div>
                                <div className="tournament-members__member ">
                                    <span className="tournament-members__member-place">2</span>
                                    <span className="tournament-members__member-name">7753***</span>
                                    <span className="tournament-members__member-prize">9&thinsp;517&thinsp;622.4</span>
                                </div>
                                <div className="tournament-members__member ">
                                    <span className="tournament-members__member-place">3</span>
                                    <span className="tournament-members__member-name">Galymzhan***</span>
                                    <span className="tournament-members__member-prize">1&thinsp;634&thinsp;798.8</span>
                                </div>
                                <div className="tournament-members__member ">
                                    <span className="tournament-members__member-place">4</span>
                                    <span className="tournament-members__member-name">13045***</span>
                                    <span className="tournament-members__member-prize">1&thinsp;140&thinsp;754.6</span>
                                </div>
                                <div className="tournament-members__member ">
                                    <span className="tournament-members__member-place">5</span>
                                    <span className="tournament-members__member-name">zolotarev***</span>
                                    <span className="tournament-members__member-prize">937&thinsp;357.2</span>
                                </div>
                                <div className="tournament-members__member ">
                                    <span className="tournament-members__member-place">6</span>
                                    <span className="tournament-members__member-name">TOHA2***</span>
                                    <span className="tournament-members__member-prize">892&thinsp;382.4</span>
                                </div>
                                <div className="tournament-members__member ">
                                    <span className="tournament-members__member-place">7</span>
                                    <span className="tournament-members__member-name">g_krist***</span>
                                    <span className="tournament-members__member-prize">766&thinsp;623.7</span>
                                </div>
                                <div className="tournament-members__member ">å
                                    <span className="tournament-members__member-place">8</span>
                                    <span className="tournament-members__member-name">RikkDin***</span>
                                    <span className="tournament-members__member-prize">753&thinsp;760.8</span>
                                </div>
                                <div className="tournament-members__member ">
                                    <span className="tournament-members__member-place">9</span>
                                    <span className="tournament-members__member-name">eva***</span>
                                    <span className="tournament-members__member-prize">669&thinsp;799.2</span>
                                </div>
                                <div className="tournament-members__member ">
                                    <span className="tournament-members__member-place">10</span>
                                    <span className="tournament-members__member-name">muratbek7***</span>
                                    <span className="tournament-members__member-prize">634&thinsp;608</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tournament-members__footer">

                        <a className="btn btn-red btn-lg" data-text-to-change="" href="/ru/tournaments/2328" data-ga-event="sidebar__tournament-more">
                            <span>Подробнее</span>
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Sidebar_Tournament;