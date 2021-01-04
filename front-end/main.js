const btn = document.getElementById('btn-search');
const data_table = document.getElementById('id-test')

btn.addEventListener('click', (e) => {
  e.preventDefault();
  //const cepValue = cep.value;
  getData();
});



function getData() {
  const URL = `http://localhost:3333/exames`

  const request = fetch(URL)
  .then(res => res.json())
  .then((data)=>{
  	console.log(data);
  	const info = JSON.parse(data['data']);
  	console.log(info);
  	let cont = '';
  	info.forEach((element, index)=>{
  		cont += `
  		<tr>
  		 <td>${index+1}</td>
          <td>${element.nome}</td>
           <td>${element.clinica}</td>
            <td>${element.exame}</td>
          <td>${element.data}</td>
          <td>${element.horario}</td>
        </tr>`
  	})
  	data_table.innerHTML = cont;

  })
 	.catch(error => console.error('Error:', error));
}



