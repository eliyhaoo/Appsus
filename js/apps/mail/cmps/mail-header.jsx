
export class MailHeader extends React.Component {

    state = {
        txt: '',
        filter: 'all'
    }

    handleChange=({target})=>{
        const field = target.name
        const value = target.type !== 'select-one' ? target.value: target.value === 'true' ? true: target.value === 'false' ? false :target.value
        this.setState((prevState)=>({...prevState,[field]:value}),()=>{ 
            this.props.onSearch(this.state)
        })
        
    }


    render () {

        const {txt} = this.state

        return <header className="mini-header mail-header">

            <form onSubmit={this.onSearchEmail} className="mail-search-container">
            
            <input onChange={this.handleChange} name="txt" type="search"  value={txt} placeholder="Search Mail"/>
            <select onChange={this.handleChange} name="filter" >
                <option value="all">All</option>
                <option value={true}>Read</option>
                <option value={false}>Unread</option>
            </select>
            
            </form>
        </header>
    }
} 