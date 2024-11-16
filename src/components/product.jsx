
    //define a default list of products as array of objects
    const products = [
      {id: 1, name:'Necklace', price: 50, description: 'Multi-length gold necklace'},
      {id: 2, name:'Bracelet', price: 30, description: 'Gold chain bracelet'},
      {id: 3, name:'Earings', price: 40, description: 'Gold stud earings'},
    ]

function ProductList(){
    return (
        <ul>
            {products.map(
                product => (
                    <li key={product.id}>{product.name}-${product.price}</li>
                )
            )}
        </ul>
    )
}
export default ProductList;