import React from 'react'
import { Link } from 'react-router-dom'
import './Product.css'
import Chart from '../../components/chart/Chart'
import { productData } from '../../data'
import { Publish } from "@mui/icons-material";

function Product() {
  return (
    <div className="product">
      <div className="productTitleContainer">
        <h1 className="productTitle">Product</h1>
        <Link to="/newProduct">
          <button className="productAddButton">Create</button>
        </Link>
      </div>
      <div className="productTop">
        <div className="productTopLeft">
          <Chart title="Sale In this Month" data={productData} dataKey="Sale" />
        </div>
        <div className="productTopRight">
          <div className="productInfoTop">
            <img
              src="https://i.dell.com/is/image/DellContent//content/dam/ss2/product-images/dell-client-products/notebooks/latitude-notebooks/14-3420/media-gallery/peripherals_laptop_latitude_3420nt_gallery_1.psd?fmt=pjpg&pscan=auto&scl=1&wid=3319&hei=2405&qlt=100,1&resMode=sharp2&size=3319,2405&chrss=full&imwidth=5000"
              alt=""
              className="productInfoImg"
            />
            <span className="productName">Dell Laptop</span>
          </div>
          <div className="productInfoButtom">
            <div className="productInfoItem">
              <div className="productInfoKey">ID:</div>
              <div className="productInfoValue">132</div>
            </div>
            <div className="productInfoItem">
              <div className="productInfoKey">Name:</div>
              <div className="productInfoValue">132</div>
            </div>
            <div className="productInfoItem">
              <div className="productInfoKey">Sales:</div>
              <div className="productInfoValue">90000$</div>
            </div>
            <div className="productInfoItem">
              <div className="productInfoKey">Active:</div>
              <div className="productInfoValue">Yes</div>
            </div>
            <div className="productInfoItem">
              <div className="productInfoKey">In Stoke:</div>
              <div className="productInfoValue">No</div>
            </div>
          </div>
        </div>
      </div>
      <div className='productBottom'>
        <form action="" className='productForm'>
            <div className="productFormLeft">
                <label htmlFor="">product Name</label>
                <input type="text" placeholder='Dell Laptop' name="" id="" />
                <label htmlFor="">In Stock</label> 
                <select name="" id="inStock">
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                </select>
                <label htmlFor="">Active</label>
                <select name="" id="active ">
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                </select>
            </div>
            <div className="productFormRight">
                <div className='productUploader'>
                    <img src="" alt="" className='productUploaderImg' />
                    <label htmlFor="">
                        <Publish/>
                    </label>
                    <input type="file" style={{display:'none'}} />
                </div>
                <button className='productButton'>Upload (Edit)</button>
            </div>
        </form>
      </div>
    </div>
  )
}

export default Product
