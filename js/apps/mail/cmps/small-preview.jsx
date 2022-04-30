import { utilService } from "../../../services/util-service.js"
import { eventBusService } from "../../../services/event-bus-service.js"

export function SmallPreview({email,onEmailClick,status,onDelete}) {

    const { subject, body, id, isRead, sentAt, from ,receivedAt} = email
    const sender = from.split('@').splice(0, 1).toString()
    const shortSub = subject.length > 15 ? subject.substring(0, 15) : subject
    const text = body.substring(0, 100)
    const time = sentAt ? utilService.getFormatedTime(sentAt) :utilService.getFormatedTime(receivedAt)
    const readClass = isRead ? '' : 'read'
    const isInTrash = status === 'trash' ? true :false

    function onDelete(ev){
        ev.stopPropagation()
        eventBusService.emit('delete',id)
    }

    return (

        <section onClick={()=>{onEmailClick(id,true)}} key={id} className={`mail-small-preview flex space-between ${readClass}`} >

            <div className="preview-start 
            flex">
            <span className="mail-tag">☆</span>
            <span>{sender}</span>
            </div>
            
            {/* <div className="mail-info flex fa fa-trash "> */}
            <div className="mail-info flex ">
                {isInTrash &&   <div onClick={onDelete} className="fa fa-trash"></div>}
              
                 <span>{shortSub}</span><small>{text}</small>
            </div>

            <div className="sent-at">{time}</div>

        </section>
    )
    }