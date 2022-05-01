
const {Link, NavLink} = ReactRouterDOM


export class AppHeader extends React.Component {

       state ={
            isMenuOpen: false,
            app: ""
       }

       toggleMenu=()=>{
           console.log('closing menu',this.state);
        this.setState((prevState)=>({...prevState,isMenuOpen:!this.state.isMenuOpen}))
       }

       setCurrApp=(appName)=>{
        this.setState((prevState)=>({...prevState,app:appName}))
       }

       render(){

        const {isMenuOpen,app} = this.state
        const menuClass = !isMenuOpen ? '':'open-menu'

        return <header className="app-header flex space-between flex-center">
        <div className="logo-container flex">
        <Link to='/'><h3 onClick={()=>this.setCurrApp('')} className="logo">App<span>sus</span></h3> </Link>
        <Link to='/'><h3 className="logo">
            <span className="logo-a">A</span>
                <span className="logo-p1">p</span>
                <span className="logo-p2">p</span>
                    <span className="logo-s1">s</span>
                    <span className="logo-u">u</span>
                    <span className="logo-s2">s</span>
                   
                    </h3> </Link>
        {/* <h3 className="selected-app"></h3> */}
        </div>
        <h3>{app}</h3>

    

        <div onClick={this.toggleMenu} className="menu-container" htmlFor="chk"> <img src="assets/img/icons/apps-icon.png" alt="menu" /></div>
    

            <nav  onClick={this.toggleMenu}  className={`nav-bar ${menuClass}`}>

                <NavLink  to='/keep'>
                    <div onClick={()=>this.setCurrApp('Keep')} className="keep-link">
                        <div className="keep-img-container">
                            <img src="assets/img/icons/keep.png" alt="keep" />
                        </div>
                        <div>Keep</div>
                    </div>
                </NavLink>

        <label htmlFor="chk">
                <NavLink to='/mail'>
                    <div onClick={()=>this.setCurrApp('Gmail')} className="mail-link">
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
}