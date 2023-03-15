const Deals = (props) =>{
    return(
        <>
    <div class="deal-h1">    
    <h1>Deals of the day</h1>
    <div class="deals">
    {props.children}    
    </div>
    </div>
    </>
    );
}
export default Deals;