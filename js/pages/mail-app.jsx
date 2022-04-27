import {MailList} from '../apps/mail/cmps/mail-list.jsx'
import {MailFilter} from '../apps/mail/cmps/mail-filter.jsx'
import {mailService } from '../apps/mail/services/mail-service.js'
import {MailDetails } from '../apps/mail/cmps/mail-details.jsx'
import { eventBusService } from '../services/event-bus-service.js' 

const {Route,Switch} = ReactRouterDOM



export class MailApp extends React.Component {

    state ={

        emails:[],
        filterBy:null

    }

    componentDidMount(){
        setTimeout(this.loadEmails,1000)    
    }

    loadEmails=()=>{
        mailService.query(this.state.filterBy)
        .then(emails=>this.setState({emails},()=>{
           eventBusService.emit('onLoadEmails',emails) 
        }))
    }

    onSetFilter=(filter)=>{

        this.setState({filter},this.loadEmails())

    }




    render(){
        const {emails} = this.state
        if(!this.state.emails.length) return <div className="loader"></div>
        return<main className="mail-app flex">
            <MailFilter onSetFilter={this.onSetFilter} />
            <div className="mails-container">
            {/* <MailList emails={emails}/>
            <section> */}

            <Switch>
            <Route path="/mail/details/:emailId?" component={MailDetails} />   
            <Route path="/mail/" component={MailList}/>
            </Switch>
        

            </div>

        </main>
        
    }


}