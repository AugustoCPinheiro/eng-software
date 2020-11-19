import { Router } from 'express';
import sequelize from '../config/sequelize';
import Product from '../models/Product';
import ProductMeasure from '../models/ProductMeasure';

const router: Router = Router();

router.get('/teste', () => {
    console.log('foi')
    Product.create({
        name: 'teste',
        description: 'teste 2',
        measure: ProductMeasure.KG,
        measuredValue: 5,
        createdAt: new Date()
    }).then( (res) => {
        console.log(res)
    });
});

export default {router}