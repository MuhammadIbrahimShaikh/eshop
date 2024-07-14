import logo from './logo.svg';
import React from 'react';
import './App.css';

function App() {
  return (
    <div>
     {/* navbar  */}
    <nav className="navbar" />
        <h1 className="h1">ESHOP</h1>
        <ul>
            <li><a href="">Home </a></li>
            <li><a href="">Shop</a></li>
            <li><a href="">About</a></li>
            <li><a href="">Blog</a></li>
            <li>
                <select id="Quick Links">
                    <option><a href="">Trending Products</a></option>
                    <option><a href="">Best Selling</a></option>
                    <option><a href="">Top Rated</a></option>
                </select>
            </li>
        </ul>
        <div className="icon">
            <img src="./source/searchicon.png"  alt="" />
            <img src="./source/carticon.png" />
        </div>
    < nav />

     {/* categoreis */}
    <section className="categories" >
        <div className="category">
        <p className="heading1">Beat solo </p>
        <br />
        <p className="heading2"> Wireless</p>
        <br />
        <p className="heading3">HEADPHONES</p>
        <br />
        <button className="shop">Shop By Category</button>
    </div>
    </section>


    {/* services */}
    <section className="services">

        <div className="shipping">

            <img src="./source/caricon.png" alt="" />
            <div className="text">
                <h1>Free Shipping</h1>
                <p>Free Shipping On All Order</p>
            </div>
        </div>
        <div className="money">
            <img src="./source/checkicon.webp" alt="" />
            <div className="text">
                <h1>Safe Money</h1>
                <p>30 Days Money Back</p>
            </div>
        </div>
        <div className="wallet">
            <img src="./source/walleticon.png" alt="" />
            <div className="text">
                <h1>Secure Payment</h1>
                <p>All Payment Secure</p>
            </div>
        </div>
        <div className="support">
            <img src="./source/headphonesicon.png" alt="" />
            <div className="text">
                <h1>Online Support 24/7</h1>
                <p>Technical Support 24/7</p>
            </div>
        </div>
    </section>
    <section className="products" id="products">

        <div className="product-title">
            <h2>Our Products</h2>
            <p>Explore Our Products</p>
        </div>
        <ul className="productlist">
            <li className="product">
                <img src="./source/product1.jfif" alt="" />
                <h5>Boat Headphones</h5>
                <br />
                <h3>$120</h3>
            </li>
            <li className="product">
                <img src="./source/product2.jpg" alt="" />
                <h5>Rocky Mountain</h5>
                <br />
                <h3>$420</h3>
            </li>
            <li className="product">
                <img src="./source/product3.jfif" alt="" />
                <h5>Goggles</h5>
                <br />
                <h3>$320</h3>
            </li>
            <li className="product">
                <img src="./source/product4.jfif" alt="" />
                <h5>Printed</h5>
                <br />
                <h3>$220</h3>
            </li>
            <li className="product">
                <img src="./source/product5.jpg" alt="" />
                <h5>Boat Headphone</h5>
                <br />
                <h3>$120</h3>
            </li>
            <li className="product">
                <img src="./source/product6.jfif" alt="" />
                <h5>Rocky Mountain</h5>
                <br />
                <h3>$4200</h3>
            </li>
            <li className="product">
                <img src="./source/product7.jfif" alt="" />
                <h5>Goggles</h5>
                <br />
                <h3>$320</h3>
            </li>
            <li className="product">
                <img src="./source/product8.jfif" alt="" />
                <h5>Printed</h5>
                <br />
                <h3>$220</h3>
            </li>

        </ul>

    </section>

    <section className="news" id="news">
        <div className="news-title">
            <h1>Recent News</h1>
            <p>Explore Our Blogs</p>
        </div>
        <ul className="blogs">
            <li className="blog">
                <img src="./source/smartwatch.jfif" alt="" />
                <p className="dateandtime">Jan 20, 2024 by Dilshad</p>
                <h3>How to choose perfect smartwatch</h3>
                <p className="info">minima facere deserunt vero illo beatae deleniti eius dolores consequuntur, eligendi
                    corporis maiores molestiae</p>
            </li>
            <li className="blog">
                <img src="./source/appleproducts.webp" alt="" />
                <p className="dateandtime">Jan 20, 2024 by Satya</p>
                <h3>How to choose perfect gadget</h3>
                <p className="info">minima facere deserunt vero illo beatae deleniti eius dolores consequuntur, eligendi
                    corporis maiores molestiae</p>
            </li>
            <li className="blog">
                <img src="./source/vr.jpg" alt="" /> 
                <p className="dateandtime">Jan 20, 2024 by Dilshad</p>
                <h3>How to choose perfect VR headset</h3>
                <p className="info">minima facere deserunt vero illo beatae deleniti eius dolores consequuntur, eligendi
                    corporis maiores molestiae</p>
            </li>
        </ul>

    </section>

    <section className="footer">
        <div className="info">
            <h1>ESHOP</h1>
            <br/> 
            <p className="text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores alias cum</p>
            <br/>
            <p>Made with 💖 by The Coding Journey</p>
            <br/>
            <button className="youtube">Visit Our Youtube Channel</button>
        </div>
        <div className="implinks">
            <h4>Important Links</h4>
            <ul>
                <li className="Home"> <a href="">Home </a></li>
                <li className="About"> <a href="">About </a></li>
                <li className="Contact"> <a href="">Contact </a></li>
                <li className="Blog"> <a href="">Blog </a></li>
            </ul>

        </div>

        <div className="quicklinks">
            <h4>Quick Links</h4>
            <ul>
                <li className="Home"> <a href="">Home </a></li>
                <li className="About"> <a href="">About </a></li>
                <li className="Contact"> <a href="">Contact </a></li>
                <li className="Blog"> <a href="">Blog </a></li>
            </ul>

        </div>
        <div className="address">
            <h4>Address</h4>

            <div className="place">
                <img src="./source/sendtag.svg" alt="" height="20px" />
                <p>Noida , Uttar Pradesh</p>
            </div>

            <div className="contact">
                <img src="./source/mobileIcon.png" alt="" height="20px" />
                <p>+91 1234567890</p>
            </div>

            <div className="icon">
                <img src="./source/instagramicon.png" alt="" height="55px" />
                <img src="./source/facebookicon.png" alt="" height="60px" />
                <img src="./source/linkedinicon.png" alt="" height="55px" />
            </div>
        </div>

    </section>

</div>
  );
}

export default App;
