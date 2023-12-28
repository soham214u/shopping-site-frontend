import React from 'react';
import {useForm} from "react-hook-form";
import axios from "axios";
import "../styles/CreateProduct.css";

const CreateProduct = () => {
    const {handleSubmit, register, formState: { errors },} = useForm();

    const submitHandler = async ({title, description, price, imgUrl}) => {
        const res = await axios.post("http://localhost:4000/products", {
            title,
            description,
            price,
            imgUrl,
        });

        if (res.status === 200) {
            alert("Product created successfully");
        } else {
            alert("Error creating product");
        }
    };

  return (
    <>
        <form onSubmit={handleSubmit(submitHandler)} className="form">
            <h2>Create Product</h2>
            <div className="title">
                <label className="form-label">Title</label>
                <input 
                 type="text" 
                 name="title" 
                 id="title"
                 {...register("title", {required: "Please enter product title"})} 
                />
                {errors.title && (<div>{errors.title.message}</div>)}  
            </div>
            <div className="description">
                <label className="form-label">Description</label>
                <input 
                 type="text" 
                 name="description" 
                 id="description"
                 {...register("description", {required: "Please enter product description"})} 
                />
                {errors.description && (<div>{errors.description.message}</div>)}  
            </div>
            <div className="price">
                <label className="form-label">Price</label>
                <input 
                 type="Number" 
                 name="price" 
                 id="price"
                 {...register("price", {required: "Please enter product price"})} 
                />
                {errors.price && (<div>{errors.price.message}</div>)}  
            </div>
            <div className="img-url">
                <label className="form-label">Image URL</label>
                <input 
                 type="text" 
                 name="imgUrl" 
                 id="imgUrl"
                 {...register("imgUrl", {required: "Please enter product Image url"})} 
                />
                {errors.imgUrl && (<div>{errors.imgUrl.message}</div>)}  
            </div>
            <div className="button">
                <button type="submit">
                    Create Product
                </button>
            </div>
        </form>
    </>
  )
}

export default CreateProduct;