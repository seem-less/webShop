import Layout from '../components/Layout';
import CheckoutForm from '../components/checkout/CheckoutForm';

const Checkout = () => {
    return(
        <Layout>
            <div className="container mt-5">
                <h5 className="mt-5 mb-4">Checkout Page</h5>
                <CheckoutForm />
            </div>
        </Layout>
    )
};

export default Checkout;