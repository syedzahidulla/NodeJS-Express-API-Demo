import { v4 as uuidv4 } from 'uuid';

var users = [];
export const createUser = (req, res) => {
	req.body.id = uuidv4();
	users.push(req.body);
	res.send(`User With FirstName ${req.body.firstName} Added Successfully`);
};

export const getUsers = (req, res) => {
	console.log(users);
	res.send(users);
};

export const getUser = (req, res) => {
	res.send(users.find(user => user.id == req.params.id));
};

export const deleteUser = (req, res) => {
	users = users.filter(user => user.id != req.params.id);
	res.send('Deleted SuccessFully');
};

export const updateUser = (req, res) => {
	const { id } = req.params;
	const { firstName, LastName, Age } = req.body;
	let user = users.find(user => user.id == req.params.id);
	if (firstName) user.firtName = firstName;
	if (LastName) user.LastName = LastName;
	if (Age) user.Age = Age;
	res.send('Updated SuccessFully');
};
