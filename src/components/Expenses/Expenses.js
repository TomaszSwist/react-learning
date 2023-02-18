import React, { useState } from 'react'

import ExpensesFilter from './ExpensesFilter'
import ExpensesList from './ExpensesList'
import Card from '../UI/Card'
import './Expenses.css'
import ExpensesChart from './ExpensesChart'

const Expenses = props => {
	const [filteredYear, setFilteredYear] = useState('2020')

	const saveYearFilterHandler = enteredYear => {
		setFilteredYear(enteredYear)
	}

	const filteredExpenses = props.items.filter(expense => expense.date.getFullYear().toString() === filteredYear)

	return (
		<Card className='expenses'>
			<ExpensesFilter onExpensesFilter={saveYearFilterHandler} selectedYear={filteredYear} />
			<ExpensesChart expenses={filteredExpenses} />
			<ExpensesList items={filteredExpenses} />
		</Card>
	)
}

export default Expenses
