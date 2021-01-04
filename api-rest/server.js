
	let arrayExams = [
		{
			nome: 'Alexandre Kauê Danilo Caldeira',
			cpf: '835.092.812-33',
			exame: 'Hemograma',
			clinica: 'MedicMais São Luís',
			horario: '08:00',
			data: '04/01/2021'

		},
		{
			nome: 'Priscila Luciana Lima',
			cpf: '128.058.445-99',
			exame: 'Ureia e Creatinina',
			clinica: 'Clínica São João',
			horario: '08:00',
			data: '14/02/2021'

		},
		{
			nome: 'Ayla Sabrina Baptista',
			cpf: '971.453.371-69',
			exame: 'Colesterol',
			clinica: 'Hiper Clínica',
			horario: '08:00',
			data: '16/01/2021'

		}
	]

	function getExames(){
		return arrayExams;
	}


	function add(data){
		arrayExams.push(data);
	}


const express = require('express');
const cors = require('cors');
//const bodyParser = require('body-parser');
const app = express();

app.use(cors());
app.use(express.json());
app.listen(3333);

//var jsonParser = bodyParser.json();

app.get('/exames', (req, res) => {
	try{
		const exames = getExames();
		console.log('exames ', exames);
    	res.status(200).send({'data': JSON.stringify(exames)});
	}catch(erro){
		res.status(500).send(`Error ${erro}`);
	}
});


app.post('/cadastrar-exame', async (req, res) => {
	try{
			const data = req.body;
			add(data);

			res.status(200).send({success: true}); 
	}catch(erro){
		res.status(500).send(`Error ${erro}`);
	}      
})

