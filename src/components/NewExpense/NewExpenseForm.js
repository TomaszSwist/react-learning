import React, { useState } from 'react'

import './NewExpenseForm.css'

const NewExpenseForm = props => {
	const [enteredTitle, setEnteredTitle] = useState('')
	const [enteredAmount, setEnteredAmount] = useState('')
	const [enteredDate, setEnteredDate] = useState('')

	const titleChangeHandler = e => {
		setEnteredTitle(e.target.value)
	}
	const amountChangeHandler = e => {
		setEnteredAmount(e.target.value)
	}
	const dateChangeHandler = e => {
		setEnteredDate(e.target.value)
	}

	const submitHandler = e => {
		e.preventDefault()
		const expenseData = {
			title: enteredTitle,
			amount: enteredAmount,
			date: new Date(enteredDate),
		}
		props.onSaveExpenseData(expenseData)
		setEnteredDate('')
		setEnteredAmount('')
		setEnteredTitle('')
	}

	return (
		<form onSubmit={submitHandler}>
			<div>
			<div className='new-expense__controls'>
				<div className='new-expense__control'>
					<label>Title</label>
					<input onChange={titleChangeHandler} value={enteredTitle} type='text' />
				</div>
				<div className='new-expense__control'>
					<label>Amount</label>
					<input onChange={amountChangeHandler} value={enteredAmount} type='number' min='0.01' step='0.01' />
				</div>
				<div className='new-expense__control'>
					<label>Date</label>
					<input onChange={dateChangeHandler} value={enteredDate} type='date' min='2022-01-01' step='0.01' />
				</div>
			</div>
			<div className='new-expense__actions'>
			<button onClick={props.cancelForm}>Cancel</button>
			<button type='submit'>Add expense</button>
		</div>
		</div>
		</form>
	)
}

export default NewExpenseForm
