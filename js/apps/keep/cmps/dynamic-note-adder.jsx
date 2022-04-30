import { AddNoteTxt } from "../dynamic-inputs/add-note-txt.jsx"
import { AddNoteImg } from "../dynamic-inputs/add-note-img.jsx"
import { AddNoteTodos } from "../dynamic-inputs/add-note-todos.jsx"
import { AddNoteVideo } from "../dynamic-inputs/add-note-video.jsx"

export function DynamicNoteAdder(props) {

    switch (props.type) {
        case 'note-txt':
            return <AddNoteTxt {...props} />

        case 'note-img':
            return <AddNoteImg {...props} />

        case 'note-todos':
            return <AddNoteTodos {...props} />
        
        case 'note-video':
            return <AddNoteVideo {...props}/>
    }
}