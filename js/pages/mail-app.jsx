import { mailService } from '../apps/mail/services/mail-service.js'
import { eventBusService } from '../services/event-bus-service.js'

import { MailList } from '../apps/mail/cmps/mail-list.jsx'
import { MailFilter } from '../apps/mail/cmps/mail-filter.jsx'
import { MailDetails } from '../apps/mail/cmps/mail-details.jsx'
import { MailCompose } from '../apps/mail/cmps/mail-compose.jsx'
import { MailHeader } from '../apps/mail/cmps/mail-header.jsx'

const { Route, Switch } = ReactRouterDOM



export class MailApp extends React.Component {

    state = {

        emails: [],
        mailsCount:{unread:0,total:0},
        isMenuOpen: false,
        criteria: {
            status: 'inbox',
            txt: '', 
            filter: 'all',
            
            // lables: ['important', 'romantic'], // has any of the labels }

        }

    }
    removeDeleteEvent
    removeAddEvent
    removeDeleteEvent
    removeReadEvent
    removeStarEvent

  


    componentDidMount() {
        setTimeout(this.loadEmails, 1000)
        this.removeDeleteEvent = eventBusService.on('trash', (emailId) => { this.moveToTrash(emailId) })
        this.removeAddEvent = eventBusService.on('add', (emailId) => { this.sendToAdd(emailId) })
        this.removeDeleteEvent = eventBusService.on('delete', (emailId) => { this.DeleteEmail(emailId) })
        this.removeReadEvent = eventBusService.on('read-toggle', (emailId) => { this.readToggle(emailId) })
        this.removeStarEvent = eventBusService.on('star-toggle', (emailId) => { this.starToggle(emailId) })
        
    }

    componentWillUnmount(){
        this.removeDeleteEvent()
        this.removeAddEvent()
        this.removeDeleteEvent()
        this.removeReadEvent()
        this.removeStarEvent()
    }

    handleChange=(field,value)=>{
       
        this.setState((prevState)=>({criteria: {...prevState.criteria,[field]:value} }),()=>{
            this.loadEmails()
          
        })
    }

    onSearch=({txt,filter})=>{
        this.handleChange('txt',txt)
        this.handleChange('filter',filter) 
    }

    setEmailsCount=()=>{
        mailService.getEmailCount()
        .then(({unread,total})=>this.setState({mailsCount:{unread,total}})) 
    }
    
    onSetFilter=(status)=>{
        this.setState((prevState)=>({criteria:{...prevState.criteria,status}}),()=>{
            const urlSrcParms = new URLSearchParams(status)
            const searchStr = urlSrcParms.toString()
            console.log('SEARCH PRAMS',urlSrcParms);
            this.props.history.push(`/mail?${status}`)
            this.loadEmails()
        })
    }

    loadEmails = () => {
        mailService.query(this.state.criteria)
            .then(emails => this.setState({ emails }, () => {
                const mailsToDisplay = {emails,status:this.state.criteria.status}
                eventBusService.emit('onLoadEmails', mailsToDisplay)
                this.setEmailsCount()
               
            }))
    }

    readToggle(emailId){
        mailService.readToggle(emailId)
        .then(this.loadEmails)
    }

    starToggle(emailId){
        console.log('TOGGLE ', emailId);
        mailService.starToggle(emailId)
        .then(this.loadEmails)
    }

    moveToTrash=(emailId)=> {
        mailService.trash(emailId)
            .then(this.loadEmails)
    }

    onToggleMenu=()=>{
        this.setState({isMenuOpen:!this.state.isMenuOpen})
    }

    sendToAdd=(email)=>{
        console.log('emailrecvive SENT',email);
        mailService.add(email)
        .then(()=>{
            this.props.history.push('/mail')
            this.loadEmails()
        })

    }

    DeleteEmail=(emailId)=> {
        mailService.remove(emailId)
            .then(this.loadEmails)
    }




    render() {
        const { emails ,mailsCount ,criteria,isMenuOpen} = this.state
        const isEmailsExsist = emails.length ? true : false
        return <section className="mail-app-container">

            <MailHeader onSearch={this.onSearch}/>
        <section className="mail-app flex">
            <MailFilter isMenuOpen={isMenuOpen} toggleMenu={this.onToggleMenu} count={mailsCount} status={criteria.status} onSetFilter={this.onSetFilter} />
            
            {(!isEmailsExsist) &&  <div className="loader"></div>}
            {isEmailsExsist && <div className="mails-container">
                <Switch>
                    <Route path="/mail/details/:emailId?" component={MailDetails} />
                    <Route path="/mail/compose" component={MailCompose} />
                    <Route path="/mail/" component={MailList} />
                </Switch>


            </div>}

        </section>
        </section>
    }
}