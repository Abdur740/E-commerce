import {FaCartArrowDown} from "react-icons/fa";
import Creatingcontext from "./creatingcontext"
import { useContext } from "react";

let set=0;
const Header = (props) => {
   const showCart = () => {

      if(set==0)
      {
         document.getElementById("cartpage").style.display = "block";
         console.log("working")
         set=1; 
      }
      else
      {
         document.getElementById("cartpage").style.display = "none";
         set=0;
      }
      
   }
   const [data,setData] = useContext(Creatingcontext)
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
                    <FaCartArrowDown id="cart" className="cart" onClick = {() => showCart()}></FaCartArrowDown>
                </ul>
                <div class="batch">{data.length}</div>
                </div>
             </nav>
    </div>

    );
}
export default Header;
