import './App.css';
import ProcessPayment from './components/ProcessPayment';

function App() {
  return (
    <div className="container">
     <h2>Stripe Payment Gateway</h2>
     <ProcessPayment/>
    </div>
  );
}

export default App;
