import { User } from '../models';
import { UserInterface } from '../interfaces';

export const resolvers = {
	Query: {
		findAllUsers: async () => {
			const users = await User.find();
			return users;
		},
	},

	Mutation: {
		createUser: async (_: any, args: UserInterface) => {
			let user;

			try {
				user = await User.create(args);
			} catch (err) {
				throw Error('There was an error creating the user.');
			}
			return user;
		},
	},
};
