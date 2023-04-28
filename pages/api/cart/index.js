import { cartDb } from "@/cartDb";

export default function getCart(req,res) {
    if(req.method === "GET"){
        res.status(200).json(cartDb)
    }else if( req.method === "POST"){
        const product = req.body.product;
        cartDb.push(product)
        res.status(201).json(product)
    }

}   