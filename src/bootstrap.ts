import express from 'express';
import cors from 'cors';
import path from 'path';
import AllRoutes from './app/index';
import { consts } from '@config/constants';
import * as methodOverride from 'method-override';

const app = express();

// settings
app.set('port', +(consts.PORT || 3000));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(methodOverride.default('_method', { methods: ['POST', 'GET', 'PUT', 'PATCH', 'DELETE'] }));

// routes
app.use(AllRoutes);

export default app;