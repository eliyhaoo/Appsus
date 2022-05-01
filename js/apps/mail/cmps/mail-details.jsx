import { mailService } from "../services/mail-service.js"
import { eventBusService } from '../../../services/event-bus-service.js'
import { utilService } from '../../../services/util-service.js'
export class MailDetails extends React.Component {


    state = {
        email: null
    }

    componentDidMount() {
        this.loadEmail()
    }

    loadEmail() {
        const { emailId } = this.props.match.params
        mailService.getEmailById(emailId)
            .then(email => {
                if (!email) return this.props.history.push('/mail')
                this.setState({ email })
            })
    }

    deleteEmail(id) {
        eventBusService.emit('trash', id)
        this.props.history.push('/mail')
    }


    render() {

        const { email } = this.state
        if (!email) return <React.Fragment></React.Fragment>
        const { subject, body, from, to, sentAt, receivedAt } = email
        const sender = sentAt ? to.split('@').splice(0, 1).toString() : from.split('@').splice(0, 1).toString()
        const mail = sentAt ? to : from
        const fullDate = sentAt ? utilService.getFormatedDate(sentAt) :utilService.getFormatedDate(receivedAt)

        // const isInTrash = status === 'trash' ? true : false //make Delete from here


        return <section className="mail-details">


            <h2>{subject}</h2>

            <div className="sender-info flex space-between">
                <div className="sender-container flex align-center">
                    <span className="fas fa-user"></span><h4>{sender}</h4>
                    <small>{`<${mail}>`}</small>
                </div>
                <span className='date'>{fullDate}</span>
            </div>
            <pre>{body}</pre>


        </section>
    }
} 