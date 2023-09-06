//import logo from './logo.svg';
import books from './data/books.json';
import BookList from './components/BookList';

function App() {
  return (
    <div className="App">
      <BookList books={books} />
    </div>
  );
}

export default App;
