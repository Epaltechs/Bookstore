import React from 'react';
import Book from './Book';
import Input from './Input';

const arrayOfBooksInfo = [
  {
    title: 'The African Child',
    author: 'Camara Laye',
  },
  {
    title: 'The Finished Mystery',
    author: 'Watch Tower Society',
  },
  {
    title: 'Eat That Frog',
    author: 'Brian Tracey',
  },
];

const assignmentLooper = (a) => {
  const books = <Book title={a.title} author={a.author} />;
  return books;
};

const Books = () => (
  <div>
    {arrayOfBooksInfo.map((i) => assignmentLooper(i))}
    <Input />
  </div>
);

export default Books;
