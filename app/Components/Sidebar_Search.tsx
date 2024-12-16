

const Sidebar_Search = () => {

    return (
        <>
            <div className="sidebar-search" data-sidebar-search="desktop">
                <form method="GET" className="search-form">
                    <div className="search-wrapper">
                        <input className="search-input" type="search" placeholder="Поиск игр" name="search" maxLength={50} autoComplete="off" />
                        <span className="btn-icon-search"></span>
                        <span className="btn-icon-clear"></span>
                    </div>
                </form>
            </div>
        </>
    );
}

export default Sidebar_Search;