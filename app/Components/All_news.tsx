

import News__nav_list from "@/app/Components/News__nav_list"
import Image from 'next/image'


const All_news = () => {

    const items = []

    return (
        <>
            <div className="cnt-main cnt-main--static" data-content-block="">
                <div className="news__page">
                    <h1 className="news__page_title">
                        <span> Новости «Royal casino» казино</span>
                    </h1>


                    <News__nav_list active={0} />

                    <div className="news__items" data-load-more-container="news">

                        <div className="news__item">
                            <div className="news__preview">

                                <div className="news__preview__img">
                                    <Image src="/uploads/754x224.jpg" width={1000} height={500} alt="" />
                                </div>

                                <div className="news__preview__info">
                                    <div className="news__preview__info__item">

                                        <div className="news__data">
                                            <p className="news__date">26 сентября 2024</p>
                                            <p className="news__views-counter">
                                                <span className="news__views-counter__eye"></span>
                                                <span className="news__views-counter__count">909</span>
                                            </p>
                                        </div>
                                        <h1 className="news__page_title">
                                            <span>Дэнс-дэнс-бонус!</span>
                                        </h1>

                                    </div>

                                    <div className="news__preview__info__item">
                                        <a className="btn btn-blue btn-lg">
                                            <span>Читать далее</span>
                                        </a>
                                    </div>


                                </div>

                            </div>

                            <div className="news__content">
                                <p>У Дженны Ортеги талант играть глазами – актриса взглядом может передать любую эмоцию. А вы обладаете мастерством вращать слоты! Смотрите, как искусно крутите барабаны! Это достойно звездного бонуса. Скорее заберите свой подарок!</p>
                            </div>


                        </div>



                    </div>

                </div>
            </div>
        </>
    )
}

export default All_news;


