import mongoose from 'mongoose';
const { Schema, model } = mongoose;
import { UserInterface } from '../interfaces';

const userSchema = new Schema<UserInterface>({
	username: {
		type: String,
		required: true,
		trim: true,
	},

	fullName: {
		type: String,
		required: true,
		trim: true,
	},

	email: {
		type: String,
		required: true,
		trim: true,
		unique: true,
		match: [
			/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/, // eslint-disable-line no-useless-escape
			'Please provide a valid Email Adress',
		],
	},

	password: {
		type: String,
		required: true,
		trim: true,
		match: [
			/((?=.*\d)(?=.*[a-zA-Z])(?=.*[A-Z])(?=.*[\W]).{8,20})/,
			'Password must contain at least 8 characters, with at least 1 special character, 1 number, 1 lowercase character, and 1 uppercase character',
		],
	},
});

const User = model<UserInterface>('User', userSchema);

export default User;
