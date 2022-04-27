
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

                <label htmlFor="body"></label>
                <textarea name="body" id="body" cols="300" rows="50"></textarea>

                </form>

            </section>
        )
    }
}