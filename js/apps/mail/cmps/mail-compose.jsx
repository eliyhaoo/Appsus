
export class MailCompose extends React.Component {

    state = {
        email: {

        }
    }

    onEmailSend() {

    }


    render() {

        const { to, subject, body } = this.state

        return (
            <section className="mail-compose">

                <header><span>New Message</span></header>

                <div className="info-container">

                    <form className="form-container flex column" onSubmit={this.onEmailSend}>

                        <label htmlFor="to">To</label>
                        <input type="email" id="to" name="to" value={to} />

                        <label htmlFor="subject">Subject</label>
                        <input type="text" id="subject" name="subject" value={subject} />
                        <div className="body-area">
                            <label htmlFor="body"></label>
                            <textarea name="body" id="body" ></textarea>

                        </div>

                    </form>

                </div>
            </section>
        )
    }
}