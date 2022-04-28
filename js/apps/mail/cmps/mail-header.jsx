
export class MailHeader extends React.Component {

    state = {
        txt: '',
        criteria: {
            status: 'inbox',
            txt: '', // no need to support complex text search 
            // isRead: true, // (optional property, if missing: show all)
            // isStared: true, // (optional property, if missing: show all)
            // lables: ['important', 'romantic'], // has any of the labels }

        }
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