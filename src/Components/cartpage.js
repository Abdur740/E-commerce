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
const deals = [{"id":11,"image":"deal1.jpg","name":"Sun Glasses+Shirt","price":"₹2,499"},
{"id":12,"image":"deal2.jpg","name":"Women T-Shirts","price":"₹1,499"},
{"id":13,"image":"deal3.jpg","name":"Carrera Sunglasses+T-Shirts","price":"₹3,499"},
{"id":14,"image":"deal4.jpg","name":"MiltonT shirt","price":"₹6,099"},
{"id":15,"image":"deal5.jpg","name":"Black Hoodie","price":"₹3,499"}]


const Cartpage = (props) =>{
    const [data,setData] = useContext(Creatingcontext);
    return(
        <div id="cartpage" class={props.className}>
            <h1>Cart items</h1>
            {
                data.map(item=>{
                    return(<div  class="cart-content">
                        <div class="cart-img">
                    <img src={require("../images/"+cartitems[item-1].image)}></img>
                    </div>
                    <div>
                    <h1> {cartitems[item-1].name}</h1>
                    <h3> {cartitems[item-1].price}</h3>
                    </div>
                    </div>
                    )
                    }
                )
            }
        </div>
    )
}
export default Cartpage