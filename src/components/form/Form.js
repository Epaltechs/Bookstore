import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
import { useDispatch } from 'react-redux';
import { addBook } from '../../redux/books/books';

const Form = () => {
  const [data, setData] = useState({ id: '', title: '', catagory: 'other' });
  const uniqueId = uuid();
  const changeHandler = (e) => {
    setData({ ...data, id: uniqueId, [e.target.name]: e.target.value });
  };
  const dispatch = useDispatch();

  const addHandler = (e) => {
    e.preventDefault();
    if (data.title) {
      dispatch(addBook(data));
    }
    setData({ ...data, title: '' });
  };

  const selectHandleChange = (e) => {
    setData({ ...data, catagory: e.target.value });
  };
  return (
    <div>
      <h3>ADD NEW BOOk</h3>
      <form>
        <input
          value={data.title}
          onChange={changeHandler}
          type="text"
          name="title"
          placeholder="Book Title"
        />
        {selectHandleChange}
        <button type="submit" onClick={addHandler}>
          ADD BOOK
        </button>
      </form>
    </div>
  );
};

export default Form;
