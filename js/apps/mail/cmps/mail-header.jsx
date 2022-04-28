
export class MailHeader extends React.Component {

    state = {
        txt: ''
    }

    handleChange=({target:{value}})=>{
        this.setState({txt:value},()=>{ 
            this.props.onSearch('txt',this.state.txt)
        })
        
    }


    render () {

        const {txt} = this.state

        return <header className="mini-header mail-header">

            <form onSubmit={this.onSearchEmail} className="mail-search-container">
            
            <input onChange={this.handleChange} type="search" name="search" id="search" value={txt} placeholder="Search Mail"/>
            
            </form>
        </header>
    }
} 