
const {Link, NavLink} = ReactRouterDOM


export function AppHeader(){

        return <header className="app-header flex space-between flex-center">
        <div className="logo-container flex">
        <Link to='/'><h3 className="logo">App<span>sus</span></h3> </Link>
        {/* <h3 className="selected-app">Mail</h3> */}
        </div>
        {/* <div className="img-container"><img  src="assets/img/icons/apps-icon.png" alt="" /></div> */}

        <label htmlFor="chk"></label>
        <input type="checkbox" id="chk" />
        <section className="menu">
            IM A MENU!
        </section>

        <nav className="nav-bar">
            
            <NavLink to='/keep'>Keep</NavLink>  
            <NavLink to='/mail'>Mail</NavLink>  
        </nav>
      
    </header>


}