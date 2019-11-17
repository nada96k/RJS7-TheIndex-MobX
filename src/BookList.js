import React, { Component } from "react";
import { observer } from "mobx-react";

//stores
import bookStore from "./stores/bookStore";

// Components
import Loading from "./Loading";
import SearchBar from "./SearchBar";
import BookTable from "./BookTable";

class BookList extends Component {
  render() {
    let books = bookStore.filteredBooks;
    console.log("filtered books", books);
    const bookColor = this.props.match.params.bookColor;
    if (bookColor) {
      books = bookStore.filterBooksByColor(bookColor);
    }
    console.log("filtered books by color", books);

    return bookStore.loading ? (
      <Loading />
    ) : (
      <div>
        <h3>Books</h3>
        <SearchBar store={bookStore} />
        <BookTable books={books} />
      </div>
    );
  }
}

export default observer(BookList);
