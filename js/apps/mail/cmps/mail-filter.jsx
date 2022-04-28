
const {Link} = ReactRouterDOM

export class MailFilter extends React.Component {

    state= {

    }

    render(){
        
        return <section className="mail-filter">

            FILTER

            <Link to="mail/compose" ><button>Compose</button></Link>
           
        </section>
    }
}