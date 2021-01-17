import React from 'react'
import PropTypes from 'prop-types'
import styles from './Filter.module.css'

const Filter = ({ value, filter }) => (
    <div className={styles.Container}>
        <label>
            Find contacts by Name
            <br />
            <input
                type="text"
                value={value}
                onChange={filter}
                className={styles.FilterInput}
            />
        </label>

        {/* <ul>
            {filteredElements.map((contact) => (
                <li key={contact.id}>
                    {contact.name} : {contact.number}
                </li>
            ))}
        </ul> */}
    </div>
)

Filter.propTypes = {}

export default Filter
