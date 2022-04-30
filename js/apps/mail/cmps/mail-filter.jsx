
const { Link } = ReactRouterDOM

function openMenu(){

}

export function MailFilter({ onSetFilter, count,status ,toggleMenu,isMenuOpen }) {
    console.log('status',status);
    const { read, total } = count
    const inboxActive = status === 'inbox' ?'inbox-active' :''
    const sentActive = status === 'sent' ? 'active' : '' 
    console.log('status sent',sentActive);
    const trashActive = status === 'trash' ? 'active' : '' 
    const draftActive = status ==='draft' ? 'active' : '' 
    const staredActive = status === 'stardActive' ? 'active' : '' 
    const menuClass = isMenuOpen ? 'open-menu': ''
    return <section className="mail-filter">
        <Link to="mail/compose" >
            <div className="compose-btn-container">
                <div className="btn flex align-center ">
                    <div className="comp-img"><img src="../../../assets/img/icons/compose.png" alt="" /></div>
                    <div className="comp-txt"> Compose</div>
                </div>
            </div>
        </Link>
        <div onClick={toggleMenu} className={`mail-nav-bar `}></div>
        <div className={`filter-options-container ${menuClass}`}>

            <div className={`inbox ${inboxActive}`} onClick={() => onSetFilter('inbox')} >Inbox</div>
            <div className={`sent ${sentActive}`} onClick={() => onSetFilter('sent')} >sent</div>
            <div className={`trash ${trashActive}`} onClick={() => onSetFilter('trash')}>Trash</div>
            <div className={`draft ${draftActive}`} onClick={() => onSetFilter('draft')}>Draft</div>
            <div className={`stared ${staredActive}`} onClick={() => onSetFilter('stared')}>Stared</div>
            <div> Emails-Count:{total} Unread-Count:{read} </div>

            {/* <div className="active" onClick={()=>onSetFilter('status','inbox')} >Inbox</div>
                <div onClick={()=>onSetFilter('status','sent')} >sent</div>
                <div onClick={()=>onSetFilter('status','trash')}>Trash</div>
                <div onClick={()=>onSetFilter('status','draft')}>Draft</div> */}


        </div>

    </section>
}
