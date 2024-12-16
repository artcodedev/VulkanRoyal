
'use client'
import React, { useEffect, useState } from 'react';
import { cookies } from "next/headers";
import Image from 'next/image'

import MainSlider from "@/app/Components/MainSlider";


const Header = ({ h_banner }: { h_banner: boolean }) => {

    const [OpenMenu, setOpenMenu] = React.useState<boolean>(true);
    const [MainSliderStat, setMainSliderStat] = React.useState<boolean>(h_banner);

    const menu_lang = [
        { data_lang_code: "ru", title: "Русский", img: "ru" },
        { data_lang_code: "kz", title: "Қазақша", img: "kz" },
        { data_lang_code: "ro", title: "Română", img: "ro" },
        { data_lang_code: "az", title: "Azərbaycanca", img: "az" },
    ]

    const menu = [
        { title: "Сундуки", href: "#" },
        { title: "Сундуки", href: "#" },
        { title: "Сундуки", href: "#" },
    ]

    const open_menu = () => setOpenMenu(OpenMenu ? false : true);



    return (
        <>
            <header className="header">
                <div className="header-middle">
                    <div className="wrapper">


                    <nav className="nav nav__header redesign">
                        <ul className="nav-list nav-list__with-lang" data-test="navigation_menu">

                            <li>
                                <a href="#lootbox" data-ga-event="menu-top__lootbox" data-onboarding-lootboxes-1="">
                                    <img src="/assets/CV/Web/svg/lootboxes-page/menu-item.svg" alt="" />
                                    Сундуки
                                </a>
                            </li>

                            {
                                menu.map((i) =>
                                <li>
                                    <a href={i.href} data-ga-event="menu-top__lootbox" data-onboarding-lootboxes-1="">
                                        {i.title}
                                    </a>
                            </li> )
                            }

                        </ul>

                        <div className="nav__header_switch-locale">

                            <div className="lang-switch" data-lang-switcher-wrap onClick={open_menu }>

                                <div className="lang-switch__current" data-lang-current>

                                    <span className="lang-switch__flag flag-locale" style={{backgroundImage: "url(/assets/svg/flags/ru.svg)"}}></span>

                                </div>

                                <ul className="lang-switch__list">

                                    {menu_lang.map((i) => 
                                    
                                        <li className="lang-switch__list_item current" data-lang-code={i.data_lang_code}>
                                            <span className="lang-switch__list_flag flag-locale" data-country-code="ru" style={{backgroundImage: `url(/assets/svg/flags/${i.img}.svg)`}}></span>
                                            <span className="lang-switch__list_name">{i.title}</span>
                                        </li>
                                    )}

                                </ul>
                            </div>
                        </div>
                    </nav>

                    {MainSliderStat ? <MainSlider /> : ''}
                    {/* // <MainSlider /> */}

                    </div>
                </div>
            </header>
        </>
    )
}

export default Header;