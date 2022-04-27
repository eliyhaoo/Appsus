
const {Link} = ReactRouterDOM

export function MailPreview({email}) {

    return <Link to={`/mail/${email.id}`}>
     <section className="mail-preview flex ">

     MAIL PREVIEW
         
    </section>
    </Link>
}