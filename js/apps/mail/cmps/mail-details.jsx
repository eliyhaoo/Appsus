import { mailService } from "../services/mail-service.js"
import { eventBusService } from '../../../services/event-bus-service.js' 
export class MailDetails extends React.Component {

    
    state ={
        email: null
    }

    componentDidMount(){
        console.log('MOUNTED');
        this.loadEmail()
    }

    loadEmail(){
        const {emailId} = this.props.match.params
        const email = mailService.getEmailById(emailId)
        .then(email =>{
            if (!email) return this.props.history.push('/mail')
            this.setState({email},()=>console.log('STATE',this.state))
        })
    }

    deleteEmail(id){
        eventBusService.emit('trash',id)
        this.props.history.push('/mail')
    }


    render(){

        const {email} = this.state
        if (!email) return <React.Fragment></React.Fragment>
        const {subject,body,time,from,id} =email
        console.log('emaillll', email);
        return <section className="mail-details">
         
             
            <h2><span className="mail-tag">*</span> {subject}</h2>
            <h4>{`<${from}>`}</h4>
            <p>{body}</p>
            <h4>{time}</h4>
            <button onClick={()=>this.deleteEmail(id)} >Delete</button>


        </section>
    }
} 