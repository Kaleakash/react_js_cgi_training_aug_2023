import { useState } from "react"
function ProductsInfo() {
let [products,setProducts]=useState([
    {"pid":1,"pname":"Tv","price":56000},
    {"pid":2,"pname":"Computer","price":44000},
    {"pid":3,"pname":"Laptop","price":86000},
    {"pid":4,"pname":"Pen Drive","price":2500}
])
let product = products.map(p=>
    <tr key={p.pid}>
        <td>{p.pid}</td>
        <td>{p.pname}</td>
        <td>{p.price}</td>
    </tr>
    )
    return(
        <div>
            <h2>Product Details</h2>
            <table border="1">
                <thead>
                <tr>
                    <th>PId</th>
                    <th>PName</th>
                    <th>Price</th>
                </tr>
                </thead>
                <tbody>
                {product}
                </tbody>
                <tfoot>
                    <tr>
                        <th colSpan={3}>created by Akash!</th>
                    </tr>
                </tfoot>
            </table>
        </div>
    )
}

export default ProductsInfo;