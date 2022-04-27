import { utilService } from 'js/services/util-service.js'
import { storageService } from 'js/services/storage-service.js'
export const keepService = {

}


const KEY = 'notesDB'
const gNoteTypes = ['note-img', 'note-txt', 'note-todos'] // later implement , 'note-video'


function createNotes() {
    const notes = []
    for (let i = 0; i < 10; i++) {
        const type = gNoteTypes[utilService.getRandomIntInclusive(0, gNoteTypes.length - 1)]


    }
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
                        { txt: "Coding power", doneAt: 187111111 }
                    ]
                }
            }

    }
    return {
        id: utilService.makeId(5),
        type,
        isPinned: (Math.random() > 0.5) ? true : false,
        info: {
            txt: utilService.makeLorem(8),

        },
        style: {
            backgroundColor: ''
        },
        info: {
            label: "Get my stuff together",
            todos: [
                { txt: "Driving license", doneAt: null },
                { txt: "Coding power", doneAt: 187111111 }
            ]
        }


    }
}

const notes = [{
        id: "n101",
        type: "note-txt",
        isPinned: true,
        info: {
            txt: "Fullstack Me Baby!"
        }
    },
    {
        id: "n102",
        type: "note-img",
        info: {
            url: "http://some-img/me",
            title: "Bobi and Me"
        },
        style: {
            backgroundColor: "#00d"
        }
    },
    {
        id: "n103",
        type: "note-todos",
        info: {
            label: "Get my stuff together",
            todos: [
                { txt: "Driving license", doneAt: null },
                { txt: "Coding power", doneAt: 187111111 }
            ]
        }
    }
]




function _saveToStorage(notes) {
    storageService.saveToStorage(KEY, notes)
}

function _loadFromStorage() {
    return storageService.loadFromStorage(KEY)
}