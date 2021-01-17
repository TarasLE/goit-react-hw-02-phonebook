import React from 'react'
import PropTypes from 'prop-types'

export default function ContactList({ contacts }) {
    return (
        <div>
            <ul>
                {contacts.map((contact) => (
                    <li key={contact.id}>
                        {contact.name} : {contact.number}
                    </li>
                ))}
            </ul>
        </div>
    )
}

ContactList.propTypes = {}
