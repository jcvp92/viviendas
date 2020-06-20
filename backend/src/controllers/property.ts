import { Request, Response } from 'express';
import { Property } from '../db/mongoose';

export const addProperty = (req: Request, res: Response) => {
    let {body, query} = req;

    let propertyObject = new Property({
        title: body.title,
        type: body.type,
        address: body.address,
        rooms: body.rooms,
        price: body.price,
        area: body.area,
        user: query.user._id
    })

    propertyObject.save((err, propertyDB) => {
        if(err) {
            return res.status(500).json({
                success: false,
                error: {
                    title: 'database error',
                    message: err
                }
            })
        }

        if(!propertyDB) {
            return res.status(400).json({
                success: false,
                error: {
                    title: 'Bad Request',
                    message: 'id is invalid'
                }
            })
        }

        res.status(201).json({
            success: true,
            data: propertyDB
        })

    })

}