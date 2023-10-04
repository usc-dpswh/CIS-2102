import React, { useContext, useRef } from 'react'
import AppContext from '../../context/AppContext'

const UpdateForm = () => {

	const ctx = useContext(AppContext)

	const nameInput = useRef();
  const contactInput = useRef();
  const idInput = useRef();
  const courseInput = useRef();

	return (
		<dialog ref={ctx.editModal}>
			<div style={{ backgroundColor: 'pink', height: 'auto', width: '300px' }}>
				<div style={{ display: 'flex', flexDirection: 'column', padding: '1rem' }}>

					<h1 style={{ margin: '0 auto 0 auto' }}>Edit Contact</h1>

					<form id="update_form" onSubmit={() => ctx.updateHandler(index)}>

						<div style={{ display: 'flex', flexDirection: 'column' }}>
							<h3 style={{ marginBottom: '5px' }}>Name</h3>
							<input
								onChange={ctx.handleChange}
								name="name"
								type="text"
								placeholder='Enter name'
								ref={nameInput}></input>
						</div>

						<div style={{ display: 'flex', flexDirection: 'column' }}>
							<h3 style={{ marginBottom: '5px' }}>Contact number</h3>
							<input
								onChange={ctx.handleChange}
								name="contact"
								type="text"
								placeholder='Enter contact number'
								ref={contactInput}></input>
						</div>

						<div style={{ display: 'flex', flexDirection: 'column' }}>
							<h3 style={{ marginBottom: '5px' }}>ID</h3>
							<input
								onChange={ctx.handleChange}
								name="id"
								type="text"
								placeholder='Enter ID'
								ref={idInput}></input>
						</div>

						<div style={{ display: 'flex', flexDirection: 'column' }}>
							<h3 style={{ marginBottom: '5px' }}>Course</h3>
							<input
								onChange={ctx.handleChange}
								name="course"
								type="text"
								placeholder='Enter course'
								ref={courseInput}></input>
						</div>

						<button
							style={{ width: '100%', marginTop: '3rem' }}
							onClick={ctx.updateHandler}
						>Update Contact</button>
						<button
							type="button" // Add this attribute to prevent form submission
							style={{ width: '100%', marginTop: '1rem' }}
							onClick={() => ctx.editModal.current.close()}
						>
							Close
						</button>

					</form>
				</div>
			</div>
		</dialog>
	)
}

export default UpdateForm