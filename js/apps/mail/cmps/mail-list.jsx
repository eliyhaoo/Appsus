
import {MailPreview} from './mail-preview.jsx'
import { eventBusService } from '../../../services/event-bus-service.js' 
import { mailService } from '../services/mail-service.js'

const {Link} = ReactRouterDOM

export class MailList extends React.Component {

    state= {
        emails: []
    }

    removeEvent
    componentDidMount(){

        this.removeEvent =eventBusService.on('onLoadEmails',(emails)=>this.setState({emails}))
    }


    componentWillUnmount(){
        this.removeEvent()
    }

    onEmailClick=(emailId,boolean)=>{
        const {emails} = this.state
         mailService.getEmailById(emailId)
        .then(currEmail =>{
            currEmail.isShowen =  boolean
            const updatedEmails =emails.map(email => email.id === emailId? currEmail : email)
            this.setState({emails:updatedEmails},()=>console.log('new emails',this.state))
            
        })
    }

    render(){

        const {emails} = this.state
        return <section className="mail-list flex column">

       
        {emails.map(email=> <MailPreview key={email.id} isShowen={email.isShowen}  email={email} onEmailClick={this.onEmailClick}/>)}
        {/* <Link to={`/mail/details/265165156`}>LINK</Link> */}

    </section>
    }
} 