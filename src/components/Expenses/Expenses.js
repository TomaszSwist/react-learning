import React, { useState } from 'react'

import ExpenseItem from './ExpenseItem'
import ExpensesFilter from './ExpensesFilter'
import Card from '../UI/Card'
import './Expenses.css'

const Expenses = props => {
	const [filteredYear, setFilteredYear] = useState('2020')

	const saveYearFilterHandler = enteredYear => {
		setFilteredYear(enteredYear)
	}

	const filteredExpenses = props.items.filter(expense => expense.date.getFullYear().toString() === filteredYear)

	let expensesContent = <p>No expenses foind.</p>

	if (filteredExpenses.length > 0) {
		expensesContent = filteredExpenses.map(expense => (
			<ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} />
		))
	}

	return (
		<Card className='expenses'>
			<ExpensesFilter onExpensesFilter={saveYearFilterHandler} selectedYear={filteredYear} />
			{expensesContent}
		</Card>
	)
}

export default Expenses
