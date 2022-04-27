import { utilService } from "../../../services/util-service.js"

export function SmallPreview({email,onEmailClick}) {

    const { subject, body, id, isRead, sentAt, from } = email
    const sender = from.split('@').splice(0, 1).toString()
    const shortSub = subject.length > 15 ? subject.substring(0, 15) : subject
    const text = body.substring(0, 10)
    const time = utilService.getFormatedTime(sentAt)
    const readClass = isRead ? 'read' : ''
    return (

        <section onClick={()=>{onEmailClick(id,true)}} key={id} className={`mail-small-preview flex space-between ${readClass}`} >


            <span className="mail-tag">*</span>
            <div className="mail-info flex">
                {sender} <span>{shortSub}</span><small>{text}</small>
            </div>
            <div className="sent-at">{time}</div>

        </section>
    )
    }