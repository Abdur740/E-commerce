import {FaCartArrowDown} from "react-icons/fa";


const Header = (props) => {
   
    return (
    <div class="head">
             <nav>
                <div class="h1">
                <h1>Shopclues.com</h1>
                <div class="inp-filt">
             <span class="filter">
             <select >
                    <option value="0">All</option>
                    <option value="0">Watches</option>
                    <option value="0">Men</option>
                    <option value="0">Women</option>
                    <option value="0">Shoes</option>
                    <option value="0">Sun Glass</option>
                </select>
             </span>
             <input type="text" placeholder="Search"></input>
             <button class="header-search">Search</button>
            </div>
                </div>
             <div class="list-items">
                <ul id="home">
                    <li>Home</li>
                    <li>Brands</li>
                    <li>Deals</li>
                    <li>Contact</li>
                    <FaCartArrowDown className="cart"></FaCartArrowDown>
                </ul>
                <div class="batch"></div>
                </div>
             </nav>
    </div>

    );
}
export default Header;
