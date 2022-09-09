// I found this in an article online
// We also define a Typescript interface to match our GraphQL data types. If we don’t do this, Typescript will complain when we try to access these fields when creating resolvers

interface UserInterface {
	username: string;
	fullName: string;
	email: string;
	password: string;
}

export { UserInterface };
