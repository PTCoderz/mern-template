import {Book} from './interfaces';

const books: Book[] = [
  {
    title: 'The Awakening',
    author: 'Kate Chopin',
  },
  {
    title: 'City of Glass',
    author: 'Paul Auster',
  },
];

export const resolvers = {
  Query: {
    books: () => {
      return books;
    }
  },

  Mutation: {
    createBook: (args: Book) => {
      const book = books.push({title: args.title, author: args.author});
      return book;
    }
  }
}
