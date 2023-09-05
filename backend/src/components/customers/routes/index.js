const { Router } = require('express');
const {validateCreateCustomer} = require('../middleware/validate.create.user');
const { getCustomers, createCustomer, updateCustomer, getCustomer } = require('../../../services/controllers/customers.controller');
const customerRouter = Router();

// Route to get all customers
customerRouter.get('/',getCustomers);

// Route to get a customer by id
customerRouter.get('/:id',getCustomer);

// Route to create customers
customerRouter.post('/add',validateCreateCustomer,createCustomer);

// Route to update customers
customerRouter.put('/:id',updateCustomer);


module.exports = customerRouter;