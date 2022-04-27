
import {MailPreview} from './mail-preview.jsx'
import { eventBusService } from '../../../services/event-bus-service.js' 

const {Link} = ReactRouterDOM

export class MailList extends React.Component {

    state= {
        emails: []
    }

    removeEvent
    componentDidMount(){

        this.removeEvent =eventBusService.on('onLoadEmails',(emails)=>this.loadEmails(emails))
    }

    loadEmails(emails){
        this.setState({emails})
    }

    componentWillUnmount(){
        this.removeEvent()
    }

    render(){

        const {emails} = this.state
        return <section className="mail-list flex column">

        MAIL LIST
        {emails.map(email=> <MailPreview key={email.id} email={email}/>)}
        {/* <Link to={`/mail/details/265165156`}>LINK</Link> */}

    </section>
    }
} 