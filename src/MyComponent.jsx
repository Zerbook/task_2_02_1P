import { useState } from "react"

const getTimeFromDate = (date) => date.toISOString().substring(11, 19)

const products = [
	{ id: 'qwe', name: 'Чайник' },
	{ id: 'rty', name: 'Утюг' }
]

export const MyComponent = () => {
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

	return <ul>
		{products.map(({ id, name }) =>
			<li key={id}>{name}</li>
		)}
	</ul>

}
