interface Book {
  title: string,
  author: string
}

const books = [
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
