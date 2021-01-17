import React, { Component } from 'react'
import shortid from 'shortid'
import ContactForm from './components/Contactform/ContactForm'
import ContactList from './components/ContactList/ContactList'
import Filter from './components/Filter/Filter'
import styles from './App.module.css'

export default class App extends Component {
    // constructor() {
    //     super()
    // state = {
    //     contacts: [
    //         { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    //         { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    //         { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    //         { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    //     ],
    //     filter: '',
    //     name: '',
    //     number: '',
    // }
    // }
    state = {
        contacts: [
            { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
            { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
            { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
            { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
        ],
        filter: '',
        // name: '',
        // number: '',
    }

    handleContact = (event) => {
        // console.log(this.state.name)
        // console.log('working handleContact')
        // console.log(event.currentTarget.value)
        const { name, value } = event.currentTarget
        this.setState({
            [name]: value,
        })
        console.log(this.state)
        console.log(this.normalizedFilter)
    }

    contactData = (data) => {
        console.log('from App')
        console.log(data)
        // const contact = {
        //     id: shortid.generate(),
        //     name: data.name,
        //     number: data.number,
        // }
        // console.log(contact)
        this.contactDataTemp = data
        return data
    }
    contactDataTemp = ''
    addContact = (event) => {
        // this.contactData
        console.log('this is dataTemp')
        console.log(this.contactDataTemp)

        event.preventDefault()
        // console.log('working addContact')
        // const contact = this.state.name

        const contact = {
            id: shortid.generate(),
            name: this.contactDataTemp.name,
            number: this.contactDataTemp.number,
        }
        // const contact = []
        // contact.push(this.state.name)
        console.log(contact)
        this.setState(({ contacts }) => ({ contacts: [contact, ...contacts] }))
        // this.state.contacts.push(contact)
        console.log(this.state.contacts)
        this.clearInput()
        // event.currentTarget.value = ''
    }

    clearInput = () => {
        this.setState({ name: '', number: '' })
    }

    contactFilter = (event) => {
        this.setState({ filter: event.currentTarget.value })
        console.log(this.state.filter)
        // console.log(this.filteredElements)

        // console.log(normalizedFilter)
        // const filteredElements = this.state.contacts.filter((contact) =>
        //     contact.name.toLowerCase().includes(normalizedFilter)
        // )

        // console.log(this.filteredElements)
    }
    // filteredElements = []
    // normalizedFilter = this.state.filter.toLowerCase()

    // filteredElements = this.state.contacts.filter((contact) =>
    //     contact.name.toLowerCase().includes(this.normalizedFilter)
    // )

    render() {
        const normalizedFilter = this.state.filter.toLowerCase()
        const filteredElements = this.state.contacts.filter((contact) =>
            contact.name.toLowerCase().includes(normalizedFilter)
        )
        return (
            <div className={styles.Container}>
                <h1>Phonebook</h1>
                {/* <ContactForm
                    name={this.state.name}
                    handleContact={this.handleContact}
                    addContact={this.addContact}
                    // contacts={this.state.contacts}
                    contacts={filteredElements}
                    number={this.state.number}
                    // filteredElements={this.filteredElements}
                /> */}
                <ContactForm
                    addContact={this.addContact}
                    contactData={this.contactData}
                />
                <h1>Contacts</h1>
                <ContactList contacts={filteredElements} />
                <Filter value={this.state.filter} filter={this.contactFilter} />
            </div>
        )
    }
}
