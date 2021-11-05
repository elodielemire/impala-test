import styles from '../styles/Home.module.css'

function Header() {
    return <div className={styles.header}>
        <h1 className={styles.header__title}>
            <a href='/' aria-label="back to main page">10 books to read in 2021</a>
        </h1>
        <img className={styles.header__img} src="https://impala.in/wp-content/uploads/2021/02/Learning-bro-600x600.png" />
    </div>
}

export default Header;