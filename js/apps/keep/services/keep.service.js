import { storageService } from '../../../storage-service.js'
import { utilService } from '../../../services/util-service.js'

export const keepService = {
    query,
    getById,
    remove,
    add
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

function add({ type, txt }) {
    console.log('hello from service', type, 'and txt', txt);
    let notes = _loadFromStorage()
    const note = _createNote(type, txt)
    notes = [note, ...notes]
    _saveToStorage(notes)
    return Promise.resolve()

}

function _createNote(currType, txt = "Fullstack Me Baby!", url = `../../../../assets/img/${utilService.getRandomIntInclusive(1,6)}.jpg`) {

    switch (currType) {
        case 'note-txt':
            return _createNoteTxt(txt)
        case 'note-img':
            return {
                id: utilService.makeId(5),
                type: "note-img",
                info: {
                    url, // try and make a function to get an image and title from a list of imgs 
                    title: "Bobi and Me"
                },
                style: {
                    backgroundColor: "#00d"
                }
            }
        case 'note-todos':
            return {
                id: utilService.makeId(5),
                type: "note-todos",
                info: {
                    label: "Get my stuff together",
                    todos: [
                        { txt: "Driving license", doneAt: null },
                        { txt: "Coding power", doneAt: utilService.getFormatedTime(Date.now() - (60000 * 60)) }
                    ]
                }
            }

    }

}

function _createNoteTxt(txt = "Fullstack Me Baby!") {
    return {
        id: utilService.makeId(5),
        type: "note-txt",
        isPinned: false,
        info: {
            txt
        }
    }
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