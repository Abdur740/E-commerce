import Container from './container';
import Cartitem from './cartitems';
import Deals from './deals';
import Footer from './footer';
import { useContext} from 'react';
import Creatingcontext from './creatingcontext'


const cartitems=[{"id":1,"image":"glass1.jpg","name":"Rayban Sunglasses","price":"₹2,499"},
{"id":2,"image":"glass2.jpg","name":"Carrera Sunglasses","price":"₹4,499"},
{"id":3,"image":"shoe5.jpg","name":"Nike Shoes","price":"₹6,299"},
{"id":4,"image":"watch2.jpg","name":"Tommy Hilfiger","price":"₹15,499"},
{"id":5,"image":"image7.jpg","name":"Basic plain Shirt","price":"₹499"},
{"id":6,"image":"image8.jpg","name":"Lousis phillipe","price":"₹1,999"},
{"id":7,"image":"image9.jpg","name":"Allen Solly","price":"₹2,459"},
{"id":8,"image":"image10.jpg","name":"Linen club","price":"₹1,099"},
{"id":9,"image":"shoe6.jpg","name":"Alpha","price":"₹2,499"},
{"id":10,"image":"shoe4.jpg","name":"Strings","price":"₹2,499"},
]
const deals = [{"id":1,"image":"deal1.jpg","name":"Sun Glasses+Shirt","price":"₹2,499"},
{"id":2,"image":"deal2.jpg","name":"Women T-Shirts","price":"₹1,499"},
{"id":3,"image":"deal3.jpg","name":"Carrera Sunglasses+T-Shirts","price":"₹3,499"},
{"id":4,"image":"deal4.jpg","name":"MiltonT shirt","price":"₹6,099"},
{"id":5,"image":"deal5.jpg","name":"Black Hoodie","price":"₹3,499"}]

const Allcomponents = () =>{
  const checkButton = (id,data) => {
    if(data.indexOf(id) === -1){
      return false;
    }else{
      return true;
    }
  }
  const addToCart = (id,data,setData) => {
      console.log(id)
    if(data.indexOf(id) === -1){
      setData([...data,id]);
    }else{
      let a = [...data];
      a.splice(a.indexOf(id),1);
      console.log(a)
      setData(a);
    }
  }
  const [data,setData] = useContext(Creatingcontext);
  
    return(
        <div>
             <Container></Container>
      <Cartitem>
        {cartitems.map(i => {
          return(
          <div class="items">
          <div class="product-image">
              <div class="cart-image">
                   <img src={require("../images/"+i.image)} alt="0"></img> 
              </div>
              <div class="image-description">
                <h3>{i.name}</h3>
                <p>{i.price}</p>
              </div>
          </div>
            <button class="button-description" onClick={()=>addToCart(i.id,data,setData)}>{checkButton(i.id,data)?"Remove from cart" : "Add to cart"}</button>
          </div>)})}
      </Cartitem>
      <Deals>
        {deals.map(j=>{return(<div class="items">
        <div class="product-image">
              <div class="cart-image">
              <img src={require("../images/"+j.image)} alt="0"></img> 
              </div>
              <div class="image-description">
              <h3>{j.name}</h3>
                <p>{j.price}</p>
              </div>
              </div>
              <button class="button-description"onClick={()=>addToCart(j.id,data,setData)} >{checkButton(j.id,data)?"Remove from cart" : "Add to cart"} </button>
          
        </div>)})}
      </Deals>
      <Footer></Footer>
        </div>
    )
}
export default Allcomponents