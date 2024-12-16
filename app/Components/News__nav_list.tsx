

import Lang from "@/app/utils/Lang"

const News__nav_list = ({ active }: { active: Number }) => {

    const items = [
        {title: "Все", href: ``},
        {title: "Акции", href: `/type/2`},
        {title: "Игры", href: `/type/3`},
        {title: "Выигрыши", href: `/type/4`}

    ]

    return (
        <>
            <div className="news__nav">
                <div className="news__nav_list">

                    {items.map((e, i) => <div className={`news__nav_item ${active == i ? "active" : ''}`}>
                        <a href={`/${Lang()}/news${e.href}`} className="news__nav_item_title">{e.title}</a>
                    </div>)}

                </div>
            </div>
        </>
    );

}

export default News__nav_list;