


const Header_top = () => {


    return (

        <>
        <div className="header-top">
            <div className="wrapper">
                <div className="header-top__left">
                    <a href="/">
                        <div className="scroll-logo unique-logo" style={{backgroundImage: "url(http://localhost:3000/uploads/brands/scroll-logo-3.svg)"}}></div>
                    </a>
                </div>
                <div className="header-top__right" data-test="user_bar">

                    <div className="header-top__right__item">
                        <div className="header-top__btn-reg">
                            <a href="#popup-reg" className="btn btn-red btn-md" data-type="top" data-test="registration_button">
                                <span>Регистрация за 10 секунд</span>
                                <span>Регистрация</span>
                            </a>
                        </div>
                    </div>

                    <div className="header-top__right__item">
                        <div className="header-top__btn-enter">
                            <a href="" className="btn-redesign btn btn-blue btn-md" data-test="login_button">
                                <span>Вход</span>
                            </a>
                        </div>
                    </div>


                    <div className="header-top__right__item socials_login" data-test="social_networks_block">
                        <span className="header-top__logto">или</span>

                        <ul className="social" id="login-ulogin-popap-time1726905091">
                            <li className="social-item">
                                <a href="javascript:void(0);" className="vkontakte" x-login-button="vkontakte" data-redirect-url="/"></a>
                            </li>
                            <li className="social-item">
                                <a href="javascript:void(0);" className="google" x-login-button="google" data-redirect-url="/"></a>
                            </li>
                            <li className="social-item">
                                <a href="javascript:void(0);" className="odnoklassniki" x-login-button="odnoklassniki" data-redirect-url="/"></a>
                            </li>
                            <li className="social-item">
                                <a href="javascript:void(0);" className="facebook" x-login-button="facebook" data-redirect-url="/"></a>
                            </li>
                            <li className="social-item">
                                <a href="javascript:void(0);" className="yandex" x-login-button="yandex" data-redirect-url="/"></a>
                            </li>
                            <li className="social-item">
                                <a href="javascript:void(0);" className="mailru" x-login-button="mailru" data-redirect-url="/"></a>
                            </li>
                            <li className="social-item">
                                <a href="javascript:void(0);" className="telegram" x-login-button="telegram" data-redirect-url="/"></a>
                            </li>
                            <li className="social-item">
                                <a href="javascript:void(0);" className="tiktok" x-login-button="tiktok " data-redirect-url="/"></a>
                            </li>

                        </ul>
                    </div>

                </div>
            </div>
        </div>
        <div className="header-logo" style={{cursor: "pointer"}}>
            <img src="/uploads/brands/logotype-royal-casino-web.svg" className="mirror-logo"></img>
        </div>
        </>
    )
}


export default Header_top;