import React from 'react';

const AddProduct = () => {
    return (
        <div className='mt-20'>
            <div>
                <p className='text-center font-bold'>ADD NEW PRODUCT</p>
            </div>
         <form>
            
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
                            <span className="label-text font-semibold">Email</span>
                        </label>
                        <input type="text" placeholder="email" className="input input-bordered w-full"/>
                    </div>
                    
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold">Image</span>
                        </label>
                        <input type="text" name='img' placeholder="image" className="input input-bordered w-full"/>
                    </div>
                    
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold">Details</span>
                        </label>
                        <input type="text" name='details' placeholder="details" className="input input-bordered w-full"/>
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