const btn2 = document.getElementById('_btn-submit');
const formData = document.getElementById('form-data');
const p_error = document.getElementById('message-error')
//const erro = '';

btn2.addEventListener('click', (e) => {
  e.preventDefault()
  //const cepValue = cep.value;
	cadastrar_exame();
});

function cadastrar_exame(){
	const novo_exame = {
		nome: formData.elements["nome"].value,
		cpf: formData.elements["cpf"].value,
		exame: formData.elements["exame"].value,
		clinica: formData.elements["clinica"].value,
		horario: formData.elements["horario"].value,
		data: new Date(formData.elements["_data"].value).toLocaleDateString()
	}

	for(let prop in novo_exame){
		if(novo_exame[prop] == ''){
			p_error.innerHTML = "Preencha todos os campos"
			p_error.style.color = "#F93154";
			return;
		}
	}



	console.log('entered in teste');
	$.ajax({
	 method: "POST",
	 url: "http://localhost:3333/cadastrar-exame",
	 data: JSON.stringify(novo_exame),
	 contentType: "application/json",
	 success: function(data) {
                console.log('success');
                console.log(JSON.stringify(data));
                window.location.href = "index.html";
               }
	})
}