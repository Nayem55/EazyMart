import { useEffect, useState } from "react";

const useCart=()=>{
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch('/api/cart')
        .then((res) => res.json())
        .then((data) => setCart(data));
    }, []);
    const loadCart=()=>{
        fetch('/api/cart')
        .then((res) => res.json())
        .then((data) => setCart(data));
    }
    return [cart ,loadCart]
}
export default useCart;