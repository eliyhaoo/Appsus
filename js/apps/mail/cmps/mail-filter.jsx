
const { Link } = ReactRouterDOM


export function MailFilter({ onSetFilter, count, status, toggleMenu, isMenuOpen }) {

    const { unread, total } = count
    const inboxActive = status === 'inbox' ? 'inbox-active' : ''
    const sentActive = status === 'sent' ? 'active' : ''
    const trashActive = status === 'trash' ? 'active' : ''
    const draftActive = status === 'draft' ? 'active' : ''
    const staredActive = status === 'stared' ? 'active' : ''
    const menuClass = isMenuOpen ? 'open-menu' : ''

    return <section className="mail-filter">
        <Link to="mail/compose" >
            <div className="compose-btn-container">
                <div className="btn flex align-center ">
                    <div className="comp-img"><img src="assets/img/icons/compose.png" alt="" /></div>
                    <div className="comp-txt"> Compose</div>
                </div>
            </div>
        </Link>
        <div onClick={toggleMenu} className={`mail-nav-bar `}></div>
        <div className={`filter-options-container ${menuClass}`}>

            <div className={`flex space-between ${inboxActive}`} onClick={() => onSetFilter('inbox')} ><span className="inbox">Inbox</span>  <span>{total}</span> </div>
            <div className={`sent ${sentActive}`} onClick={() => onSetFilter('sent')} >sent</div>
            <div className={`trash ${trashActive}`} onClick={() => onSetFilter('trash')}>Trash</div>
            <div className={`draft ${draftActive}`} onClick={() => onSetFilter('draft')}>Draft</div>
            <div className={`stared ${staredActive}`} onClick={() => onSetFilter('stared')}>Stared</div>

            <div className="progress-bar-title"> Unread:{unread} </div>
        <progress max={total} value={unread}></progress>
        </div>



      

    </section>
}
