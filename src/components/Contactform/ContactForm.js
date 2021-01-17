import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from './ContactForm.module.css'
import shortid from 'shortid'

export default class ContactForm extends Component {
    static defaultProps = { addContact: '' }
    static propTypes = {}

    state = {
        name: '',
        number: '',
    }

    handleContact = (event) => {
        const { name, value } = event.currentTarget
        this.setState({
            [name]: value,
        })
        console.log('from contactform')
        console.log(this.state)
        this.props.contactData(this.state)
    }

    // clearInput = () => {
    //     this.setState({ name: '', number: '' })
    // }

    render() {
        const { addContact } = this.props
        return (
            <div className={styles.Container}>
                {/* <h3 className={styles.InputName}>Name</h3> */}
                <form>
                    <label>
                        Name <br />
                        <input
                            type="text"
                            value={this.state.name}
                            name="name"
                            onChange={this.handleContact}
                            // onSubmit={addContact}
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
                <button type="button" onClick={addContact}>
                    Add contact
                </button>
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
