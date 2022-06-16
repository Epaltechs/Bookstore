// apiKey= PqQLW0Acp1ia75XdU4Nk

// Action types
const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';
const FETCH_BOOK = 'bookStore/books/FETCH_BOOK';

const initialState = [];

export const addBook = (book) => ({
  type: ADD_BOOK,
  book,
});

export const removeBook = (bookId) => ({
  type: REMOVE_BOOK,
  bookId,
});

export const fetchBooks = () => (dispatch) => fetch(
  'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/PqQLW0Acp1ia75XdU4Nk/books',
)
  .then((response) => response.json())
  .then((data) => {
    Object.keys(data).forEach((book) => {
      dispatch({
        type: ADD_BOOK,
        book: {
          item_id: book,
          ...data[book][0],
        },
      });
    });
  });

// reducer
const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.book];

    case REMOVE_BOOK:
      return state.filter((book) => book.item_id !== action.bookId);

    case FETCH_BOOK:
      return Object.keys(action.payload)
        .map((el) => ({ ...action.payload[el][0], id: el }));
    default:
      return state;
  }
};

export default booksReducer;
