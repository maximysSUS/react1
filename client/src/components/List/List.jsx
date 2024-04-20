import styles from './List.module.css'

function List() {
	return (
		<div className={styles['container']}>
			<h2>List</h2>
			<ul>
				<li>элемент списка</li>
				<li>элемент списка</li>
				<li>элемент списка</li>
				<li>элемент списка</li>
				<li>элемент списка</li>
			</ul>
		</div>
	)
}

export default List
