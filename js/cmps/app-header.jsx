
const {NavLink} = ReactRouterDOM


export function AppHeader(){


    return <header className="app-header flex space-between">
        <h3 className="logo">App<span>sus</span></h3> 
        <h3 className="selected-app">Gmail</h3>
        <div className="img-container"><img  src="assets/img/icons/apps-icon.png" alt="" /></div>

        <nav className="nav-bar">
            
            <NavLink to='/mail'>Mail</NavLink>  
        </nav>
      
    </header>

}