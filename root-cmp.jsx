import { AppHeader } from "./js/cmps/app-header.jsx"
import { AppFooter } from "./js/cmps/app-footer.jsx"
import { Home } from "./js/pages/home.jsx"
import { MailApp } from "./js/pages/mail-app.jsx"
import { MailDetails } from "./js/apps/mail/cmps/mail-details.jsx"
import { KeepApp } from "./js/apps/keep/pages/keep-app.jsx"


const Router = ReactRouterDOM.HashRouter
const { Route, Switch } = ReactRouterDOM

export function Apps() {

    return <Router>
        <AppHeader />
       
        <section className="main-route-container">
            <Switch>
                {/* <Route path="/book" component={BookApp} /> */}
                <Route path="/keep" component={KeepApp} />
                
                <Route path="/mail" component={MailApp} />
                <Route path="/" component={Home} />
            </Switch>
        </section>
        {/* <AppFooter/> */}
    </Router>
}