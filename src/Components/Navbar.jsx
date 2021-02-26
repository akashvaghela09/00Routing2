import React from 'react'
import { Link } from 'react-router-dom'
import styles from './User.module.css'

const Navbar = () => {

    const links = [
        {
            to: "/",
            title: "Home Page"
        },
        {
            to: "/about",
            title: "About Page"
        },
        {
            to: "/user",
            title: "User"
        }
    ]
    return (
        <div className={styles.navbar}>
            {
                links.map(({to, title}) => (
                    <Link className={styles.navbar} to={to} key={to}>{title}</Link>
                ))
            }
        </div>
    )
}

export { Navbar }