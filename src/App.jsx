import { useEffect, useContext } from "react";
import { BooksContext } from "./context/books.jsx";
import { BookCreate, BookList } from "./components";

function App() {
  const { fetchBooks } = useContext(BooksContext);

  useEffect(() => {
    fetchBooks();

    return () => {
      console.log("cleanup");
    };
  }, []);

  return (
    <div className="app">
      <h1>Reading List</h1>
      <BookList />
      <BookCreate />
    </div>
  );
}

export default App;
