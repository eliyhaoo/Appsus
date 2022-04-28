import { utilService } from "../../../services/util-service.js"

export function SmallPreview({email,onEmailClick}) {

    const { subject, body, id, isRead, sentAt, from ,receivedAt} = email
    const sender = from.split('@').splice(0, 1).toString()
    const shortSub = subject.length > 15 ? subject.substring(0, 15) : subject
    const text = body.substring(0, 100)
    const time = utilService.getFormatedTime(receivedAt)
    const readClass = isRead ? 'read' : ''
    return (

        <section onClick={()=>{onEmailClick(id,true)}} key={id} className={`mail-small-preview flex space-between ${readClass}`} >

            <div className="preview-start flex">
            <span className="mail-tag">☆</span>
            <span>{sender}</span>
            </div>
            
            <div className="mail-info flex ">
                 <span>{shortSub}</span><small>{text}</small>
            </div>

            <div className="sent-at">{time}</div>

        </section>
    )
    }