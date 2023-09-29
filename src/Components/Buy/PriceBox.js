import './PriceBox.css';
function PriceBox(props)
{
    return (
        <div class="box-div-b">
        <p class="check-out-details">Subtotal (<span>{props.item}</span> item): 
            <p>Prince: <span>{props.amount}</span></p></p>
       <div>
        <form action="/checkout" method="post" id='PaymentForm'>
            <button class="checkout">Proceed to checkout</button>
        </form>
       </div>
       </div>
    )
}
export default PriceBox;