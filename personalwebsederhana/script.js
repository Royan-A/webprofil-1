var comments=[]

let display = () => {
	let text='';
	comments.map(item =>{
		text += `<div class="box-p">
		 <h4> ${item[0]} said : </h4>
		  <p> ${item[1]} </p> </div>`
	})
	return text
}

let saveKomen = event =>{
	event.preventDefault()
	let form=[]
	form[0] = document.getElementById('name').value;
	form[1] = document.getElementById('comment').value;

	comments.unshift(form)
	document.getElementById('box-comment').innerHTML = display()
	document.getElementById('form-comment').reset();
}