import { cartDb } from "@/cartDb";

export default function getCart(req,res) {
    if(req.method === "GET"){
        res.status(200).json(cartDb)
    }else if( req.method === "POST"){
        const product = req.body.product;
        const exist = cartDb.find(item=>item.id===product.id)
        if(exist){
            const index = cartDb.indexOf(exist)
            console.log("index",index)
            exist.quantity = exist.quantity+1;
            cartDb[index]=exist
        }else{
            cartDb.push(product)
            res.status(201).json(product)
            console.log("Product Added")
        }
 
    }

}   