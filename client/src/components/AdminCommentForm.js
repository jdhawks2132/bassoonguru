

function AdminCommentForm() {


	const handleSubmit = () => {};
	return (
		<form onSubmit={handleSubmit}>
			<label>
				<input
					required
					placeholder='comment'
					type='text'
					onChange={(e) => console.log(e.target.value)}
					// value={comment}
				/>
			</label>
			<label>
				<input
					required
					placeholder='comment'
					type='text'
					onChange={(e) => console.log(e.target.value)}
					// value={comment}
				/>
			</label>
			<button>submit</button>
		</form>
	);
}

export default AdminCommentForm;
