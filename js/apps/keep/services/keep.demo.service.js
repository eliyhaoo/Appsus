import { utilService } from '../../../services/util-service.js'

export const demoService = {
    createDemoNotes
}

const gImgCount = 6
const gNoteTypes = ['note-img', 'note-txt', 'note-todos'] // after getting API add: 'note-video'

function createDemoNotes(num = 10) {
    const notes = []
    for (let i = 0; i < num; i++) {
        const type = gNoteTypes[utilService.getRandomIntInclusive(0, gNoteTypes.length - 1)]
        notes.push(_createNote(type))
    }
    return notes
}

function _createNote(noteType) {

    switch (noteType) {
        case 'note-txt':
            return _createNoteTxt()
        case 'note-img':
            return _createNoteImg()
        case 'note-todos':
            return _createNoteTodos()
        case 'note-video':
            return _createNoteVideo()
    }
}

function _createNoteTxt() {
    return {
        id: utilService.makeId(),
        type: 'note-txt',
        isPinned: Math.random() > 0.2 ? false : true,
        info: {
            txt: utilService.makeLorem(8)
        }
    }
}

function _createNoteImg() {
    return {
        id: utilService.makeId(),
        type: 'note-img',
        info: {
            url: _getImgUrls(),
            title: ''
        },
        style: {
            backgroundColor: '#00d'
        }
    }
}

function _getImgUrls() {
    const imgUrls = [
        'https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg',
        'https://images.pexels.com/photos/10931575/pexels-photo-10931575.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        'https://images.pexels.com/photos/11446968/pexels-photo-11446968.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        'https://images.pexels.com/photos/11395820/pexels-photo-11395820.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        'https://images.pexels.com/photos/4460483/pexels-photo-4460483.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        'https://images.pexels.com/photos/5206261/pexels-photo-5206261.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        'https://images.pexels.com/photos/6481652/pexels-photo-6481652.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        'https://images.pexels.com/photos/10990037/pexels-photo-10990037.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        'https://images.pexels.com/photos/7463099/pexels-photo-7463099.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        'https://images.pexels.com/photos/11689684/pexels-photo-11689684.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
    ]
    return imgUrls[utilService.getRandomIntInclusive(0, imgUrls.length - 1)]
}

function _createNoteTodos() {
    return {
        id: utilService.makeId(),
        type: 'note-todos',
        info: _getTodos()
    }
}

function _getTodos() {
    const todos = [{
            label: 'Get my stuff together',
            todos: [
                { txt: 'Driving liscence', doneAt: null },
                { txt: 'Coding power', doneAt: Date.now() }
            ]
        },
        {
            label: 'Learn Javascript',
            todos: [
                { txt: 'Go over Tommy\'s class video', doneAt: null },
                { txt: 'Learn what the f*** is React!', doneAt: Date.now() },
                { txt: 'Brush on CSS', doneAt: Date.now() },
            ]
        },
        {
            label: 'End global warming',
            todos: [
                { txt: 'Use less AC', doneAt: null },
                { txt: 'Try and cut down on electricity usage', doneAt: null },
                { txt: 'No PLASTIC!', doneAt: null },
            ]
        },
        {
            label: 'Goals',
            todos: [
                { txt: 'Invite my aunt to a movie', doneAt: null },
                { txt: 'Buy a new PC', doneAt: Date.now() },
                { txt: 'Finish the sprint', doneAt: Date.now() },
            ]
        },
        {
            label: 'Groceries',
            todos: [
                { txt: 'Milk 3%', doneAt: null },
                { txt: 'Bamia', doneAt: null },
                { txt: 'Chicken', doneAt: null },
                { txt: 'Butter', doneAt: null },
                { txt: 'Carrots', doneAt: null },
                { txt: 'Coffee', doneAt: null },
                { txt: 'Sugar', doneAt: Date.now() },
                { txt: 'Flour', doneAt: Date.now() },
                { txt: 'Olive oil', doneAt: Date.now() },
                { txt: 'Wine', doneAt: Date.now() },
            ]
        },
        {
            label: 'My bucket list!',
            todos: [
                { txt: 'See the aurora borealis', doneAt: null },
                { txt: 'Run a marathon', doneAt: Date.now() },
                { txt: 'Have a true moment of silence with myself', doneAt: Date.now() },
                { txt: 'Cook a meal for two generations of my offspring', doneAt: null },
                { txt: 'Create something that brings joy to people', doneAt: Date.now() },
            ]
        },
    ]
    return todos[utilService.getRandomIntInclusive(0, todos.length - 1)]
}

function _createNoteVideo() {
    return {
        id: utilService.makeId(),
        type: 'note-video',
        info: _getVideoUrl()
    }
}

function _getVideoUrl() {
    const videoUrls = [
        { url: 'Br3KkvgMAZY' },
        { url: 'wELOA2U7FPQ' },
        { url: '6hzrDeceEKc' },
        { url: 'IJ8i49EqgYI' },
        { url: 'hjpF8ukSrvk' }
    ]
    return videoUrls[utilService.getRandomIntInclusive(0, videoUrls.length - 1)]
}