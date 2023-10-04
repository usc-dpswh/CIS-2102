import React, { useContext } from 'react'
import AppContext from '../../context/AppContext'
import './ContactTable.css'


const ContactTable = () => {

	const ctx = useContext(AppContext)

	return (

		<div
			style={{
				marginTop: '2rem',
				margin: '0 auto 0 auto'
			}}
		>
			<table border="1">
				<thead>
					<tr>
						<th style={{ width: '200px' }}>Name</th>
						<th style={{ width: '200px' }}>Age</th>
						<th style={{ width: '200px' }}>ID</th>
						<th style={{ width: '200px' }}>Course</th>
						<th style={{ width: '200px' }}>Action</th>
					</tr>
				</thead>
				<tbody>
					{ctx.contactList.length === 0 ? (
						<tr>
							<td colSpan="5" style={{ textAlign: 'center' }}>No contacts added.</td>
						</tr>
					) : (
						ctx.contactList.map((item, index) => (
							<tr key={index}>
								<td>{item.name}</td>
								<td>{item.age}</td>
								<td>{item.id}</td>
								<td>{item.course}</td>
								<td>
									<button
										style={{ width: '80%', margin: '1rem 0 1rem 0' }}
										onClick={() => ctx.editHandler(index)}
									>Edit</button>
									<button
										style={{ width: '80%', marginBottom: '1rem' }}
										onClick={() => ctx.deleteHandler(index)}>Delete</button>
								</td>
							</tr>
						))
					)}
				</tbody>

			</table>
		</div>

	)
}

export default ContactTable