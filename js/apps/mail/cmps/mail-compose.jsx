import { eventBusService } from "../../../services/event-bus-service.js"
export class MailCompose extends React.Component {

    state = {
        email: {
            to: '',
            subject:'',
            body:''
        }
    }

    handleChange=({target})=>{
        const field = target.name
        const value = target.value
        this.setState((prevState)=>({email:{...prevState.email,[field]:value}}))
    }

    onSend=(ev) => {
        ev.preventDefault()
        eventBusService.emit('add',this.state.email)
        console.log('email sent', this.state.email)
    }


    render() {

        const { to, subject, body } = this.state

        return (
            <section className="mail-compose">

                <header className="flex space-between"><span>New Message</span><button>X</button></header>

                <div className="info-container">

                    <form className="form-container flex column" onSubmit={this.onSend}>

                        <input onChange={this.handleChange} type="email" id="to" name="to" value={to} placeholder="To:" required />

                        <input onChange={this.handleChange} type="text" id="subject" name="subject" value={subject} placeholder="Subject" required />


                        <div className="body-area">
                            <textarea onChange={this.handleChange} name="body" id="body" required></textarea>
                        </div>

                        <button>Send</button>
                    </form>

                </div>
            </section>
        )
    }
}