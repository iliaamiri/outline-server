import express from 'express';
const accessKeyRoutes = express.Router();

import AccessKeyController from "../../app/controllers/AccessKey";

accessKeyRoutes.get('/all', AccessKeyController.getAll);
accessKeyRoutes.get('/getById', AccessKeyController.getById);
accessKeyRoutes.post('/new', AccessKeyController.newKey);
accessKeyRoutes.delete('/delete/:key', AccessKeyController.deleteKey);
accessKeyRoutes.put('/updateDataLimit/:key', AccessKeyController.updateDataLimit);

export default accessKeyRoutes;