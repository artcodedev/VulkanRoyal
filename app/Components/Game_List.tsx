


import Image from 'next/image'

const Game_List = () => {

    return (
        <>
            <div className="game-list" data-game-list-category="/ru/type/slots/" data-game-list-sorting="position" data-game-list-direction="asc" data-game-list-developer="all" data-game-list-limit="75" data-game-list-total-count="1418" data-test="games_list">


                <div data-game="item" className="tmb " data-name="Always Hot Always Hot, всегда горячий, олвейс хот, горячий, всегда горячо, фдцфны рще" data-test="gameThumb">
                    <div className="tmb-container">
                        <div className="tmb-fav hide">
                            <div className="ico ico-tmb-fav" data-game="867"></div>
                            <div className="ico ico-tmb-fav ico-tmb-fav-action" data-game="867">
                                <span className="js-game-fav-text">
                                    В избранное
                                </span>
                            </div>
                        </div>

                        <div className="tmb-img-wrapper">
                            <div className="tmb-img">
                                <div className="tmb-labels">
                                    {/* <div className="tmb-labels__label tmb-labels__tournament"></div> */}
                                </div>
                                <Image alt="Always Hot" src="/uploads/games/alwayshot-400-254.jpg" width={190} height={110} />

                                <div className="tmb-action">
                                    <br /><a className="tmb-action-link" href="/ru/games/demo/always_hot" data-href="/ru/games/demo/always_hot" data-test="demo_game_button">
                                        <span>Демо</span>
                                    </a>
                                    <a className="tmb-action-btn" href="/ru/games/always_hot" data-game-url="/ru/games/always_hot" data-game-thumb-btn="" data-check-user-rights="game" data-preloader="">
                                        <span>Играть</span>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="tmb-title" data-test="game_title">Always Hot</div>
                    </div>
                </div>

                <div data-game="item" className="tmb " data-name="Always Hot Always Hot, всегда горячий, олвейс хот, горячий, всегда горячо, фдцфны рще" data-test="gameThumb">
                    <div className="tmb-container">
                        <div className="tmb-fav hide">
                            <div className="ico ico-tmb-fav" data-game="867"></div>
                            <div className="ico ico-tmb-fav ico-tmb-fav-action" data-game="867">
                                <span className="js-game-fav-text">
                                    В избранное
                                </span>
                            </div>
                        </div>

                        <div className="tmb-img-wrapper">
                            <div className="tmb-img">
                                <div className="tmb-labels">
                                    <div className="tmb-labels__label tmb-labels__tournament"></div>
                                </div>
                                <Image alt="Always Hot" src="/uploads/games/alwayshot-400-254.jpg" width={190} height={110} />

                                <div className="tmb-action">
                                    <br /><a className="tmb-action-link" href="/ru/games/demo/always_hot" data-href="/ru/games/demo/always_hot" data-test="demo_game_button">
                                        <span>Демо</span>
                                    </a>
                                    <a className="tmb-action-btn" href="/ru/games/always_hot" data-game-url="/ru/games/always_hot" data-game-thumb-btn="" data-check-user-rights="game" data-preloader="">
                                        <span>Играть</span>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="tmb-title" data-test="game_title">Always Hot</div>
                    </div>
                </div>


            </div>
        </>
    );
}

export default Game_List;