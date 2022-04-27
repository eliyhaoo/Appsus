import { utilService } from "../../../services/util-service.js"

const {Link} = ReactRouterDOM

export function MailPreview({email}) {
    console.log('email',email);

    const {subject,body,id,isRead,sentAt,from} = email
    const sender = from.split('@').splice(0,1).toString()
    const shortSub = subject.length>15 ? subject.substring(0,15) :subject
    const text= body.substring(0,10)
    const time = utilService.getFormatedTime(sentAt)
    const readClass = isRead? 'read':'' 
   

    return <Link to={`/mail/${id}`}>
     <section key={id} className={`mail-preview flex ${readClass}`} >

        <div className="mail-tag">*</div>
        <div className="mail-info">{sender} <span>{shortSub}</span><small>{text}</small></div>
        <div className="sent-at">{time}</div>
         
    </section>
    </Link>
}