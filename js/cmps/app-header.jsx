
const {NavLink} = ReactRouterDOM


export function AppHeader(){


    return <header className="app-header flex space-between flex-center">
        <h3 className="logo">App<span>sus</span></h3> 
        <h3 className="selected-app">Gmail</h3>
        <div className="img-container"><img  src="assets/img/icons/apps-icon.png" alt="" /></div>

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