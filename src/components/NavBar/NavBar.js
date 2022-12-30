import React from 'react';
import styles from './NavBar.module.scss'

const NavBar = () => {
    return (
        <div className={styles.flex}>
            <h1 className={styles.title}>Gericht</h1>
            <nav className={styles.nav}>
                <a href="/home">Home</a>
                <a href="/pages">Pages</a>
                <a href="/contactUs">Contact us</a>
                <a href="/blog">Blog</a>
                <a href="/landing">Landing</a>
            </nav>
            <div className={styles.registration}>
                <a href="">Log in</a> / <a href=""> Registration</a> <a href="">| Book table</a>
            </div>
        </div>
    );
};

export default NavBar;