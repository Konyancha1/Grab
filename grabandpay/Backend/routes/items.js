import express from 'express';
import { additems, deleteitem, findall, getitem } from '../controllers/items.js';

export const items = express.Router();

items.get('/:id', getitem);
items.post('/additem', additems);
items.get('/allitems', findall)
items.delete("/paid", deleteitem)