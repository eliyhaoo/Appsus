
import {BigPreview} from "../cmps/big-preview.jsx"
import {SmallPreview} from "../cmps/small-preview.jsx"

const { Link } = ReactRouterDOM

export function MailPreview({ email, isShowen, onEmailClick }) {
    

    
    // const sender = from.split('@').splice(0, 1).toString()
    // const shortSub = subject.length > 15 ? subject.substring(0, 15) : subject
    // const text = body.substring(0, 10)
    // const time = utilService.getFormatedTime(sentAt)
    // const readClass = isRead ? 'read' : ''


    return (

        <DynamicPreview isShowen={isShowen} email={email} onEmailClick={onEmailClick}/>

    // <Link to={`/mail/details/${id}`}>
)    // </Link>
}


function DynamicPreview(props){

    switch (props.isShowen){
        case false:
        return <SmallPreview {...props}/>
        case true:
        return <BigPreview  {...props}/>
    }

}






