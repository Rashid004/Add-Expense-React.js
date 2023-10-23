import React, {useState} from "react";
import ExpensesFilter from "./ExpensesFilter";
import ExpenseItem from "./Expenseitem";
// import '../Card.css'
import './Expenses.css';



const Expenses = (props) => {

const [filteredYear, setFilteredYear] = useState('2020');

const filterChangeHandler = selectedYear => {
   setFilteredYear(selectedYear);
} 
  return (
    // <Card className="expenses">
    <div className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      {props.items.map(expenses =>
         <ExpenseItem 
         title={expenses.title} 
         amount={expenses.amount}
         date={expenses.date}/> )}
    </div>
    /* </Card> */
  );
};

export default Expenses;