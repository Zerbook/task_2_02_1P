import { useState } from "react"
import styles from './MyComponent.module.css'

const getTimeFromDate = (date) => date.toISOString().substring(11, 19)

// const products = [
// 	{ id: 'qwe', name: 'Чайник' },
// 	{ id: 'rty', name: 'Утюг' }
// ]

export const MyComponent = () => {
	const [value, setValue] = useState(0)
	const [showRedText, setshowRedText] = useState(false)
	const onClick = () => {
		setshowRedText(!showRedText)
	}

	const text = <div className={showRedText ? styles.red : styles.white}>Текст</div>

	return (
		<>
			{text}
			<button onClick={onClick}>Изменить цвет текста</button>
		</>
	)
}


// const [currentDate, setCurrentDate] = useState(Math.random())
	// setTimeout(() => {
	// 	setCurrentDate(Math.random())
	// }, 1000)

	// const [obj, setObj] = useState({ a: 10, b: 20, c:30 })
	// if (obj.a === 10){
	// 	setObj({ ...obj, a: 20 })
	// }
	// return (
	// 	<div>{obj.a}</div>
	// )

	// return <ul>
	// 	{products.map(({ id, name }) =>
	// 		<li key={id}>{name}</li>
	// 	)}
	// </ul>

