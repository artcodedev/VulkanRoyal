



const Nav_Wrapper = () => {

    const menu_main = [
        { href: "", title: "Популярные" },
        { href: "", title: "Новинки" },
        { href: "", title: "Слоты" },
        { href: "", title: "Столы" },
        { href: "", title: "Live" },
        { href: "", title: "Быстрые игры" }
    ]

    return (
        <>
            <div className="nav__wrapper">
                <div className="nav nav--main" data-nav-main>

                    <ul className="nav__list" data-games-filter="">

                        {menu_main.map((i) => <li className="nav__item" data-game-item="">

                            <a href="/ru/" className="nav__link" data-ga-event={`nav__${i.title}`}>
                                <span className="nav__link_text" data-category-name="">{i.title}</span>
                            </a>

                        </li>)}

                    </ul>

                    <div className="nav__favourite" data-favourites-nav-item="">
                        <div className="nav__item">
                            <a href="#popup-reg" className="nav__link nav__link--favourite" data-ga-event-name="favourites">
                                <div className="nav__favourite_icon">
                                    <span className="nav__favourite_counter" data-favourites-counter=""></span>
                                </div>
                                <div className="nav__favourite_title"><span className="nav__link_text">Избранное</span></div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}


export default Nav_Wrapper;