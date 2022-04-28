
export class MailCompose extends React.Component{

    state= {
        email:{

        }
    }

    onEmailSend(){

    }


    render(){

        const {to,subject,body} = this.state

        return(
            <section className="mail-compose">

                <header>New Message</header>

                <form onSubmit={this.onEmailSend}>

                <label htmlFor="to">To</label>
                <input type="email" id="to" name="to" value={to} />

                <label htmlFor="subject">Subject</label>
                <input type="text" id="subject" name="subject" value={subject} />
                <div className="body-area">
                <label htmlFor="body"></label>
                <textarea name="body" id="body" ></textarea>

                </div>

                </form>

            </section>
        )
    }
}