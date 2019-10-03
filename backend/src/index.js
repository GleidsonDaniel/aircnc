import express from 'express';
import mongoose from 'mongoose';

import routes from './routes';

const port = 3333;
const app = express();

mongoose.connect(
	'mongodb+srv://aircnc:aircnc@aircnc-hsuji.mongodb.net/aircnc?retryWrites=true&w=majority',
	{
		useNewUrlParser: true,
		useUnifiedTopology: true,
	}
);

app.use(express.json());
app.use(routes);

app.listen(port);
