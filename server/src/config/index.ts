import mongoose from "mongoose";

mongoose.set("debug", false);

const MONGODB_URI = process.env.MONGODB_URI;

// You have to use a template string and interpolate the environment variable for typescript to accept it

// GOT THIS FROM MONGOOSE DOCUMENTATION
// useNewUrlParser, useUnifiedTopology, useFindAndModify, and useCreateIndex are no longer supported options. 
// Mongoose 6 always behaves as if useNewUrlParser, useUnifiedTopology, and useCreateIndex are true, and useFindAndModify is false. Please remove these options from your code
mongoose.connect(`${MONGODB_URI}`);

export default mongoose.connection;
