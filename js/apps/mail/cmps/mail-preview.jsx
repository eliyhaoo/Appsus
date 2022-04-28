
import {BigPreview} from "../cmps/big-preview.jsx"
import {SmallPreview} from "../cmps/small-preview.jsx"

const { Link } = ReactRouterDOM

export function MailPreview({ email, isShowen, onEmailClick }) {
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






