
const { Link } = ReactRouterDOM

export function MailFilter({onSetFilter}) {

        return <section className="mail-filter">
            <Link to="mail/compose" ><button>Compose</button></Link>
            <div className="filter-options-container">

                <div className="active" onClick={()=>onSetFilter('status','inbox')} >Inbox</div>
                <div onClick={()=>onSetFilter('status','sent')} >sent</div>
                <div onClick={()=>onSetFilter('status','trash')}>Trash</div>
                <div onClick={()=>onSetFilter('status','draft')}>Draft</div>

             
            </div>

        </section>
    }
