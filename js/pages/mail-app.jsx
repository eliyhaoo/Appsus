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
        mailsCount:{read:0,total:0},
        isMenuOpen: false,
        criteria: {
            status: 'inbox',
            txt: '', // no need to support complex text search 
            filter: 'all', // (optional property, if missing: show all)
            // isRead: 'all', // (optional property, if missing: show all)
            // isStared: true, // (optional property, if missing: show all)
            // lables: ['important', 'romantic'], // has any of the labels }

        }

    }
    removeDeleteEvent
    removeAddEvent

  


    componentDidMount() {
        setTimeout(this.loadEmails, 1000)
        this.removeDeleteEvent = eventBusService.on('trash', (emailId) => { this.moveToTrash(emailId) })
        this.removeAddEvent = eventBusService.on('add', (emailId) => { this.sendToAdd(emailId) })
        this.removeAddEvent = eventBusService.on('delete', (emailId) => { this.DeleteEmail(emailId) })
        this.removeAddEvent = eventBusService.on('read-toggle', (emailId) => { this.readToggle(emailId) })
        this.removeAddEvent = eventBusService.on('star-toggle', (emailId) => { this.starToggle(emailId) })
        
    }

    componentWillUnmount(){
        this.removeDeleteEvent()
        this.removeAddEvent()
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
        const {emails} = this.state
        let read =0
        let total= 0
         emails.forEach(email=>{
            if (!email.isRead) read++
            total++
        })
        this.setState({mailsCount:{read,total}})
        
    }
    
    onSetFilter=(status)=>{
        this.setState((prevState)=>({criteria:{...prevState.criteria,status}}),()=>{
            const urlSrcPrm = new URLSearchParams(status)
            const searchStr = urlSrcPrm.toString()
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
                console.log('LOADING EMAILS STATE',this.state);
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
        console.log('got it babe');
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
        <main className="mail-app flex">
            <MailFilter isMenuOpen={isMenuOpen} toggleMenu={this.onToggleMenu} count={mailsCount} status={criteria.status} onSetFilter={this.onSetFilter} />
            
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