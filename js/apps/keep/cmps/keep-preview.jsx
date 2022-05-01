import { eventBusService } from '../../../services/event-bus-service.js'

import { NoteImg } from './note-img.jsx'
import { NoteTodos } from './note-todos.jsx'
import { NoteTxt } from './note-txt.jsx'
import { NoteVideo } from './note-video.jsx'
import { BgColorInput } from '../dynamic-inputs/bg-color-input.jsx'
export class KeepPreview extends React.Component {
        state = {
                note: null,
                bgColorSelector: {
                        isShown: false
                }
        }

        componentDidMount() {
                this.setState({ note: this.props.note })

        }

        handleStyleChange = (field, value) => {
                const { type } = this.state.note
                const { note } = this.state
                this.setState((prevState) => ({ note: { ...prevState.note, style: { [field]: value } } }), () => {
                        this.props.save(type, note)
                })

        }

        togglePalette = () => {

                let { isShown } = this.state.bgColorSelector
                this.setState(() => ({ bgColorSelector: { isShown: !isShown } }))
        }

        render() {
                const { note } = this.state

                const { isShown } = this.state.bgColorSelector
                if (!note) return <React.Fragment></React.Fragment>
                const { style } = this.state.note

                return <section style={style} className={`keep-preview flex ${note.type}`} >
                        <DynamicNoteCmp note={note} />
                        {!isShown && <div className="control-box flex">
                                <button className="btn bg-color-btn" onClick={this.togglePalette} ></button>

                                <button className="btn delete-btn" onClick={() => { this.props.remove(note.id) }}  ></button>
                        </div>}

                        {isShown && <BgColorInput togglePalette={this.togglePalette} handleStyleChange={this.handleStyleChange} />}
                </section>
        }
}


function DynamicNoteCmp(props) {
        switch (props.note.type) {
                case 'note-txt':
                        return <NoteTxt {...props} />
                case 'note-img':
                        return <NoteImg {...props} />
                case 'note-todos':
                        return <NoteTodos {...props} />
                case 'note-video':
                        return <NoteVideo {...props} />
        }
}
