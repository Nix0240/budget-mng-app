import "./App.css";
import AddExpense from "./components/AddExpense";
import BudgetCard from "./components/BudgetCard";
import ExpenseList from "./components/List";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="card">
          <BudgetCard />
        </div>

        <div className="exp">
          <AddExpense />
        </div>
        <ExpenseList />
      </div>
    </>
  );
}

export default App;
