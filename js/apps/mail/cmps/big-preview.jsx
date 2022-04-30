import { utilService } from "../../../services/util-service.js"
import { eventBusService } from '../../../services/event-bus-service.js' 

const { Link } = ReactRouterDOM
export function BigPreview({email,onEmailClick}) {


    const { subject, body, id, isRead, sentAt, from } = email
    // const sender = from.split('@').splice(0, 1).toString()
    // const shortSub = subject.length > 15 ? subject.substring(0, 15) : subject
    // const text = body.substring(0, 10)
    // const time = utilService.getFormatedTime(sentAt)
    const readClass = isRead ? 'read' : ''
    return (

        <section  key={id} className={`mail-big-preview flex column ${readClass}`} >
            <button onClick={()=>{onEmailClick(id,false)}}>CLOSE</button>
            <button onClick={()=>eventBusService.emit('trash',id)}>Delete</button>
             <Link to={`/mail/details/${id}`}> BIG</Link>
            <h4><span className="mail-tag">*</span> {subject}</h4>
            <small>{`<${from}>`}</small>
            <p>{body}</p>

            

        </section>
    )
}
