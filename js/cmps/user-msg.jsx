import {eventBusService} from '../services/event-bus-service.js'

export class UserMsg extends React.Component{

    state = {
        msg: null
    }

    removeEvent;
    timeoutId;

    componentDidMount() { 
        this.removeEvent = eventBusService.on('user-msg', (msg) => {
            this.setState({msg})
            if(this.timeoutId) clearTimeout(timeoutId)
            this.timeoutId = setTimeout(this.onCloseMsg, 2000)
        })
     }

     componentWillUnmount() {
         this.removeEvent()
      }

      onCloseMsg = () => {
          this.setState({msg: null})
          clearTimeout(this.timeoutId)
      }

    render(){
        
        return <div className={`user-msg ${msg.type}`}>
                {msg.txt}
                <button onClick={this.onCloseMsg}>X</button>
        </div>
    }
}