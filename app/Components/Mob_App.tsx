import Image from 'next/image'

const Mob_App = () => {
    return (
        <>

            <div>

                <div className="cnt-main cnt-main--static--mob-app" data-content-block="">
                    <div className="mob-app">
                        <div className="mob-app__container">

                            <div className="mob-app__image">
                                <Image src="/uploads/custom/999999999999.png" alt="" width={800} height={320} />
                            </div>
                            <div className="mob-app__text-description">
                                <h2 className="mob-app__title">
                                    <span>Мобильное приложение Royal Casino</span>
                                </h2>
                                <p className="mob-app__text">

                                    Добавьте казино Royal Casino на свой мобильный. Скачайте официальное мобильное приложение Royal Casino и получайте самые выгодные бонусы первыми. Приложение — бесплатное, установите и любимый клуб всегда под рукой!
                                </p>
                            </div>



                            <div className="mob-app__buttons">
                                <button className="mob-app__button mob-app__button-green btn btn-green btn-lg mobile-app__btn--app-download" data-mob-app-button="ios" data-download-from="mob_app_page" style={{ justifyContent: "center" }}>
                                    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M15.9848 2C15.9848 2 14.1579 2.00848 12.8438 3.74045C11.6752 5.28061 11.9727 6.59791 11.9727 6.59791C11.9727 6.59791 13.5571 6.87199 14.9511 5.19702C16.2565 3.62838 15.9848 2 15.9848 2ZM13.188 7.42282C12.7579 7.59616 12.4045 7.7386 12.1399 7.7386C11.8099 7.7386 11.4119 7.58527 10.9494 7.40709C10.3078 7.15997 9.54222 6.86504 8.66205 6.86504C6.33195 6.86504 3.84766 8.95142 3.84766 12.9287C3.84766 16.9711 6.78263 22 9.1058 22C9.46718 22 9.91481 21.8378 10.4111 21.6579C11.0284 21.4342 11.721 21.1831 12.4165 21.1831C13.0401 21.1831 13.5809 21.3852 14.1147 21.5846C14.6347 21.7789 15.148 21.9706 15.7246 21.9706C18.2687 21.9706 20.1522 16.6691 20.1522 16.6691C20.1522 16.6691 17.4578 15.626 17.4578 12.5989C17.4578 9.9155 19.6208 8.80965 19.6208 8.80965C19.6208 8.80965 18.5149 6.80932 15.7037 6.80932C14.71 6.80932 13.8563 7.1534 13.188 7.42282Z" fill="white"></path>
                                    </svg>
                                    <span>Скачать из App Store</span>
                                </button>
                                <button className="mob-app__button btn-blue btn btn-lg mobile-app__btn--app-download" data-mob-app-button="android" data-download-from="mob_app_page" style={{ justifyContent: "center" }}>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M15.6098 6.6579L11.6102 12L15.594 17.3199L19.1591 15.2417C20.2944 14.5798 21 13.327 21 11.9718C21 10.6104 20.2884 9.3539 19.1435 8.69318L15.6098 6.6579ZM14.7253 17.8263L10.9998 12.8717L4.72901 21.4287C4.75761 21.4472 4.78651 21.4653 4.81572 21.4831C5.9294 22.16 7.26628 22.1725 8.39196 21.518L14.7253 17.8263ZM3.96778 20.7735C3.3725 20.0982 3.03496 19.2129 3.0324 18.2581L3 5.7555C3 4.78578 3.34489 3.8876 3.95398 3.20686L10.3895 12L3.96778 20.7735ZM4.71934 2.55753L10.9998 11.1282L14.738 6.15581L8.34396 2.4731C7.21708 1.82486 5.88139 1.84359 4.77252 2.52431C4.75468 2.53525 4.73695 2.54632 4.71934 2.55753Z" fill="white"></path>
                                    </svg>
                                    <span>Скачать для Android</span>
                                </button>
                            </div>
                            <div className="mob-app__lure">
                                <div className="mob-app__lure-block">
                                    <div className="mob-app__lure-image">
                                        <Image src="/uploads/custom/podarok.png" alt="present" width={112} height={112} />
                                    </div>
                                    <div className="mob-app__lure-description">
                                        <h4 className="mob-app__title-app">Уникальные бонусы</h4>
                                        <p className="mob-app__text">
                                            Только в нашем мобильном приложении у вас доступна «Заначка». Это уникальный бездепозитный бонус за ставки с реального баланса. Подробнее читайте <a href="/bonuses/list">в разделе «Акции».</a>
                                        </p>
                                    </div>
                                </div>
                                <div className="mob-app__lure-block">
                                    <div className="mob-app__lure-image">
                                        <Image src="/uploads/custom/zamok.png" alt="lock" width={112} height={122} />
                                    </div>
                                    <div className="mob-app__lure-description">
                                        <h4 className="mob-app__title-app">100% доступ в клуб </h4>
                                        <p className="mob-app__text">
                                            С мобильным приложением клуба Royal Casino блокировки вам не страшны. Доступ в любимый клуб — всегда в вашем смартфоне. Здесь вы всегда попадёте на актуальное зеркало.
                                        </p>
                                    </div>
                                </div>
                                <div className="mob-app__lure-block">
                                    <div className="mob-app__lure-image">
                                        <Image src="/uploads/custom/telefon.png" alt="phone" width={122} height={122} />
                                    </div>
                                    <div className="mob-app__lure-description">
                                        <h4 className="mob-app__title-app">Вулкан Рояль в кармане</h4>
                                        <p className="mob-app__text">
                                            Есть свободная минутка? Заходите в клуб и наслаждайтесь азартной игрой прямо с мобильного. Не важно где вы, главное — любимые слоты всегда под рукой. Приложение доступно на iOS и Android.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="mob-app__priority">
                                <h2 className="mob-app__title">
                                    <span>Всё за что вы любите клуб Royal Casino:</span>
                                </h2>
                                <div className="mob-app__priority-content">
                                    <div className="mob-app__priority-block">
                                        <div className="mob-app__priority-image">
                                            <Image src="/uploads/custom/avtomat_29.png" alt="games" width={63} height={80} />
                                        </div>
                                        <h4 className="mob-app__title-app">Любимые <br /> слоты</h4>
                                    </div>
                                    <div className="mob-app__priority-block">
                                        <div className="mob-app__priority-image">
                                            <Image src="/uploads/custom/kubok_29.png" alt="trophi_icon" width={63} height={80} />
                                        </div>
                                        <h4 className="mob-app__title-app">Крутые <br /> турниры</h4>
                                    </div>
                                    <div className="mob-app__priority-block">
                                        <div className="mob-app__priority-image">
                                            <Image src="/uploads/custom/kalendar_29.png" alt="kalendar" width={63} height={80} />
                                        </div>
                                        <h4 className="mob-app__title-app">Ежедневные <br /> задания</h4>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}


export default Mob_App;