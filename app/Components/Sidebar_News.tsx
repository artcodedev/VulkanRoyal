
import Image from 'next/image'

const Sidebar_News = () => {

    return (
        <>

            <div className="sidebar-block sidebar-block--news">
                <a className="sidebar-block--news__box" href="/ru/news/oktoberfest-lootbox">
                    <div className="sidebar-block__img">


                        <Image src="/uploads/news_img/300x196_lootboxes-1726747687.jpg" alt="Подгон к Октоберфесту" width={300} height={100} />
                    </div>
                    <div className="sidebar-block__section">
                        <p className="sidebar__title">
                            новости
                        </p>
                        <h3 className="sidebar__header">
                            Подгон к Октоберфесту
                        </h3>
                    </div>
                </a>
                <div className="sidebar-btns sidebar-btns--news">
                    <a className="btn btn-md" href="/ru/news/" data-ga-event="sidebar__news" data-preloader="">
                        <span>Все новости</span>
                    </a>
                </div>
            </div>
        </>
    );

}

export default Sidebar_News;