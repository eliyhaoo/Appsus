import { storageService } from '../../../storage-service.js'
import { utilService } from '../../../services/util-service.js'
import { demoService } from './keep.demo.service.js'

export const keepService = {
    query,
    getById,
    remove,
    add
}

const KEY = 'notesDB'

function query() {
    let notes = _loadFromStorage()
    if (!notes) {
        notes = demoService.createDemoNotes(15)
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

function add({ type, note }) {

    let notes = _loadFromStorage()
    const currNote = _createNote(type, note)
    notes = [currNote, ...notes]
    _saveToStorage(notes)
    return Promise.resolve()

}

function _createNote(currType, note) {

    switch (currType) {
        case 'note-txt':
            return _createNoteTxt(note)
        case 'note-img':
            return _createNoteImg(note)
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

// function _createNoteTodos({info}){
//     const {txt, doneAt} = info
//     const listItem = txt.split(',')
//     const todoList = listItem.map(todo=> {
//         return {
//             txt: todo,
//             doneAt: null
//         }
//     })
//     return {
//         id: utilService.makeId(5),
//         type: "note-todos",
//         info: {
//             label: "Get my stuff together",
//             todos: [
//                 { txt: "Driving license", doneAt: null },
//                 { txt: "Coding power", doneAt: utilService.getFormatedTime(Date.now() - (60000 * 60)) }
//             ]
//         }
//     }
// }





function _createNoteTxt({ txt }) {
    if (!txt) txt = 'Fun in the Sun!'
    return {
        id: utilService.makeId(5),
        type: "note-txt",
        isPinned: false,
        info: {
            txt
        }
    }
}

function _createNoteImg({ title, url }) {
    if (!title) title = "Awesome Pic"
    if (!url) url = `../../../../assets/img/${utilService.getRandomIntInclusive(1,6)}.jpg`
    return {
        id: utilService.makeId(5),
        type: "note-img",
        info: {
            url, // try and make a function to get an image and title from a list of imgs 
            title,
        },
        style: {
            backgroundColor: "#00d"
        }
    }
}

function _saveToStorage(notes) {
    storageService.saveToStorage(KEY, notes)
}

function _loadFromStorage() {
    return storageService.loadFromStorage(KEY)
}