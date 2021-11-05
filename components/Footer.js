import styles from '../styles/Home.module.css'

function Footer() {
    return <footer className={styles.footer}>
        <p>Created by Elodie Lemire | 2021 | Powered by <a target="_blank" aria-label="Ouvrir le site de Vercel" href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app">Vercel</a>
            | Challenge by <a target="_blank" aria-label="Ouvrir le site de Impala" href="https://impala.in/">Impala</a> | 
            <a target="_blank" aria-label="Ouvrir le repo git du challenge" href="https://gist.github.com/glesage/92d3c776626ca64936ab0c9a79f8f6f5"> Challenge repo</a> | 
            <a target="_blank" aria-label="Ouvrir le repo git du site actuel" href="https://github.com/elodielemire/impala-test"> Project repo</a>
        </p>
    </footer>
}

export default Footer;