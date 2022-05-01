import { utilService } from '../../../services/util-service.js'
import { storageService } from '../../../services/storage-service.js'


export const mailService = {

    query,
    getEmailById,
    remove,
    trash,
    add,
    updateEmail,
    readToggle,
    starToggle,
    getEmailCount

}

const KEY = 'emailsDB'

const loggedinUser = {
    email: 'yaronb@appsus.com', fullname: 'Yaron Biton'
}


function query(criteria) {

    let emails = _loadFromStorage()
    console.log('emaillllls,',emails);
    if (!emails || !emails.length) {
        emails = _createEmails()
        _saveToStorage(emails)
    }

    if (criteria) {
        console.log('creit',criteria);
        let { status, txt ,filter} = criteria
        emails = emails.filter(email => {
            
            return status==='stared' && email.isStar || (status === 'inbox' && !email.sentAt && !email.isInTrash ||
            status === 'sent' && email.sentAt && !email.isInTrash ||
            status === 'trash' && email.isInTrash )
            
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

function readToggle(id){
    let isRead = null
    let emails = _loadFromStorage()
    emails = emails.filter(email => {
       if (email.id === id){
           const updatedMail = email
           updatedMail.isRead = !updatedMail.isRead
           isRead = updatedMail.isRead
           return updatedMail
       }
       return email
    })
   
    _saveToStorage(emails)
    return Promise.resolve(isRead)
    
}

function starToggle(id){
    let emails = _loadFromStorage()
    emails = emails.filter(email => {
       if (email.id === id){
           const updatedMail = email
           updatedMail.isStar = !updatedMail.isStar
           return updatedMail
       }
       return email
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

function getEmailCount(){

    const emails = _loadFromStorage()
        let unread =0
        let total= 0
         emails.forEach(email=>{
            if (!email.isRead) unread++
            if (email.receivedAt && !email.isInTrash) total++
        })
        return Promise.resolve({unread,total})
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



function _createEmails() {
    const test = [
        _createEmail('Weclome to Netflix', null, 'Netflix@netflix.com', 'Thank you for joining!'),
        _createEmail('Snuggle under clouds.. 💤', null, 'Cuddledown@google.com', '“Fluffier than clouds (well, maybe), and cosier than pretty much anything Our snuggly, lightweight down duvet is all youll be dreaming about.'),
        _createEmail('Hi from Julie', null, 'Julie@nJulie.com', 'Thank you for the help last year!'),
        _createEmail('Introducing Shapes — Mapping user journeys just got easier', null, 'ZeplinCrew@nzepplinn.com', 'Earlier this year, we launched Flows to make building user flows easier. You told us you love the snap connectors and locked screens. This month, we made Flows even better! Now, you have the ability to show conditional flows, alternate branches, and actions in Zeplin. Read more about our April product updates, including: Shapes.'),
        _createEmail('Win up to 549 BUSD!', null, 'Binance@binnace.com', 'Send at least 0.01 BUSD/USDT to your friend to win up to 777 BUSD now!   Competition Period: 2022-04-20 00:00 AM to 2022-05-08 11:59 PM (UTC) Send at least 0.01 BUSD/USDT to a Binance friend by entering their phone number, email address or pay ID and you will receive a BUSD reward of up to 777 BUSD.'),
        _createEmail('10 new jobs! for Full-Stack Developer', null, 'Linkdin-jobalerts@linkedin.com>', 'Your job alert for full-stack 10 new jobs in Tel-aviv, Central, Israel matches your preferences.   © 2022 LinkedIn Ireland Unlimited Company, Wilton Plaza, Wilton Place, Dublin 2. LinkedIn is a registered business name of LinkedIn Ireland Unlimited Company. LinkedIn and the LinkedIn logo are registered trademarks of LinkedIn.'),
        _createEmail('Hi from Julie', null, 'Julie@nJulie.com', 'Thank you for the help last year!'),
        _createEmail('Weclome to Netflix', null, 'Netflix@netflix.com', 'Thank you for joining!'),
        _createEmail('[Update] Changes to the Google Cloud PlatformHi from Julie', null, 'googleCloud@google.com', 'We are sending this message to let you know about the following update to the Google Cloud Platform Subprocessors list'),
        _createEmail('Win up to 0.5 BTC!', null, 'Binance@binnace.com', 'Send at least 0.01 BUSD/USDT to your friend to win up to 777 BUSD now!   Competition Period: 2022-04-20 00:00 AM to 2022-05-08 11:59 PM (UTC) Send at least 0.01 BUSD/USDT to a Binance friend by entering their phone number, email address or pay ID and you will receive a BUSD reward of up to 777 BUSD.'),
        _createEmail('Warm Regards from Patrik,', null, 'partik@pat.com', 'Thank you for the help last year!'),
        _createEmail('Your account details', null, 'apple@apple.com', 'Introducing info on the go for our best clients, check out our newest website now'),
        _createEmail('👀 Looking for something really special?', null, 'ebay@reply5.ebay.com', 'People like eBay for its unique selection  Be inspired by the treasures people find Discover it'),
        _createEmail('Introducing Shapes — Mapping user journeys just got easier', null, 'ZeplinCrew@nzepplinn.com', 'Earlier this year, we launched Flows to make building user flows easier. You told us you love the snap connectors and locked screens. This month, we made Flows even better! Now, you have the ability to show conditional flows, alternate branches, and actions in Zeplin. Read more about our April product updates, including: Shapes.'),
        _createEmail('25 new jobs IN TEL AVIV! join Full-Stack NOW ', null, 'Linkdin-jobalerts@linkedin.com>', 'Your job alert for full-stack 10 new jobs in Tel-aviv, Central, Israel matches your preferences.   © 2022 LinkedIn Ireland Unlimited Company, Wilton Plaza, Wilton Place, Dublin 2. LinkedIn is a registered business name of LinkedIn Ireland Unlimited Company. LinkedIn and the LinkedIn logo are registered trademarks of LinkedIn.'),
        _createEmail('[Update] Changes to the Google Cloud PlatformHi from Julie', null, 'googleCloud@google.com', 'We are sending this message to let you know about the following update to the Google Cloud Platform Subprocessors list'),
        _createEmail('Sending you my love', null, 'googleCloud@google.com', 'We are sending this message to let you know about the following update to the Google Cloud Platform Subprocessors list'),
        _createEmail('Win up to 317 ETHER!', null, 'Binance@binnace.com', 'Send at least 0.01 BUSD/USDT to your friend to win up to 777 BUSD now!   Competition Period: 2022-04-20 00:00 AM to 2022-05-08 11:59 PM (UTC) Send at least 0.01 BUSD/USDT to a Binance friend by entering their phone number, email address or pay ID and you will receive a BUSD reward of up to 777 BUSD.'),
        _createEmail('New release from Music For Dreams', null, 'Bandcamp@google.com', '“If you like Laid Back and Yello - this might be for you...Anders Ponsaing and Michael Rune have got together and made the duo Subnesia. Make sure your hips are ready to shake and do vertical hip thrusters like never before, cause here comes Subnesia with the groovy tune Simple Life.Mixing a shoulder pumping groove with a soulful trombone Subnesia has got you covered with Simple Life for any good moment that needs some extra magic dust.”'),
        _createEmail('Hello, Looong Weekend 💤', null, 'Cuddledown@google.com', '“Breezy does it.. The nights are getting warmer; your bedding should be getting cooler.Feel the breeze with and relax under the wonderfully casual looking (and feeling) French linen.'),
        _createEmail('You Have Earned $1.33 with Nexo!', null, 'NexoCommunity@gkegle.com', 'We are sending this message to let you knowSummary of your weekly earned interestBelow is a breakdown of what you earned this week(April 18, 2022 - April 24, 2022)  Note: The figures above are calculated based on the market price of each asset at the time it was paid into your Nexo account.'),
        _createEmail('25 new jobs IN TEL AVIV! join Full-Stack NOW ', null, 'Linkdin-jobalerts@linkedin.com>', 'Your job alert for full-stack 10 new jobs in Tel-aviv, Central, Israel matches your preferences.   © 2022 LinkedIn Ireland Unlimited Company, Wilton Plaza, Wilton Place, Dublin 2. LinkedIn is a registered business name of LinkedIn Ireland Unlimited Company. LinkedIn and the LinkedIn logo are registered trademarks of LinkedIn.'),
        _createEmail('Win up to 657 BUSD!', null, 'Binance@binnace.com', 'Send at least 0.01 BUSD/USDT to your friend to win up to 777 BUSD now!   Competition Period: 2022-04-20 00:00 AM to 2022-05-08 11:59 PM (UTC) Send at least 0.01 BUSD/USDT to a Binance friend by entering their phone number, email address or pay ID and you will receive a BUSD reward of up to 777 BUSD.'),
        _createEmail('New Video: Avoid These 5 Common Mixing Mistakes', null, 'Unison@unison.audio', 'Hey Eli, just dropped a new YT tutorial. In this one, Aaron (better known as X&G with releases on OWSLA/Dim Mak and has 15+ million plays)... Reveals the 5 common mixing mistakes you might be making now.'),
        _createEmail('Win up to 777 BUSD!', null, 'Binance@binnace.com', 'Send at least 0.01 BUSD/USDT to your friend to win up to 777 BUSD now!   Competition Period: 2022-04-20 00:00 AM to 2022-05-08 11:59 PM (UTC) Send at least 0.01 BUSD/USDT to a Binance friend by entering their phone number, email address or pay ID and you will receive a BUSD reward of up to 777 BUSD.'),
        _createEmail('Weclome to Netflix', null, 'Netflix@netflix.com', 'Thank you for joining!'),
        _createSentEmail('Testing Emails', "shlomi@shlomit.com"),
    
    ]

    return test
}

function _createEmail(subject, sentAt = (Date.now()), from, body = 'Would love to catch up sometimes', to = this.loggedinUser.email) {
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
        isInTrash: false,
        isStar: Math.random() > 0.7 ? false : true
    }

}

function _createSentEmail(subject, to, body = 'Would love to catch up sometimes') {
    return {
        id: utilService.makeId(5),
        subject,
        body,
        isRead:  false ,
        sentAt: Date.now(),
        receivedAt: null,
        to,
        from: this.loggedinUser.email,
        isShowen: false,
        isInTrash: false,
        isStar: false
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