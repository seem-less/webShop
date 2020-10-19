import { AppContext } from "../context/AppContext";
import { useContext, useState, useEffect } from "react";
import { useQuery, useMutation } from "@apollo/client";
import GET_CART from "../../queries/get-cart";
import CHECKOUT_MUTATION from "../../mutations/checkout";
import { getFormattedCart, createCheckoutData, order, CheckoutFormInitialState } from "../../functions";
import validateAndSanitizeCheckoutForm from "../../validator/checkout";
import PaymentModes from "./PaymentModes";
import Billing from "./Billing";
import YourOrder from "./YourOrder";
import OrderSuccess from "./OrderSucess";

const CheckoutForm = () => {

    const initialState:CheckoutFormInitialState = {
        firstName: '',
		lastName: '',
		company: '',
		country: '',
		address1: '',
		address2: '',
		city: '',
		state: '',
		postcode: '',
		phone: '',
		email: '',
		createAccount: false,
		orderNotes: '',
		paymentMethod: '',
		errors: null
    };

    const [cart, setCart] = useContext(AppContext);
    const [input, setInput] = useState(initialState);
    const [orderData, setOrderData] = useState(null);
    const [requestError, setRequestError] = useState<null | string>(null);

    // Get Cart Data
    const {loading, error, data, refetch} = useQuery(GET_CART, {
        notifyOnNetworkStatusChange: true,
        onCompleted: () => {
            // Update cart in the localStorage.
            const updatedCart = getFormattedCart(data);
            localStorage.setItem('blackseed-cart', JSON.stringify(updatedCart));

            // Update cart data in React Context
            setCart(updatedCart);
        }
    })

    // Checkout or CreateOrder Mutation.
    const [checkout,{
        data: checkoutResponse,
        loading: checkoutLoading,
        error: checkoutError
    }] = useMutation(CHECKOUT_MUTATION, {
            variables:{
                input: orderData
            },
            onCompleted: () => {
                
                refetch();
            },
            onError: (error) => {
                if (error){
                    setRequestError(error.graphQLErrors[0].message);
                }
            }
    });

    /*
	 * Handle form submit.
	 *
	 * @param {Object} event Event Object.
	 *
	 * @return {void}
	 */
	const handleFormSubmit = ( event: React.FormEvent ) => {
		event.preventDefault();
		const result = validateAndSanitizeCheckoutForm( input );
		if ( ! result.isValid ) {
			setInput( { ...input,  errors: result.errors } );
			return;
        }
		const checkOutData = createCheckoutData( input );
		setOrderData( checkOutData );
		setRequestError( null );
    };
    
    /*
	 * Handle onchange input.
	 *
	 * @param {Object} event Event Object.
	 *
	 * @return {void}
	 */
	const handleOnChange = ( event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement> ):void => {

		if ( 'createAccount' === event.target.name ) {
			const newState = { ...input, [event.target.name]: ! input.createAccount };
			setInput( newState );
		} else {
			const newState = { ...input, [event.target.name]: event.target.value };
			setInput( newState );
		}
	};

    useEffect(() => {
        
        if(orderData !== null){
            // Call the checkout mutation when the value for orderData changes/updates.
            checkout();
        }

    }, [orderData]);

    return(
        <>
            { cart ? (
				<form onSubmit={ handleFormSubmit } className="blackseed-checkout-form">
					<div className="row">
						{/*Billing Details*/}
						<div className="col-lg-6 col-md-12 p-0 pr-2">
							<h2 className="mb-4">Billing Details</h2>
							<Billing input={ input } handleOnChange={ handleOnChange }/>
						</div>
						{/* Order & Payments*/}
						<div className="col-lg-6 col-md-12">
							{/*	Order*/}
							<h2 className="mb-4">Your Order</h2>
							<YourOrder cart={ cart }/>

							{/*Payment*/}
							<PaymentModes input={ input } handleOnChange={ handleOnChange }/>
							<div className="blackseed-place-order-btn-wrap mt-5">
								<button className="btn blackseed-large-black-btn blackseed-place-order-btn btn-secondary" type="submit">
									Place Order
								</button>
							</div>

							{/* Checkout Loading*/}
							{checkoutLoading && <p>Processing Order...</p>}
							{requestError && <p>Error : { requestError } :( Please try again</p>}
						</div>
					</div>
				</form>
			) : '' }

            {/*	Show message if Order Sucess*/}
            <OrderSuccess response={ checkoutResponse }/>
        </>
    )

}

export default CheckoutForm;