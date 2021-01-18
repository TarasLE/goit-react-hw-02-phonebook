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

    // refreshList = false

    // refreshContactsList = (state) => {
    //     this.refreshState = state
    //     console.log(state)
    //     return state
    // }

    // setState({ [type]:test})

    refreshContactsList = (state) => {
        this.setState({
            contacts: state,
        })
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
    // refreshState = false

    state = {
        contacts: [
            { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
            { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
            { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
            { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
        ],
        filter: '',
    }

    // addContact = (event) => {
    //     event.preventDefault()
    //     const contact = {
    //         id: shortid.generate(),
    //         name: this.contactDataTemp.name,
    //         number: this.contactDataTemp.number,
    //     }
    //     this.setState(({ contacts }) => ({ contacts: [contact, ...contacts] }))
    //     // this.clearInput()
    // }

    clearInput = () => {
        this.setState({ name: '', number: '' })
    }

    contactFilter = (event) => {
        this.setState({ filter: event.currentTarget.value })
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
                    contacts={this.state.contacts}
                    refreshStateAfter={this.refreshState}
                    refreshState={this.refreshContactsList}
                />
                <h1>Contacts</h1>
                <ContactList contacts={filteredElements} />
                <Filter value={this.state.filter} filter={this.contactFilter} />
            </div>
        )
    }
}
