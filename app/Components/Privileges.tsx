


const Privileges = () => {

    return (
        <>
            <div className="privilegies--redesign">

                <div className="privilegies-title">
                    <h1>Программа лояльности</h1>
                </div>

                <div className="privilegies-description">
                    <p>Мы предлагаем вам честную программу лояльности, в которой собрали только ценные привилегии и призы. Никаких скрытых условий, сложных расчетов и размытых формулировок. Условия программы просты и понятны. За каждые 1 200 ₸ ставок вы получаете 1 балл. Чем больше баллов, тем выше ваш уровень.</p>
                </div>

                <div className="cnt-table">

                    <div className="privilegies">
                        <div className="privilegies-title">
                            <h1>Лестница статусов</h1>
                        </div>

                        <div className="privilegies__content">
                            <div className="privilegies__title">
                                <div className="privilegies__title privilegies__title-exp">Опыт</div>
                                <div className="privilegies__title privilegies__title-priv">Привилегии</div>
                                <div className="privilegies__title privilegies__title-bonus">Бонус</div>
                                <div className="privilegies__title privilegies__title-curren">Курс обмена</div>
                            </div>
                            <div className="privilegies__level" data-privileges-page="level-wrap">
                                <div className="privilegies__status">
                                    <div className="ico">
                                        <div className="level level-lg level_1"></div>
                                    </div>
                                    <div className=" privilegies__exp">Без опыта</div>
                                    <div className=" privilegies__progress hide" data-privileges-page="level-progress">
                                        <div className=" privilegies__progress_inprogress"></div>
                                    </div>
                                </div>

                                <div className="privilegies__container">
                                    <div className="privilegies__header">
                                        <div className="privilegies__header privilegies__header-priv">Новичок</div>
                                        <div className="privilegies__header privilegies__header-bonus"></div>
                                        <div className="privilegies__header privilegies__header-curren">2:1</div>
                                    </div>
                                    <ul className="privilegies__textblock">
                                        <li className="privilegies__item">
                                            <p>
                                                Бонус 15% на каждый депозит
                                                <span className="privilegies__item_info tooltipstered" data-privileges-tooltipster=""></span>
                                            </p>

                                        </li>
                                        <li className="privilegies__item ">
                                            <p>Поддержка 24/7</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="privilegies__level" data-privileges-page="level-wrap">
                                <div className=" privilegies__status">
                                    <div className="ico">
                                        <div className="level level-lg level_2"></div>
                                    </div>
                                    <div className="privilegies__exp"><span>100</span> опыта</div>
                                    <div className="privilegies__progress hide" data-privileges-page="level-progress">
                                        <div className="privilegies__progress_inprogress"></div>
                                    </div>
                                </div>

                                <div className="privilegies__container">
                                    <div className="privilegies__header">
                                        <div className="privilegies__header privilegies__header-priv">Любитель</div>
                                        <div className="privilegies__header privilegies__header-bonus"></div>
                                        <div className="privilegies__header privilegies__header-curren">1,5:1</div>
                                    </div>
                                    <ul className="privilegies__textblock">
                                        <li className="privilegies__item">
                                            <p>
                                                Удвоение баллов на 1 час
                                                <span className="privilegies__item_info tooltipstered" data-privileges-tooltipster=""></span>
                                            </p>
                                        </li>
                                        <li className="privilegies__item">

                                            <p>
                                                Бонус 15% на каждый депозит
                                                <span className="privilegies__item_info tooltipstered" data-privileges-tooltipster=""></span>
                                            </p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="privilegies__level" data-privileges-page="level-wrap">
                                <div className=" privilegies__status">
                                    <div className="ico">
                                        <div className="level level-lg level_3"></div>
                                    </div>
                                    <div className="privilegies__exp"><span>500</span> опыта</div>
                                    <div className="privilegies__progress hide" data-privileges-page="level-progress">
                                        <div className="privilegies__progress_inprogress"></div>
                                    </div>
                                </div>

                                <div className="privilegies__container">
                                    <div className="privilegies__header">
                                        <div className="privilegies__header privilegies__header-priv">Знаток</div>
                                        <div className="privilegies__header privilegies__header-bonus">3 000 ₸</div>
                                        <div className="privilegies__header privilegies__header-curren">1,25:1</div>
                                    </div>
                                    <ul className="privilegies__textblock">
                                        <li className="privilegies__item"><p>Деньги в подарок</p></li>
                                        <li className="privilegies__item">
                                            <p>
                                                Удвоение баллов на 1 чаc<span className="privilegies__item_info" data-privileges-tooltipster title="В период действия удвоения (x2) баллов все получаемые игроком баллы умножаются в 2 раза"></span>
                                            </p>
                                        </li>
                                        <li className="privilegies__item"><p>
                                            Кэшбэк 3% еженедельный<span className="privilegies__item_info tooltipstered" data-privileges-tooltipster=""></span>
                                        </p>
                                        </li>
                                        <li className="privilegies__item"><p>
                                            10 фриспинов в Book of Ra<span className="privilegies__item_info tooltipstered" data-privileges-tooltipster=""></span>
                                        </p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="privilegies__level" data-privileges-page="level-wrap">
                                <div className="privilegies__status">
                                    <div className="ico">
                                        <div className="level level-lg level_4"></div>
                                    </div>
                                    <div className="privilegies__exp"><span>2500</span> баллов</div>
                                    <div className="privilegies__progress hide" data-privileges-page="level-progress">
                                        <div className="privilegies__progress_inprogress"></div>
                                    </div>
                                </div>

                                <div className="privilegies__container">
                                    <div className="privilegies__header">
                                        <div className="privilegies__header privilegies__header-priv">Специалист</div>
                                        <div className="privilegies__header privilegies__header-bonus">7 500 ₸</div>
                                        <div className="privilegies__header privilegies__header-curren">1:1</div>
                                    </div>
                                    <ul className="privilegies__textblock">
                                        <li className="privilegies__item"><p>Удвоение баллов на 1,5 часа</p></li>
                                        <li className="privilegies__item"><p>Кэшбэк 4% еженедельный</p></li>
                                        <li className="privilegies__item"><p>
                                            10 фриспинов в Resident<span className="privilegies__item_info tooltipstered" data-privileges-tooltipster=""></span>
                                        </p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="privilegies__level" data-privileges-page="level-wrap">
                                <div className="privilegies__status">
                                    <div className="ico">
                                        <div className="level level-lg level_5"></div>
                                    </div>
                                    <div className="privilegies__exp"><span>12 500</span> баллов</div>
                                    <div className="privilegies__progress hide" data-privileges-page="level-progress">
                                        <div className="privilegies__progress_inprogress"></div>
                                    </div>
                                </div>

                                <div className="privilegies__container">
                                    <div className="privilegies__header">
                                        <div className="privilegies__header privilegies__header-priv">Мастер</div>
                                        <div className="privilegies__header privilegies__header-bonus">25 000 ₸ </div>
                                        <div className="privilegies__header privilegies__header-curren">0,75:1</div>
                                    </div>
                                    <ul className="privilegies__textblock">
                                        <li className="privilegies__item"><p>Деньги в подарок</p></li>
                                        <li className="privilegies__item"><p>Доступ к VIP-турнирам</p></li>
                                        <li className="privilegies__item"><p>Удвоение баллов на 2 часа</p></li>
                                        <li className="privilegies__item"><p>Кэшбэк 6% еженедельный</p></li>
                                        <li className="privilegies__item"><p>
                                            15 фриспинов в Lucky Lady's Charm<span className="privilegies__item_info tooltipstered" data-privileges-tooltipster=""></span>
                                        </p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="privilegies__level" data-privileges-page="level-wrap">
                                <div className="privilegies__status">
                                    <div className="ico">
                                        <div className="level level-lg level_6"></div>
                                    </div>
                                    <div className="privilegies__exp"><span>25 000</span>баллов</div>
                                    <div className="privilegies__progress hide" data-privileges-page="level-progress">
                                        <div className="privilegies__progress_inprogress"></div>
                                    </div>
                                </div>
                                <div className="privilegies__container">
                                    <div className="privilegies__header">
                                        <div className="privilegies__header privilegies__header-priv">Эксперт</div>
                                        <div className="privilegies__header privilegies__header-bonus">40 000 ₸</div>
                                        <div className="privilegies__header privilegies__header-curren">0,5:1</div>
                                    </div>
                                    <span className="bonus"></span>
                                    <ul className="privilegies__textblock">
                                        <li className="privilegies__item"><p>Ускоренный вывод средств</p></li>
                                        <li className="privilegies__item">
                                            <p>
                                                Бонус 20% на каждый депозит
                                                <span className="privilegies__item_info tooltipstered" data-privileges-tooltipster=""></span>
                                            </p>
                                        </li>
                                        <li className="privilegies__item">
                                            <p>
                                                Утроение баллов на 1 час
                                                <span className="privilegies__item_info tooltipstered" data-privileges-tooltipster=""></span>
                                            </p>
                                        </li>
                                        <li className="privilegies__item"><p>Кэшбэк 8% еженедельный</p></li>
                                        <li className="privilegies__item"><p>
                                            20 фриспинов в Crazy Monkey <span className="privilegies__item_info tooltipstered" data-privileges-tooltipster=""></span>
                                        </p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="privilegies__level" data-privileges-page="level-wrap">
                                <div className="privilegies__status">
                                    <div className="ico">
                                        <div className="level level-lg level_7"></div>
                                    </div>
                                    <div className="privilegies__exp"><span>50 000</span> баллов</div>
                                </div>
                                <div className="privilegies__container">
                                    <div className="privilegies__header">
                                        <div className="privilegies__header privilegies__header-priv">Профессионал</div>
                                        <div className="privilegies__header privilegies__header-bonus">100 000 ₸</div>
                                        <div className="privilegies__header privilegies__header-curren">0,25:1</div>
                                    </div>
                                    <ul className="privilegies__textblock">
                                        <li className="privilegies__item">
                                            <p>
                                                Бонус 25% на каждый депозит
                                                <span className="privilegies__item_info tooltipstered" data-privileges-tooltipster=""></span>
                                            </p>
                                        </li>
                                        <li className="privilegies__item"><p>Утроение баллов на 2 часа</p></li>
                                        <li className="privilegies__item"><p>Кэшбэк 10% еженедельный</p></li>
                                        <li className="privilegies__item"><p>Спин в Колесе Фортуны</p></li>
                                        <li className="privilegies__item"><p>25 фриспинов в Fruit Cocktail<span className="privilegies__item_info tooltipstered" data-privileges-tooltipster=""></span></p></li>
                                        <li className="privilegies__item"><p>VIP-талисман на 7 дней</p></li>
                                        <li className="privilegies__item"><p>Расширенная статистика в личном кабинете</p></li>
                                    </ul>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
                <div className="privilegies-title">
                    <h1>Ваши привилегии</h1>
                </div>
                <p>Чем выше уровень, тем более ценные привилегии вы получаете.</p>``


                <ul className="cnt-text-list">
                    <li>Денежные призы</li>
                    <li>Фриспины</li>
                    <li>Кэшбэк (возврат проигранных средств)</li>
                    <li>Баллы в подарок</li>
                    <li>Обмен баллов на реальные деньги</li>
                    <li>Удвоение или утроение получаемых баллов</li>
                    <li>Доступ к VIP турнирам</li>
                    <li>VIP-талисман</li>
                    <li>Бесплатный спин в Колесе Фортуны</li>
                </ul>

                <div className="privilegies-description">
                    <p>Мы вознаграждаем каждое ваше действие! Вы пополняете баланс – мы дарим вам бонусные деньги и лотерейные билеты. Вы делаете ставку – мы дарим вам баллы и победы в турнирах. Вы выигрываете – мы берем на себя комиссию за вывод средств. Ну, а если вы вдруг проиграли – мы возвращаем вам часть проигранных денег.</p>

                    <p>Важно! Все деньги, которые мы вам дарим (кэшбэк, выигрыши в турнирах и лотереях, обмен баллов), не нужно отыгрывать. Если вы делаете ставки в валютах сум и тенге, и при этом, их сумма меньше 12 ₸, прогресс в программе лояльности не начисляется.</p>
                </div>

            </div>
        </>
    );
}

export default Privileges;