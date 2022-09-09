import { gql } from 'apollo-server-koa';

export const typeDefs = gql`
	type User {
		username: String!
		fullName: String!
		email: String!
		password: String!
	}

	type Query {
		findAllUsers: [User!]!
	}

	type Mutation {
		createUser(
			username: String!
			fullName: String!
			email: String!
			password: String!
		): User!
	}
`;
