import React, {useState} from "react";

import NewExpenseForm from "./NewExpenseForm";
import './NewExpense.css'

const NewExpense = (props) => {
    const [formStatus, setFormStatus] = useState(false)

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
        ...enteredExpenseData, 
        id: Math.random().toString()
    }
    props.onAddExpense(expenseData)
    setFormStatus(false)
    }

    const showForm = () => {
		setFormStatus(true)
	}

	const cancelForm = () => {
		setFormStatus(false)
	}

    return (
        <div className="new-expense">
            {formStatus === false && <button onClick={showForm}>Add new expense</button>}
            {formStatus === true && <NewExpenseForm onSaveExpenseData={saveExpenseDataHandler} cancelForm={cancelForm}/>}
        </div>
    )
}

export default NewExpense;