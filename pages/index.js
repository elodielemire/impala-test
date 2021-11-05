import React, { useState, useEffect } from 'react'
import { getBookshelf } from '../bookshelf';
// Components
import BooksList from '../components/BooksList'
import LoadingMessage from '../components/LoadingMessage'
import ErrorMessage from '../components/ErrorMessage'

function Home() {
  const [result, setResult] = useState({ state: 'loading' });
  useEffect(() => {
    getBookshelf()
      .then(books => setResult({ state: 'loaded', books }))
      .catch(error => setResult({ state: 'failed', error }));
  }, []);

  return (
    <>
      <p>Welcome ! Here is a list of books that you should read :</p>
      {result.state === 'loading' && <LoadingMessage />}
      {result.state === 'failed' && <ErrorMessage errorMessage={result.error.message} />}
      {result.state === 'loaded' && <BooksList items={result.books} />}
    </>
  );
}

export default Home;