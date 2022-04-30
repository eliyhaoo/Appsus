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

function add(type, note) {

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
        case 'note-video':
            return _createNoteVideo(note)
        case 'note-todos':
            return _createNoteTodos(note)

    }
}

function _createNoteTodos(note) {

    return {
        id: utilService.makeId(5),
        type: "note-todos",
        info: {
            label: note.title,
            todos: _getTodos(note.txt)
        }
    }
}

function _getTodos(txt) {

    const listItem = txt.split(',')
    return listItem.map(todo => {
        return {
            txt: todo,
            doneAt: null
        }
    })
}

function _createNoteTxt(note) {

    return {
        id: utilService.makeId(5),
        type: "note-txt",
        isPinned: false,
        info: {
            txt: note.txt
        }
    }
}

function _createNoteVideo(note) {

    return {
        id: utilService.makeId(5),
        type: "note-video",
        info: {
            url: _getVideoId(note.url),
            title: note.title,
        },
        style: {
            backgroundColor: "#00d"
        }
    }
}

function _getVideoId(url) {
    let splitUrl = url.split('=')
    return splitUrl[1]
}

function _createNoteImg(note) {
    // if (!note.url) note.url = `../../../../assets/img/${utilService.getRandomIntInclusive(1,6)}.jpg`
    return {
        id: utilService.makeId(5),
        type: "note-img",
        info: {
            url: note.url, // try and make a function to get an image and title from a list of imgs 
            title: note.title,
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