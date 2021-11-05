let bookshelfCache;

async function fetchBookshelf() {
    let apiUrl = "https://raw.githubusercontent.com/sing2gather/impala-exercise/main/data.json";
    const response = await fetch(apiUrl);
    const fetchedData = await response.json();
    if (fetchedData.books) {
        return fetchedData.books;
    } else {
        throw new Error("Books not found");
    }
}

export async function getBookshelf() {
    if (bookshelfCache) return bookshelfCache;
    return bookshelfCache = await fetchBookshelf();
}

export async function getBook(id) {
    return (await getBookshelf()).find(book => book.id === id);
}

export async function getBooksBySameAuthor(author, id) {
    return (await getBookshelf())
        .filter(book => book.author === author)
        .filter(book => book.id !== id);
}
