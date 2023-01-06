import './App.css';
import ProcessPayment from './components/ProcessPayment';

function App() {
  return (
    <div className="container p-5">
      <div className="row">
        <div className="col-md-6">
        <h2>Stripe Payment Gateway</h2>
        <h4 className="text-decoration-underline">Order Address</h4>
        </div>
        <div className="col-md-6 border p-2">
          <h4>Payment Way</h4>
        <ProcessPayment/>
        </div>
      </div>
    </div>
  );
}

export default App;
