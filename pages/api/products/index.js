import { productDb } from "@/productDb";

export default function handler(req,res) {
    res.status(200).json(productDb)
}