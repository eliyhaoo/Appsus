import { utilService } from 'js/services/util-service.js'
import { storageService } from 'js/services/storage-service.js'

export const keepService = {
    query,
    getById
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
    const noteIdx = notes.findIndex(note => noteId === note.id)
    return Promise.resolve(note)
}




function _createNotes() {
    const notes = []
    for (let i = 0; i < 10; i++) {
        // const type = gNoteTypes[utilService.getRandomIntInclusive(0, gNoteTypes.length - 1)]
        const type = gNoteTypes[1]
        notes.push(_createNote(type))
    }
    return notes
}

function _createNote(currType) {

    switch (currType) {
        case 'note-txt':
            return {
                id: utilService.makeId(5),
                type: "note-txt",
                isPinned: (Math.random() > 0.5) ? true : false,
                info: {
                    txt: "Fullstack Me Baby!"
                }
            }
        case 'note-img':
            return {
                id: utilService.makeId(5),
                type: "note-img",
                info: {
                    url: "http://some-img/me", // try and make a function to get an image and title from a list of imgs 
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
                        { txt: "Coding power", doneAt: getFormatedTime(Date.now() - (60000 * 60)) }
                    ]
                }
            }

    }
}



function _saveToStorage(notes) {
    storageService.saveToStorage(KEY, notes)
}

function _loadFromStorage() {
    return storageService.loadFromStorage(KEY)
}