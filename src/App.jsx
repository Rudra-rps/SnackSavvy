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

const aiBtn = document.getElementById("ai-btn");
        const aiTooltipPara = document.getElementById("ai-tooltip");
function App() {
  return (
    <div className="App">
      <header>
        <nav className="navbar">
            <div className="navbar-left">
              <a href="https://www.figma.com/proto/QTBwZBsQALjd7IuATllklk/Get-the-app?node-id=1-2&p=f&t=XFhq6dDSuialH74T-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1" className="navbar-item">Get the App</a>
            </div>
            <div className="navbar-right">
              <a href="/about" className="navbar-item">About Us</a>
              <a href="/hello" className="navbar-item">Add restaurant</a>
              
              <a href="/login" className="navbar-item">Log in</a>
              <a href="#" className="navbar-item">Sign up</a>
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
      <a href="/haldiram" class="search-button"> Go </a>
    </div>
            
        </div>
    </header>

{/*     <!-- People's Favorites Section --> */}
    <div className="favorites">
        <h2>People's Favorites</h2>
        <div className="favorites-container">
        
            <div className="favorite-item">
            <img src={butterChicken} alt="Dish 1" className='favorite-img'/>
                <p>Butter Chicken</p>
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
            <li><a href="#">Latest Deals</a></li>
            <li><a href="#">New Restaurants</a></li>
            <li><a href="#">AI Price Comparison</a></li>
            <li><a href="#">Smart Recommendations</a></li>
            <li><a href="#">Partner with Us</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Food Aggregators</h3>
          <ul>
            <li><a href="https://www.zomato.com/">Zomato</a></li>
            <li><a href="https://www.swiggy.com/">Swiggy</a></li>
            <li><a href="https://www.ubereats.com">Uber Eats</a></li>
            <li><a href="https://www.dominos.co.in/">Domino's</a></li>
            <li><a href="https://mcdindia.com/">McDonald's</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Support</h3>
          <ul>
            <li><a href="#">FAQs</a></li>
            <li><a href="#">Help Center</a></li>
            <li><a href="#">Report an Issue</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms of Service</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Company</h3>
          <ul>
            <li><a href="#">About SnackSavvy</a></li>
            <li><a href="#">Our Team</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Press</a></li>
            <li><a href="#">Investors</a></li>
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
          <a href="#">Contact Us</a>
          <a href="#">Privacy</a>
          <a href="#">Terms of Use</a>
          <a href="#">Trademarks</a>
          <a href="#">About Our Ads</a>
          <span>© 2025 SnackSavvy</span>
        </div>
      </div>
    </footer>
    </div>
)}

export default App;