
const {Link, NavLink} = ReactRouterDOM


export function AppHeader() {


        return <header className="app-header flex space-between flex-center">
        <div className="logo-container flex">
        <Link to='/'><h3 className="logo">App<span>sus</span></h3> </Link>
        {/* <h3 className="selected-app">Mail</h3> */}
        </div>
        {/* <div className="img-container"><img  src="assets/img/icons/apps-icon.png" alt="" /></div> */}

        <label className="menu-container" htmlFor="chk"> <img src="assets/img/icons/apps-icon.png" alt="menu" /></label>
        <input type="checkbox" id="chk" />

            <nav className="nav-bar">

                <NavLink to='/keep'>
                    <div className="keep-link">
                        <div className="keep-img-container">
                            <img src="assets/img/icons/keep.png" alt="keep" />
                        </div>
                        <div>Keep</div>
                    </div>
                </NavLink>

        <label htmlFor="chk">
                <NavLink to='/mail'>
                    <div className="mail-link">
                        <div className="mail-img-container">
                            <img src="assets/img/icons/gmail.png" alt="mail" />
                        </div>
                        <div>Gmail</div>
                    </div>
                </NavLink>
        </label>
            </nav>
    </header>


}