import { utilService } from '../../../services/util-service.js'
import { storageService } from '../../../services/storage-service.js'


export const mailService = {

    query,
    getEmailById,
    deleteEmail

}

const KEY = 'emailsDB'

const loggedinUser = {
    email: 'yaronb@appsus.com', fullname: 'Yaron Biton'
}


function query(filterby){

    let emails = _loadFromStorage() 

    if (!emails||!emails.length) {
        emails = _createEmails()
        _saveToStorage(emails)
    }

    return Promise.resolve(emails)

}

function getEmailById(emailId){
    const emails = _loadFromStorage()
    const email = emails.find(email => emailId === email.id)
    return Promise.resolve(email)
}

function deleteEmail(id){
    let emails= _loadFromStorage()
    emails =emails.filter(email=> email.id !== id)
    _saveToStorage(emails)
    return Promise.resolve()

}


function updateEmail(id,key,val){
    console.log();
}



function _createEmails() {
    return [_createEmail('Hi from Julie'),_createEmail('Welcome to AppSus'),
    _createEmail('Hi from Julie'),_createEmail('Hi from Julie'),_createEmail('Hi from Julie'),_createEmail('Hi from Julie'),
    _createEmail('Hi from Julie'),_createEmail('Hi from Julie'),_createEmail('Hi from Julie'),_createEmail('Hi from Julie')]

}

function _createEmail(subject, body = 'Would love to catch up sometimes', to = 'momo@momo.com' ,from='yaronb@appsus.com') {
    return {
        id: utilService.makeId(5),
        subject,
        body,
        isRead: Math.random() > 0.2 ? false : true,
        sentAt: Date.now() - (60 * 1000),
        to,
        from,
        isShowen:false
    }

}



const email = {
    id: 'e101',
    subject: 'Miss you!',
    body: 'Would love to catch up sometimes',
    isRead: false,
    sentAt: 1551133930594, to: 'momo@momo.com'
}





function _saveToStorage(emails) {
    storageService.saveToStorage(KEY, emails)
}

function _loadFromStorage() {
    return storageService.loadFromStorage(KEY)
}