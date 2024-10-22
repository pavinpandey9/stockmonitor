import StockList from "./components/StockList";
import "./styles/App.scss";

function App() {
  return (
    <div className="container">
      <h1>Stock Monitor Dashboard</h1>
      <StockList />
    </div>
  );
}

export default App;
