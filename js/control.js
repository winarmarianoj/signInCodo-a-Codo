document.querySelector('#formLogin').addEventListener('submit', function(e) {
	let remail = document.getElementById('email');
	let rpass = document.getElementById('password');
	let rp = document.getElementById('result');
	var msg = '';

	//FUNCION CORRECTA PARA VERIFICAR CASILLAS DE EMAIL
	
	let emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

	if (emailRegex.test(remail.value)){
		msg = "La dirección de email es correcta. Felicitaciones!!";
  	} else {
   		msg = "La dirección de email es incorrecta.";
	}
	prompt(msg)  

  	const postLists = document.getElementById('result');
    const element = document.createElement('div');
    element.innerHTML = `
    	<div class="card userName d-flex justify-content-center">
	    	<p><b>${msg}</b></p>
	    </div>
    `;
    postLists.appendChild(element);

});
