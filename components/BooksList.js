import BookCard from "./BookCard";
import styles from '../styles/Home.module.css'

function BooksList({ items }) {
    return <div>
        {items.length > 0 ?
            <div>
                <ul className={styles.search_result_list}>
                    {items.map(item => (
                        <li key={item.id} className={styles.search_result_list__item}>
                            <BookCard item={item}/>
                        </li>
                    ))}
                </ul>
            </div> : ''}
    </div>;
}

export default BooksList;