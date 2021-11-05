import React from 'react'
import styles from '../../styles/Home.module.css'
import { useRouter } from 'next/router'
import { getBook, getBooksBySameAuthor } from '../../bookshelf';
// Components
import BooksList from '../../components/BooksList'

function Book({ book, booksBySameAuthor }) {
    const router = useRouter()

    return (
        <>
            <>
                <div className={styles.book__previous_button}>
                    <a onClick={() => router.push('/')} aria-label="Page liste">← Back to list</a>
                </div>

                <div className={styles.book}>
                    <div className={styles.book__cover} style={{ backgroundImage: "url(" + book.cover + ")" }}>
                    </div>
                    <div className={styles.book__presentation}>
                        {book.title && <p className={styles.book__title}> {book.title} </p>}
                        {book.author && <p> Written by {book.author} </p>}
                        {book.isbn !== "unknown" && <p> ISBN : {book.isbn} </p>}
                    </div>
                </div>
            </>

            {booksBySameAuthor.length > 0 &&
                <>
                    <p className={styles.book__same_author}> From the same author : </p>
                    <BooksList items={booksBySameAuthor} />
                </>
            }
        </>
    );
}

Book.getInitialProps = async function (context) {
    const { id } = context.query;
    const book = await getBook(id);
    if (!book) {
        // On server side, this map to a 404 HTTP status code
        if (context.res) {
            context.res.statusCode = 404;
        }
        return { book: {}, booksBySameAuthor: [] };
    }
    const booksBySameAuthor = await getBooksBySameAuthor(book.author, id);
    return { book, booksBySameAuthor };
}

export default Book;