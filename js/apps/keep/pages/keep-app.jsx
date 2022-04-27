import { KeepFilter } from "../cmps/keep-filter.jsx"
import { KeepList } from "../cmps/keep-list.jsx"


export class KeepApp extends React.Component{

    state = {
        notes: []
    }
    render(){
        return <section className="keep-app">
            
        <KeepFilter/>
        <KeepList/>
        </section>
    }
}