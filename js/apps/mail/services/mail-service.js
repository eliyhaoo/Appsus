import { utilService } from '../../../services/util-service.js'
import { storageService } from '../../../services/storage-service.js'


export const mailService = {

    query,
    getEmailById,
    remove,
    trash,
    add,
    updateEmail

}

const KEY = 'emailsDB'

const loggedinUser = {
    email: 'yaronb@appsus.com', fullname: 'Yaron Biton'
}


function query(criteria) {

    let emails = _loadFromStorage()

    if (!emails || !emails.length) {
        emails = _createEmails()
        _saveToStorage(emails)
    }

    if (criteria) {
        console.log('creit',criteria);
        let { status, txt ,filter} = criteria
        emails = emails.filter(email => {
            return status === 'inbox' && !email.sentAt && !email.isInTrash ||
            status === 'sent' && email.sentAt && !email.isInTrash ||
            status === 'trash' && email.isInTrash 
            
        })
        if (txt){
            let searchedTerm = txt.toLowerCase()
            emails = _filterByText(emails, searchedTerm)
        }
        if (filter !== 'all'){
           emails = _filterRead(emails,filter)
        }
    }
    return Promise.resolve(emails)
}

function _filterByText(emails, term) {
    return emails.filter(email =>
        email.subject.toLowerCase().includes(term) ||
        email.body.toLowerCase().includes(term) ||
        email.from.split('@').splice(0, 1).toString().toLowerCase().includes(term) ||
        email.to.split('@').splice(0, 1).toString().toLowerCase().includes(term)
    )
}

function _filterRead(emails,isRead){
    return emails.filter(email=> email.isRead === isRead)
    
}


function getEmailById(emailId) {
    const emails = _loadFromStorage()
    const email = emails.find(email => emailId === email.id)
    return Promise.resolve(email)
}

function remove(id) {
    let emails = _loadFromStorage()
    emails = emails.filter(email => email.id !== id)
    _saveToStorage(emails)
    return Promise.resolve()

}

function add(emailDetails) {
    const { subject, to, body } = emailDetails
    const newEmail = _createSentEmail(subject, to, body)
    let emails = _loadFromStorage()
    emails.unshift(newEmail)
    _saveToStorage(emails)
    return Promise.resolve()
}

function trash(id) {
    let emails = _loadFromStorage()
    emails = emails.map(email => {
        if (email.id === id) {
            const removedEmail = email
            removedEmail.isInTrash = true
            return removedEmail
        } return email
    })
    _saveToStorage(emails)
    return Promise.resolve()
}


function updateEmail(updatedMail) {
    let emails= _loadFromStorage()
    emails =emails.map(email => email.id === updatedMail.id ? updatedMail : email)
    _saveToStorage(emails)
    return Promise.resolve()
}



function _createEmails() {
    const test = [
        _createEmail('Weclome to Netflix', null, 'Netflix@netflix.com', 'Thank you for joining!'),
        _createEmail('Hi from Julie', null, 'Julie@nJulie.com', 'Thank you for the help last year!'),
        _createEmail('Introducing Shapes — Mapping user journeys just got easier', null, 'ZeplinCrew@nzepplinn.com', 'Earlier this year, we launched Flows to make building user flows easier. You told us you love the snap connectors and locked screens. This month, we made Flows even better! Now, you have the ability to show conditional flows, alternate branches, and actions in Zeplin. Read more about our April product updates, including: Shapes.'),
        _createEmail('Hi from Julie', null, 'Julie@nJulie.com', 'Thank you for the help last year!'),
        _createEmail('Weclome to Netflix', null, 'Netflix@netflix.com', 'Thank you for joining!'),
        _createEmail('[Update] Changes to the Google Cloud PlatformHi from Julie', null, 'googleCloud@google.com', 'We are sending this message to let you know about the following update to the Google Cloud Platform Subprocessors list'),
        _createEmail('Your account details', null, 'apple@apple.com', 'Introducing info on the go for our best clients, check out our newest website now'),
        _createEmail('👀 Looking for something really special?', null, 'ebay@reply5.ebay.com', 'People like eBay for its unique selection  Be inspired by the treasures people find Discover it'),
        _createEmail('Introducing Shapes — Mapping user journeys just got easier', null, 'ZeplinCrew@nzepplinn.com', 'Earlier this year, we launched Flows to make building user flows easier. You told us you love the snap connectors and locked screens. This month, we made Flows even better! Now, you have the ability to show conditional flows, alternate branches, and actions in Zeplin. Read more about our April product updates, including: Shapes.'),
        _createEmail('Weclome to Netflix', null, 'Netflix@netflix.com', 'Thank you for joining!'),
        _createEmail('[Update] Changes to the Google Cloud PlatformHi from Julie', null, 'googleCloud@google.com', 'We are sending this message to let you know about the following update to the Google Cloud Platform Subprocessors list'),
        _createEmail('Sending you my love', null, 'googleCloud@google.com', 'We are sending this message to let you know about the following update to the Google Cloud Platform Subprocessors list'),
        _createSentEmail('Testing Emails', "shlomi@shlomit.com"),
        _createSentEmail('Testing Emails', "shlomi@shlomit.com"),
        _createSentEmail('Testing Emails', "shlomi@shlomit.com"),
    ]

    return test
}

function _createEmail(subject, sentAt = (Date.now()), from, body = 'Would love to catch up sometimes', to = 'yaronb@appsus.com') {
    return {
        id: utilService.makeId(5),
        subject,
        body,
        isRead: Math.random() > 0.2 ? false : true,
        sentAt,
        receivedAt: (Date.now() - (utilService.getRandomIntInclusive(500000, 500000000))),
        to,
        from,
        isShowen: false,
        isInTrash: false
    }

}

function _createSentEmail(subject, to, body = 'Would love to catch up sometimes') {
    return {
        id: utilService.makeId(5),
        subject,
        body,
        isRead: Math.random() > 0.2 ? false : true,
        sentAt: Date.now(),
        receivedAt: null,
        to,
        from: 'yaronb@appsus.com',
        isShowen: false,
        isInTrash: false
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