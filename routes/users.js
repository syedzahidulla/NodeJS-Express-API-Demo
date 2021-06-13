import express from 'express';
import { createUser, getUsers, getUser, deleteUser, updateUser } from '../controllers/users.js';
const router = express.Router();

//all routes in here are starting with /users
//http://localhost:5000/users
router.get('/', getUsers);

//http://localhost:5000/users
router.post('/', createUser);

//Here Colon ID (:id) means after alash anything can be put
//We Can Get It By req.params
//http://localhost:5000/users/fd6eca2c-928d-4123-af37-08d2cea4b6ef
router.get('/:id', getUser);

//http://localhost:5000/users/fd6eca2c-928d-4123-af37-08d2cea4b6ef
router.delete('/:id', deleteUser);

//http://localhost:5000/users/fd6eca2c-928d-4123-af37-08d2cea4b6ef
router.patch('/:id', updateUser);

export default router;
