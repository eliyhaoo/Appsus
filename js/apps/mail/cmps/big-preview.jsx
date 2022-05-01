
import { eventBusService } from '../../../services/event-bus-service.js'

const { Link } = ReactRouterDOM
export function BigPreview({ email, onEmailClick,status }) {

    const { subject, body, id, sentAt, from ,to} = email
    const sender = sentAt?  to.split('@').splice(0, 1).toString() :from.split('@').splice(0, 1).toString()
    const mail = sentAt? to : from
    const isInTrash = status === 'trash' ? true :false //make Delete from here

    return (

        <section onClick={() => { onEmailClick(id, false) }}  className={`mail-big-preview flex column`} >
            <div className="flex space-between">
                <h2>{subject}</h2>
                <div className="btns-container flex space-between">
                   
                    <Link to={`/mail/details/${id}`}> <div onClick={(ev)=>{ev.stopPropagation()}} className="fas fa-expand"> </div></Link>
                    {!isInTrash &&<div className="fa fa-trash" onClick={() => eventBusService.emit('trash', id)}></div>}
                    {isInTrash &&<div className="fa fa-trash" onClick={() => eventBusService.emit('delete', id)}></div>}
                    
                </div>
            </div>

            <div className="sender-container flex align-center">
            <span className="fas fa-user"></span><h4>{sender}</h4>
            <small>{`<${mail}>`}</small>
            </div>

            <pre>{body}</pre>
            {/* <p>{body}</p> */}



        </section>
    )
}
