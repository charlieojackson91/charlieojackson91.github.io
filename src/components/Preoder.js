import React,{useState,useEffect} from 'react';

let token = 'YOUR_TOKEN'
let orderNumber = new Date();

const Preoder = ({data})=>{
	const [list,setList] = useState({})
	const [total,setTotal] = useState(0)

	useEffect(()=>{
		setList(
			data.reduce((obj,pizza)=>{
				if(!(pizza.name in obj)){
					obj[pizza.name]={
						amount: 0,
						subtotal: 0
					}
				}
				obj[pizza.name].amount+=1
				obj[pizza.name].subtotal+= +pizza.price
				return obj
			},{})
		);
		setTotal(
			data.reduce((sum,pizza)=>sum+= +pizza.price,0)
		)
	},[data]);

	const makePayment = totalPrice=>{
		fetch('https://api.sandbox.paypal.com/v1/payments/payment',{
			method: 'POST',
			headers: {
				'Content-Type': "application/json",
				Authorization: token
			},
			body: JSON.stringify({
				"intent": "sale",
				"payer": {
					"payment_method": "paypal"
				},
				"transactions": [{
				    "amount": {
				      "total": total,
				      "currency": "GBP"
				    },
				    "description": "Your pizza order",
				    "custom": "???????????????????",
				    "invoice_number": orderNumber,
				    "payment_options": {
				      "allowed_payment_method": "INSTANT_FUNDING_SOURCE"//maybe some extended list
				    },
				    "soft_descriptor": "???????????????",
				    "item_list": {
				      "items": data
				    }
				}],
				"note_to_payer": "We will notify your 1 hour before we start cook your pizza.",
				"redirect_urls": {
					"return_url": "https://YOUR_DOMAIN/successfull_payment",
					"cancel_url": "https://YOUR_DOMAIN/unsuccessfull_payment"
				}
			})
		})
		.then(res=>res.json())
		.then(paymentResult=>{
			if(paymentResult.result === 'succsesfull'){
				//store preoder in database
				//preview succesfull payment screen
			}else{
				alert('your payment is not succsefull try one more time')
			}
		})
	}
	return(
		data.length
		?
			<div>
				<ul>
					{
						Object.keys(list).map(pizza=>
							<li>{pizza} amount: {list[pizza].amount}, subtotal: £{list[pizza].subtotal}</li>
						)
					}

				</ul>
				Total: £ {total}
				<fieldset>
					<legend> choose pickup time</legend>
					<input type='date' placeholder='choose date' />
	 				<select>
						<option value=''>choose your time</option>
						{
							['11:00','13:00','15:00'].map(time=>
								<option value={time}>{time}</option>
							)
						}
					</select>
				</fieldset>

				<button onClick={()=>makePayment(total)}>Confirm and pay for preoder</button>
			</div>
		:
			<div>
				You don't have any pizza pre order yet
			</div>
	)
}

export default Preoder