
'use client'

import React, { useEffect } from 'react';
import Image from 'next/image'

const Hall_of_fame = () => {

    const [active, setActive] = React.useState<String>('');
    const [size, setSize] = React.useState<number>(window.innerWidth < 1260 ? 136 : 184);
    const [avtiveCal, setActiveCal] = React.useState<boolean>(false);
    const [marLeft, setMarLeft] = React.useState<number>(2);
    const [preloader, setPreloader] = React.useState<boolean>(true);
    const [activeNav, setActiveNav] = React.useState<string>("most-max-win")

    const items = [

        { data_hof_nav_id: "most-max-win", title: "Топ-выигрыши" },
        { data_hof_nav_id: "most-actives", title: "Активисты" },
        { data_hof_nav_id: "most-actives-new", title: "Новички" },
        { data_hof_nav_id: "most-win-sum", title: "Фартовые" }

    ]

    const month = [
        { title: "Январь", data: '{";year";: 2024, ";month";: 11 }' },
        { title: "Январь", data: '{";year";: 2024, ";month";: 11 }' },
        { title: "Январь", data: '{";year";: 2024, ";month";: 11 }' },
        { title: "Январь", data: '{";year";: 2024, ";month";: 11 }' },
        { title: "Январь", data: '{";year";: 2024, ";month";: 11 }' },
        { title: "Январь", data: '{";year";: 2024, ";month";: 11 }' }
    ]

    useEffect(() => {
        window.addEventListener('resize', () => {

            setSize(window.innerWidth < 1260 ? 136 : 184);

        });

        document.body.addEventListener("click", () => setActiveCal(false));
    }, []);

    const item_nuv = (e: React.MouseEvent<HTMLElement>) => {

    }

    const swiperData = (e: React.MouseEvent<HTMLElement>) => {

        switch (e.currentTarget.getAttribute("data-hof-nav-id")) {
            case "most-max-win":
                setMarLeft(0);
                setActiveNav("most-max-win");
                break;

            case "most-actives":
                console.log("most-actives");
                setMarLeft(1)
                setActiveNav("most-actives");
                break;
            case "most-actives-new":
                setMarLeft(2)
                setActiveNav("most-actives-new");
                break;

            case "most-win-sum":
                console.log("most-actives");
                setMarLeft(3)
                setActiveNav("most-win-sum");
                break;
        }
    }

    const open_calendar = () => { setActiveCal(avtiveCal == true ? false : true) }


    return (
        <>
            <div className="hof__page" data-hof-page="wrapper">

                <div className="hof__page_title" onClick={open_calendar}>
                    <span>Зал славы за </span>
                    <div className='hof__month'>
                        <div className="hof__month-title" data-hof-page="calendarBtn" data-hof-calendar-button="">
                            <span className="hof__month_selected" data-hof-page="currentMonth">декабрь</span>
                            <span data-hof-page="currentYear"> 2023 </span>
                            <i className="hof__month_ico"></i>
                        </div>

                        <div className={`hof__month_container ${avtiveCal ? "open" : ""}`} data-hof-page="monthsList">
                            {month.map((e, i) => <div className={`hof__month_item ${i == 0 ? "active" : ''}`} data-hof-date-id={`${e.data}`}>{e.title}</div>)}
                        </div>
                    </div>
                </div>

                <div className="hof__nav">
                    <div className="hof__nav_swiper" data-hof-page="swiper" style={{ width: `${size}px`, left: `${(marLeft * (size + 4)) + 2}px` }}></div>
                    <div className="hof__nav_list" data-hof-page="nav" style={{ pointerEvents: "all" }}>

                        {items.map((e) => <div className={`hof__nav_item tooltipstered ${activeNav == e.data_hof_nav_id ? "active" : ""}`} data-hof-nav-id={`${e.data_hof_nav_id}`} data-tooltip-hall-of-fame="" onClick={swiperData}>{e.title}</div>)}

                    </div>

                </div>


                <div id="hof-tabs" className="hof__tabs" data-hof-page="tabs">
                    <div className="hof__tabs_content" data-hof-page="desc">Фартовые – список пользователей, выигравших в игровых автоматах наибольшую сумму в течение месяца (вне зависимости от размера ставки). Удачливость игрока измеряется в очках.</div>

                    <div className='hof__table_wrapper'>
                        <table className="hof__table" data-hof-page="table">
                            <thead data-hof-page="tableHeader"><tr><th className="hof__table_column-position">#</th><th className="hof__table_column-name">Имя игрока</th><th className="hof__table_column-status">Статус</th><th className="hof__table_column-achievement">Достижения</th><th className="hof__table_column-result">Результат</th></tr></thead>
                            <tbody data-hof-page="tableBody">
                                <tr>
                                    <td><div className="hof__table_rate-number"><span>1</span></div></td>
                                    <td>
                                        <span className="hof__table_user-name">12305***</span>

                                    </td>
                                    <td>
                                        <a className="hof__table_status-icon ico" href="/ru/privileges" title="Профессионал">
                                            <div className="level level_7"></div>
                                        </a></td>
                                    <td>
                                        <a className="hof__table_result" href="undefined">
                                            <span className="icon icon--cup"></span>22
                                            <div className="hof__tooltip-awards"><div className="hof__tooltip-awards_item active">
                                                <span className="hof__tooltip-awards_number">3</span>
                                                <div className="hof__tooltip-awards_img">
                                                    <Image src="/assets/CV/Web/img/sys/achievements/Marathoner_gold.png" alt="Марафонец" width={100} height={100} />
                                                </div>
                                            </div>
                                                <div className="hof__tooltip-awards_item active">
                                                    <span className="hof__tooltip-awards_number">1</span>
                                                    <div className="hof__tooltip-awards_img">
                                                        <Image src="/assets/CV/Web/img/sys/achievements/Lottery.png" alt="Счастливый билет" width={100} height={100} />
                                                    </div>
                                                </div><div className="hof__tooltip-awards_item active">
                                                    <span className="hof__tooltip-awards_number">3</span>
                                                    <div className="hof__tooltip-awards_img">
                                                        <Image src="/assets/CV/Web/img/sys/achievements/MoreWin_gold.png" alt="Знаток" width={100} height={100} />
                                                    </div>
                                                </div><div className="hof__tooltip-awards_item active">
                                                    <span className="hof__tooltip-awards_number">3</span>
                                                    <div className="hof__tooltip-awards_img">
                                                        <Image src="/assets/CV/Web/img/sys/achievements/BigWin_gold.png" alt="Игра по-крупному" width={100} height={100} />
                                                    </div>
                                                </div><div className="hof__tooltip-awards_item active">
                                                    <span className="hof__tooltip-awards_number">1</span>
                                                    <div className="hof__tooltip-awards_img">
                                                        <Image src="/assets/CV/Web/img/sys/achievements/FirstDep.png" alt="В деле" width={100} height={100} />
                                                    </div>
                                                </div><div className="hof__tooltip-awards_item active">
                                                    <span className="hof__tooltip-awards_number">3</span>
                                                    <div className="hof__tooltip-awards_img">
                                                        <Image src="/assets/CV/Web/img/sys/achievements/Champ_gold.png" alt="Чемпион" width={100} height={100} />
                                                    </div>
                                                </div><div className="hof__tooltip-awards_item active">
                                                    <span className="hof__tooltip-awards_number">1</span>
                                                    <div className="hof__tooltip-awards_img">
                                                        <Image src="/assets/CV/Web/img/sys/achievements/Fame.png" alt="В лучах славы" width={100} height={100} />
                                                    </div>
                                                </div><div className="hof__tooltip-awards_item active">
                                                    <span className="hof__tooltip-awards_number">3</span>
                                                    <div className="hof__tooltip-awards_img">
                                                        <Image src="/assets/CV/Web/img/sys/achievements/Crown_gold.png" alt="Особый статус" width={100} height={100} />
                                                    </div>
                                                </div><div className="hof__tooltip-awards_item active">
                                                    <span className="hof__tooltip-awards_number">1</span>
                                                    <div className="hof__tooltip-awards_img">
                                                        <Image src="/assets/CV/Web/img/sys/achievements/BigMoney.png" alt="Большой куш" width={100} height={100} />
                                                    </div>
                                                </div><div className="hof__tooltip-awards_item active">
                                                    <span className="hof__tooltip-awards_number">3</span>
                                                    <div className="hof__tooltip-awards_img">
                                                        <Image src="/assets/CV/Web/img/sys/achievements/Calendar_gold.png" alt="Завсегдатай" width={100} height={100} />
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                    </td>

                                    <td>
                                        <span className="hof__table_win">
                                            220&thinsp;115&thinsp;992
                                        </span>
                                    </td>
                                </tr>


                                <tr>
                                    <td><div className="hof__table_rate-number"><span>1</span></div></td>
                                    <td>
                                        <span className="hof__table_user-name">12305***</span>

                                    </td>
                                    <td>
                                        <a className="hof__table_status-icon ico" href="/ru/privileges" title="Профессионал">
                                            <div className="level level_7"></div>
                                        </a></td>
                                    <td>
                                        <a className="hof__table_result" href="undefined">
                                            <span className="icon icon--cup"></span>22
                                            <div className="hof__tooltip-awards"><div className="hof__tooltip-awards_item active">
                                                <span className="hof__tooltip-awards_number">3</span>
                                                <div className="hof__tooltip-awards_img">
                                                    <Image src="/assets/CV/Web/img/sys/achievements/Marathoner_gold.png" alt="Марафонец" width={100} height={100} />
                                                </div>
                                            </div>
                                                <div className="hof__tooltip-awards_item active">
                                                    <span className="hof__tooltip-awards_number">1</span>
                                                    <div className="hof__tooltip-awards_img">
                                                        <Image src="/assets/CV/Web/img/sys/achievements/Lottery.png" alt="Счастливый билет" width={100} height={100} />
                                                    </div>
                                                </div><div className="hof__tooltip-awards_item active">
                                                    <span className="hof__tooltip-awards_number">3</span>
                                                    <div className="hof__tooltip-awards_img">
                                                        <Image src="/assets/CV/Web/img/sys/achievements/MoreWin_gold.png" alt="Знаток" width={100} height={100} />
                                                    </div>
                                                </div><div className="hof__tooltip-awards_item active">
                                                    <span className="hof__tooltip-awards_number">3</span>
                                                    <div className="hof__tooltip-awards_img">
                                                        <Image src="/assets/CV/Web/img/sys/achievements/BigWin_gold.png" alt="Игра по-крупному" width={100} height={100} />
                                                    </div>
                                                </div><div className="hof__tooltip-awards_item active">
                                                    <span className="hof__tooltip-awards_number">1</span>
                                                    <div className="hof__tooltip-awards_img">
                                                        <Image src="/assets/CV/Web/img/sys/achievements/FirstDep.png" alt="В деле" width={100} height={100} />
                                                    </div>
                                                </div><div className="hof__tooltip-awards_item active">
                                                    <span className="hof__tooltip-awards_number">3</span>
                                                    <div className="hof__tooltip-awards_img">
                                                        <Image src="/assets/CV/Web/img/sys/achievements/Champ_gold.png" alt="Чемпион" width={100} height={100} />
                                                    </div>
                                                </div><div className="hof__tooltip-awards_item active">
                                                    <span className="hof__tooltip-awards_number">1</span>
                                                    <div className="hof__tooltip-awards_img">
                                                        <Image src="/assets/CV/Web/img/sys/achievements/Fame.png" alt="В лучах славы" width={100} height={100} />
                                                    </div>
                                                </div><div className="hof__tooltip-awards_item active">
                                                    <span className="hof__tooltip-awards_number">3</span>
                                                    <div className="hof__tooltip-awards_img">
                                                        <Image src="/assets/CV/Web/img/sys/achievements/Crown_gold.png" alt="Особый статус" width={100} height={100} />
                                                    </div>
                                                </div><div className="hof__tooltip-awards_item active">
                                                    <span className="hof__tooltip-awards_number">1</span>
                                                    <div className="hof__tooltip-awards_img">
                                                        <Image src="/assets/CV/Web/img/sys/achievements/BigMoney.png" alt="Большой куш" width={100} height={100} />
                                                    </div>
                                                </div><div className="hof__tooltip-awards_item active">
                                                    <span className="hof__tooltip-awards_number">3</span>
                                                    <div className="hof__tooltip-awards_img">
                                                        <Image src="/assets/CV/Web/img/sys/achievements/Calendar_gold.png" alt="Завсегдатай" width={100} height={100} />
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                    </td>

                                    <td>
                                        <span className="hof__table_win">
                                            220&thinsp;115&thinsp;992
                                        </span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>


                    <div className={`hof__preload ${preloader ? "show" : ""}`} data-hof-page="preload">

                        <div className="preloader ">
                            <Image src="/uploads/brands/royal-casino-loader-static-01-1.svg" alt="" style={{width: "48px", height: "48px;"}} className="" width={48} height={48} />
                        </div>
                    </div>


                </div>
            </div>

        </>
    );
}


export default Hall_of_fame;