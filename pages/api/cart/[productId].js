import { cartDb } from "@/cartDb";

export default function getCart(req,res) {
        const {productId} = req.query;
        const deletedProduct = cartDb.find(product=>product.id == parseInt(productId)) 
        const index = cartDb.findIndex((product=>product.id==parseInt(productId)))

        cartDb.splice(index, 1);

        res.status(200).json(deletedProduct);
}   