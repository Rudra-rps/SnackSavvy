import React from 'react';
import './App.css';

import butterChicken from "/butter-chicken.jpg"
import masalaDosa from "/masala-dosa.jpg"
import paniPuri from "/pani-puri.webp"
import biryani from "/biryani.jpg"
import pavBhaji from "../src/assets/pav-bhaji.avif"
import choleBhature from "/chole-bhature.jpg"
import rajmaChawal from "/rajma-chawal.jpeg"
import collections from "../src/assets/collections.png"

import { FaRobot, FaSearch } from 'react-icons/fa';
import { Link } from 'react-router';

const aiBtn = document.getElementById("ai-btn");
        const aiTooltipPara = document.getElementById("ai-tooltip");
function App() {
  return (
    <div className="App">
      <header>
        <nav className="navbar">
            <div className="navbar-left">
              <Link to="https://www.figma.com/proto/QTBwZBsQALjd7IuATllklk/Get-the-app?node-id=1-2&p=f&t=XFhq6dDSuialH74T-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1" className="navbar-item">Get the App</Link>
            </div>
            <div className="navbar-right">
              <Link to="/about" className="navbar-item">About Us</Link>
             
              
              <Link to="#" className="navbar-item">Log in</Link>
              <Link to="#" className="navbar-item">Sign up</Link>
            </div>
          </nav>
          
        <div className="transition">
            <div className="name">
                SnackSavvy
            </div>

            <div className="tagline">
                Delicious Bites, Delightful Prices
            </div>
        </div>

        <div className="search">
        <div className="searchbar">
      <i className="fa-solid fa-location-dot location-icon"></i>
      <select className="location-dropdown">
        <option value="">Choose your location</option>
        <option value="new-delhi">New Delhi</option>
        <option value="gurgaon">Gurgaon</option>
        <option value="bangalore">Bangalore</option>
        <option value="mumbai">Mumbai</option>
        <option value="chennai">Chennai</option>
        <option value="kolkata">Kolkata</option>
        <option value="hyderabad">Hyderabad</option>
        <option value="pune">Pune</option>
        <option value="lucknow">Lucknow</option>
      </select>
      <i className="fa-solid fa-magnifying-glass search-icon"></i>
      <input type="text" className="search-input" placeholder="Search here" />
      <Link to="/haldiram" class="search-button"> Go </Link>
    </div>
            
        </div>
    </header>

{/*     <!-- People's Favorites Section --> */}
    <div className="favorites">
        <h2>People's Favorites</h2>
        <div className="favorites-container">
        
            <div className="favorite-item">
            <img src={butterChicken} alt="Dish 1" className='favorite-img'/>
                <p >Butter Chicken</p>
            </div>
            <div className="favorite-item">
                <img src={masalaDosa} alt="Dish 2" className="favorite-img"/>
                <p>Masala Dosa</p>
            </div>
            <div className="favorite-item">
                <img src={paniPuri} alt="Dish 3" className="favorite-img"/>
                <p>Pani Puri</p>
            </div>
            <div className="favorite-item">
                <img src={biryani} alt="Dish 4" className="favorite-img"/>
                <p>Biryani</p>
            </div>
            <div className="favorite-item">
                <img src={pavBhaji} alt="Dish 4" className="favorite-img"/>
                <p>Pav Bhaji</p>
            </div>
            <div className="favorite-item">
                <img src={choleBhature} alt="Dish 4" className="favorite-img"/>
                <p>Chole Bhature</p>
            </div>
            <div className="favorite-item">
                <img src={rajmaChawal} alt="Dish 4" className="favorite-img"/>
                <p>Rajma Chawal</p>
            </div>
        </div>
    </div>


    {/* <!-- AI Assistant Button --> */}
    <div className="ai-assistant">
        <div className="ai-tooltip" id="aiTooltipPara">Hi, I'm SnackBot! Here to help you out.</div>
        <button className="ai-btn" id="ai-btn" onMouseEnter={() => {
            aiTooltipPara.style.opacity = "1";
        }} onMouseLeave={() => {
            aiTooltipPara.style.opacity = "0";
        }}>
            {/* <i className="fa-solid fa-robot"></i> */}
            <FaRobot/>
        </button>
    </div>

    <div className="collections">
        <img src={collections} alt="ad" />
    </div>

    <footer>
      <div className="footer-container">
        <div className="footer-column">
          <h3>What's New</h3>
          <ul>
            <li><a to="#">Latest Deals</a></li>
            <li><a to="#">New Restaurants</a></li>
            <li><a to="#">AI Price Comparison</a></li>
            <li><a to="#">Smart Recommendations</a></li>
            <li><a to="#">Partner with Us</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Food Aggregators</h3>
          <ul>
            <li><a to="https://www.zomato.com/">Zomato</a></li>
            <li><a to="https://www.swiggy.com/">Swiggy</a></li>
            <li><a to="https://www.ubereats.com">Uber Eats</a></li>
            <li><a to="https://www.dominos.co.in/">Domino's</a></li>
            <li><a to="https://mcdindia.com/">McDonald's</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Support</h3>
          <ul>
            <li><a to="#">FAQs</a></li>
            <li><a to="#">Help Center</a></li>
            <li><a to="#">Report an Issue</a></li>
            <li><a to="#">Privacy Policy</a></li>
            <li><a to="#">Terms of Service</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Company</h3>
          <ul>
            <li><a to="#">About SnackSavvy</a></li>
            <li><a to="#">Our Team</a></li>
            <li><a to="#">Careers</a></li>
            <li><a to="#">Press</a></li>
            <li><a to="#">Investors</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="left">
          <span>🌍 English (India)</span>
          <span>Your Privacy Choices</span>
          <span>Consumer Health Privacy</span>
        </div>
        <div className="right">
          <a to="#">Contact Us</a>
          <a to="#">Privacy</a>
          <a to="#">Terms of Use</a>
          <a to="#">Trademarks</a>
          <a to="#">About Our Ads</a>
          <span>© 2025 SnackSavvy</span>
        </div>
      </div>
    </footer>
    </div>
)}

export default App;
