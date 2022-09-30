import { User } from '../models';
import { UserInterface } from '../interfaces';
import bcrypt from 'bcryptjs';

export const resolvers = {
	Query: {
		findAllUsers: async () => {
			const users = await User.find();
			return users;
		},
	},

	Mutation: {
		createUser: async (_: never, args: UserInterface) => {
			try {
				const hashedPassword = await bcrypt.hash(args.password, 12);
				const user = await User.create({ ...args, password: hashedPassword });
				await user.save();
				return user;
			} catch (err) {
				throw Error('There was an error creating the user.');
			}
		},
	},
};
