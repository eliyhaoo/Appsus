import { utilService } from '../../../services/util-service.js'
import { storageService } from '../../../storage-service.js'

export const keepService = {
    query,
    getById,
    remove
}


const KEY = 'notesDB'
const gNoteTypes = ['note-img', 'note-txt', 'note-todos'] // later implement , 'note-video'

function query() {
    let notes = _loadFromStorage()
    if (!notes) {
        notes = _createNotes()
        _saveToStorage(notes)
    }
    return Promise.resolve(notes)
}


function getById(noteId) {
    const notes = _loadFromStorage()
    const note = notes.find(note => noteId === note.id)
    return Promise.resolve(note)
}




function remove(noteId) {
    let notes = _loadFromStorage()
    notes = notes.filter(note => note.id !== noteId)
    _saveToStorage(notes)
    return Promise.resolve()
}

function add(type) {
    let notes = _loadFromStorage()
    const note = _createNote(type)
    notes = [note, ...notes]
    _saveToStorage(notes)
    return Promise.resolve()

}




function _createNotes() {
    const notes = []
    for (let i = 0; i < 10; i++) {
        const type = gNoteTypes[utilService.getRandomIntInclusive(0, gNoteTypes.length - 1)]
            // const type = gNoteTypes[1]
        notes.push(_createNote(type))
    }
    return notes
}






function _saveToStorage(notes) {
    storageService.saveToStorage(KEY, notes)
}

function _loadFromStorage() {
    return storageService.loadFromStorage(KEY)
}