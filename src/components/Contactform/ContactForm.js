import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from './ContactForm.module.css'
import shortid from 'shortid'
import { Notification } from 'react-pnotify'

export default class ContactForm extends Component {
    static defaultProps = { addContact: '' }
    static propTypes = {}

    state = {
        name: '',
        number: '',
        alert: false,
    }

    handleContact = (event) => {
        const { name, value } = event.currentTarget
        this.setState({
            [name]: value,
        })
    }

    addContact = (event) => {
        event.preventDefault()
        if (this.checkContact()) {
            return
        } else {
            const contact = {
                id: shortid.generate(),
                name: this.state.name,
                number: this.state.number,
            }
            this.props.contacts.unshift(contact)
            this.props.refreshState(this.props.contacts)
            this.clearInput()
        }
    }
    checkContact = () => {
        if (this.props.contacts.length == 0) {
            return
        } else if (
            this.props.contacts.find((contact) => {
                return (
                    contact.name.toLowerCase() === this.state.name.toLowerCase()
                )
            })
        ) {
            this.setState({ alert: true })
            return true
        }
    }

    clearInput = () => {
        this.setState({ name: '', number: '' })
    }

    alertState = () => {
        this.setState({ alert: false })
    }

    alert = false
    render() {
        const sameContact = this.state.name
        return (
            <div className={styles.Container}>
                <form>
                    <label>
                        Name <br />
                        <input
                            type="text"
                            value={this.state.name}
                            name="name"
                            onChange={this.handleContact}
                        />
                    </label>
                    <br />
                    <label>
                        Number <br />
                        <input
                            type="text"
                            value={this.state.number}
                            name="number"
                            onChange={this.handleContact}
                        />
                    </label>
                </form>
                <button type="button" onClick={this.addContact}>
                    Add contact
                </button>
                {this.state.alert && (
                    <div className={styles.Notification}>
                        <h2>{sameContact} is already in contacts</h2>
                        <h3>Please check name and try again</h3>
                        <button type="button" onClick={this.alertState}>
                            Close Notification
                        </button>
                    </div>
                )}
            </div>
        )
    }
}

// ---------------------------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------------------------
// export default function ContactForm({
//     name,
//     handleContact,
//     addContact,
//     contacts,
//     number,
//     filteredElements,
// }) {
//     return (
//         <div className={styles.Container}>
//             {/* <h3 className={styles.InputName}>Name</h3> */}
//             <form>
//                 <label>
//                     Name <br />
//                     <input
//                         type="text"
//                         value={name}
//                         name="name"
//                         onChange={handleContact}
//                         // onSubmit={addContact}
//                     />
//                 </label>
//                 <br />
//                 <label>
//                     Number <br />
//                     <input
//                         type="text"
//                         value={number}
//                         name="number"
//                         onChange={handleContact}
//                     />
//                 </label>
//             </form>
//             <button type="button" onClick={addContact}>
//                 Add contact
//             </button>
//             <h1>Contacts</h1>
//             <ul>
//                 {contacts.map((contact) => (
//                     <li key={contact.id}>
//                         {contact.name} : {contact.number}
//                     </li>
//                 ))}
//             </ul>
//             {/* <br />
//             <label>
//                 Find contacts by Name
//                 <br />
//                 <input
//                     type="text"
//                     value={number}
//                     name="number"
//                     onChange={handleContact}
//                 />
//             </label> */}
//         </div>
//     )
// }

// ContactForm.propTypes = {
//     contacts: PropTypes.array.isRequired,
// }
