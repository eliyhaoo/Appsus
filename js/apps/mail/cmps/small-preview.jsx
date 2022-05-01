import { utilService } from "../../../services/util-service.js"
import { eventBusService } from "../../../services/event-bus-service.js"

export function SmallPreview({ email, onEmailClick, status }) {


    function onDelete(ev) {
        ev.stopPropagation()
        eventBusService.emit('delete', id)
    }

    function onRemove(ev) {
        ev.stopPropagation()
        eventBusService.emit('trash', id)
    }

    function onReadToggle(ev) {
        ev.stopPropagation()
        eventBusService.emit('read-toggle', id)
    }

    function onStarToggle(ev) {
        ev.stopPropagation()
        eventBusService.emit('star-toggle', id)
    }

    const { subject, body, id, isRead, sentAt, from, to, receivedAt, isStar } = email
    const sender = sentAt ? to.split('@').splice(0, 1).toString() : from.split('@').splice(0, 1).toString()
    const shortSub = subject.length > 30 ? subject.substring(0, 30) : subject
    const text = body.substring(0, 100)
    const time = sentAt ? utilService.getFormatedTime(sentAt) : utilService.getFormatedTime(receivedAt)
    const readClass = isRead ? '' : 'read'
    const isInTrash = status === 'trash' ? true : false
    const starClass = isStar ? 'star' : 'unstar'
    return (

        <section onClick={() => { onEmailClick(id, true) }} key={id} className={`mail-small-preview flex space-between ${readClass}`} >

            <div className="preview-start flex align-center">
                <span onClick={onStarToggle} className={starClass}></span>
                <span>{sender}</span>
            </div>

            <div className="info-and-time-container flex space-between">
                
                <div className="mail-info flex ">
                    {isInTrash && <div onClick={onDelete} className="fa fa-trash"></div>}

                    <span>{shortSub}</span><small>{text}</small>
                </div>

                <div className="dynamic-container">


                    <div className="btns-hover flex ">

                        {!isInTrash && <div onClick={onRemove} className="fa fa-trash"></div>}
                        {!isRead && <div onClick={onReadToggle} className="read fas fa-envelope-open" ></div>}
                        {isRead && <div onClick={onReadToggle} className="read fas fa-envelope-close" ></div>}
                    </div>


                    <div className="sent-at">{time}</div>

                </div>
            </div>


        </section>
    )
}