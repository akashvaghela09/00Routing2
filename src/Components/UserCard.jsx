import React from  'react'
import { Link } from 'react-router-dom'
import styles from './User.module.css'

const UserCard = ({first_name, last_name, email, id, avatar, showLink=true}) =>{
    return (
        <div className={styles.card__div}>
            <div>
                <img src={avatar} alt={`profile${id}`}/>
            </div>
            <div>
                <h3>{first_name} {last_name}</h3>
                <h4>{email}</h4>
                <Link to={`/user/${id}`}>See More details</Link>
            </div>
        </div>
    )
}

export {UserCard}