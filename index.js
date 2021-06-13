import express from 'express';
import bodyParser from 'body-parser'; //This allows us to take in incoming POST Requests Bodies
import userRouter from './routes/users.js';

const app = express(); //initialization of our app
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
//This says the app to use body-parser middleware as well as it say we will be using JSON(Javascript Object Notation) data in our whole app

app.use('/users', userRouter);

//Browsers Can Only Make GET Requests
app.get('/', (req, res) => res.send('Hello From HomePage'));

app.listen(PORT, () => {
	console.log(`Server Running On Port : http://localhost:${PORT}`);
});
