import React from 'react';

const AddProduct = () => {
    const handleSubmit =(e) => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const price = form.price.value;
        const brand = form.brand.value;
        const img = form.img.value;
        const addedProduct = {
            name,
            price,
            brand,
            img,
        }
        console.log(addedProduct)

        fetch('http://localhost:5000/shop',{
            method:'POST',
            headers:{
                'content-type': 'application/json',
            },
            body:JSON.stringify(addedProduct)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.insertedId){
                alert('User added successful')
            }
        })
    }
    return (
        <div>
            <div className='my-20'>
                <p className='text-center font-bold'>ADD NEW PRODUCT</p>
            </div>
         <form onSubmit={handleSubmit}>
            
                <div className='grid lg:grid-cols-2 gap-5 '>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold">Product Name</span>
                        </label>
                        <input type="text" name='name' placeholder="email" className="input input-bordered w-full"/>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold">Price</span>
                        </label>
                        <input type="text" name='price' placeholder="Product price" className="input input-bordered w-full"/>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold">Brand</span>
                        </label>
                        <input type="text" name='brand' placeholder="brand" className="input input-bordered w-full"/>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold">Image</span>
                        </label>
                        <input type="text" name='img' placeholder="image" className="input input-bordered w-full"/>
                    </div>   
                </div>
                <div className='text-center mt-10'>
                    <input type="submit" className='btn btn-warning btn-block ' value="Add New product" />
                </div>
         </form>
        </div>
    );
};

export default AddProduct;