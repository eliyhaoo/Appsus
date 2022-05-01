
import {MailPreview} from './mail-preview.jsx'
import { eventBusService } from '../../../services/event-bus-service.js' 
import { mailService } from '../services/mail-service.js'

const {Link} = ReactRouterDOM

export class MailList extends React.Component {

    state= {
        emails: [],
        status: ''
    }

    removeEvent
    componentDidMount(){

        this.removeEvent =eventBusService.on('onLoadEmails',(listToDisplay)=>{
            const {emails,status} = listToDisplay
            this.setState({emails,status})
        })
    }


    componentWillUnmount(){
        this.removeEvent()
    }

    onEmailClick=(emailId,boolean)=>{
        const {emails} = this.state
         mailService.getEmailById(emailId)
        .then(currEmail =>{
            if (!currEmail.isRead) {
                currEmail.isRead = true
                mailService.updateEmail(currEmail)
                
            }
            currEmail.isShowen =  boolean
            const updatedEmails =emails.map(email => email.id === emailId? currEmail : email)
            this.setState({emails:updatedEmails})
            
        })
    }

    

    render(){

        const {emails,status} = this.state
        if (!emails) return <React.Fragment></React.Fragment>
        return <section className="mail-list flex column">
        {emails.map(email=> <MailPreview status={status} key={email.id} isShowen={email.isShowen}  email={email} onEmailClick={this.onEmailClick}/>)}
    </section>
    }
} 