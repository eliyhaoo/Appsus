

export function DynamicNoteAdder({ note }) {

    switch (note.type) {
        case 'note-txt':
            return <NoteTxt note={note} />

        case 'note-img':
            return <NoteImg note={note} />

        case 'note-todos':
            return <NoteTodos note={note} />
    }
}