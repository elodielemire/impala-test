import Link from 'next/link'
import styles from '../styles/Home.module.css'
import { useRouter } from 'next/router'

function BookCard({ item }) {
    const router = useRouter()

    return (
        <div className={styles.book_card}>
            <Link href={`/book/${item.id}`}>
                <a aria-label={"Read more about the book " + item.book_name}>
                    {item.cover ?
                        <div className={styles.book_card__img_container}><img src={item.cover} alt={item.title} className={styles.book_card__img} /></div>
                        : <div className={styles.book_card__img_container}><img src="/picture-missing.jpg" alt="No cover picture" className={styles.book_card__img} /></div>}

                    <p className={styles.book_card__title}>{item.title ? item.title : 'Title is missing'}</p>
                    <p className={styles.book_card__author}>{item.author ? 'Written by ' + item.author : 'Author is missing'}</p>
                    <button tabIndex="-1" aria-label={"Read more about" + item.title} className={styles.book_card__button}>More information</button>
                </a>
            </Link>
        </div>
    );
}

export default BookCard;