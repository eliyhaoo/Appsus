import { utilService } from "../../../services/util-service.js"
import { eventBusService } from '../../../services/event-bus-service.js'

const { Link } = ReactRouterDOM
export function BigPreview({ email, onEmailClick,status }) {

    const { subject, body, id, isRead, sentAt, from ,to,receivedAt} = email
    const sender = sentAt?  to.split('@').splice(0, 1).toString() :from.split('@').splice(0, 1).toString()
    const mail = sentAt? to : from
    const shortSub = subject.length > 15 ? subject.substring(0, 15) : subject
    const text = body.substring(0, 100)
    const time = sentAt ? utilService.getFormatedTime(sentAt) :utilService.getFormatedTime(receivedAt)
    const readClass = isRead ? '' : 'read'
    const isInTrash = status === 'trash' ? true :false //make Delete from here

    return (

        <section key={id} onClick={() => { onEmailClick(id, false) }}  className={`mail-big-preview flex column`} >
            <div className="flex space-between">
                <h2>{subject}</h2>
                <div className="btns-container flex space-between">
                    {/* <div onClick={() => { onEmailClick(id, false) }}>CLOSE</div> */}
                    <Link to={`/mail/details/${id}`}> <div onClick={(ev)=>{ev.stopPropagation()}} className="fas fa-expand"> </div></Link>
                    {!isInTrash &&<div className="fa fa-trash" onClick={() => eventBusService.emit('trash', id)}></div>}
                    {isInTrash &&<div className="fa fa-trash" onClick={() => eventBusService.emit('delete', id)}></div>}
                    
                </div>
            </div>

            <div className="sender-container flex align-center">
            <h4>{sender}</h4>
            <small>{`<${mail}>`}</small>
            </div>

            <p>{body}</p>



        </section>
    )
}
