import React, {useState} from 'react';

//use useState to manage the forms input fields
function AddProductForm ({onAddProduct}){
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');

    const submitProduct = (e) => {
        e.preventDefault();
        if (name && price && description){
            onAddProduct({name, price: parseFloat(price), description});
            setName('');
            setPrice('');
            setDescription('');
        }
    }
    return (
        <form onSubmit={submitProduct}>
            <h2>Add New Product</h2>
            <div>
                <label>
                    Name:
                    <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                     />
                </label>
            </div>
            <div>
                <label>
                    Name:
                    <input
                    type="text"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)} 
                    required
                    />
                </label>
            </div>
            <div>
                <label>
                    Name:
                    <input
                    type="text"
                    value={description}
                    onChange={(e) => setPrice(e.target.value) || ''} 
                    required
                    />
                </label>
            </div>
            <button type="submit">Add Product</button>
        </form>
    );
}
export default AddProductForm;