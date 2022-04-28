import { MailList } from '../apps/mail/cmps/mail-list.jsx'
import { MailFilter } from '../apps/mail/cmps/mail-filter.jsx'
import { mailService } from '../apps/mail/services/mail-service.js'
import { MailDetails } from '../apps/mail/cmps/mail-details.jsx'
import { MailCompose } from '../apps/mail/cmps/mail-compose.jsx'
import { MailHeader } from '../apps/mail/cmps/mail-header.jsx'
import { eventBusService } from '../services/event-bus-service.js'

const { Route, Switch } = ReactRouterDOM



export class MailApp extends React.Component {

    state = {

        emails: [],

        criteria: {
            status: 'inbox',
            txt: '', // no need to support complex text search 
            // isRead: true, // (optional property, if missing: show all)
            // isStared: true, // (optional property, if missing: show all)
            // lables: ['important', 'romantic'], // has any of the labels }

        }

    }
    removeEvent

    handleChange=(field,value)=>{
        console.log(field,value);
        this.setState((prevState)=>({criteria: {...prevState.criteria,[field]:value} }),()=>{
            this.loadEmails()
            console.log('state',this.state.criteria);
        })
    }


    componentDidMount() {
        setTimeout(this.loadEmails, 1000)
        this.removeEvent = eventBusService.on('delete', (emailId) => { this.moveToTrash(emailId) })
    }

    componentWillUnmount(){
        this.removeEvent()
    }

    loadEmails = () => {
        mailService.query(this.state.criteria)
            .then(emails => this.setState({ emails }, () => {
                eventBusService.emit('onLoadEmails', emails)

            }))
    }


    moveToTrash=(emailId)=> {
        mailService.trash(emailId)
            .then(this.loadEmails)
    }
    // DeleteEmail=(emailId)=> {
    //     mailService.remove(emailId)
    //         .then(this.loadEmails)
    // }




    render() {
        const { emails } = this.state
        const isEmailsExsist = emails.length ? true : false
        return <section className="mail-app-container">

            <MailHeader onSearch={this.handleChange}/>
        <main className="mail-app flex">
            <MailFilter onSetFilter={this.handleChange} />
            
            {(!isEmailsExsist) &&  <div className="loader"></div>}
            {isEmailsExsist && <div className="mails-container">
                <Switch>
                    <Route path="/mail/details/:emailId?" component={MailDetails} />
                    <Route path="/mail/compose" component={MailCompose} />
                    <Route path="/mail/" component={MailList} />
                </Switch>


            </div>}

        </main>
        </section>
    }
}