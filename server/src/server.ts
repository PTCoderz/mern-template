import 'dotenv/config';
import Koa from 'koa';
import db from './config/index';
import { ApolloServer } from 'apollo-server-koa';
import {
	ApolloServerPluginDrainHttpServer,
	ApolloServerPluginLandingPageLocalDefault,
} from 'apollo-server-core';
import { schema } from './schema';
import http from 'http';
import { GraphQLSchema } from 'graphql';

const PORT = 4000;

const startApolloServer = async (schema: GraphQLSchema) => {
	const httpServer = http.createServer();

	const server = new ApolloServer({
		schema,
		csrfPrevention: true,
		cache: 'bounded',
		plugins: [
			ApolloServerPluginDrainHttpServer({ httpServer }),
			ApolloServerPluginLandingPageLocalDefault({ embed: true }),
		],
	});

	await server.start();

	const app = new Koa();

	server.applyMiddleware({ app });

	httpServer.on('request', app.callback());

	db.once('open', async () => {
		await new Promise<void>(resolve =>
			httpServer.listen({ port: PORT }, resolve)
		);

		console.log(
			`Server ready at http://localhost:${PORT}${server.graphqlPath}`
		);

		return { server, app };
	});
};

startApolloServer(schema);
