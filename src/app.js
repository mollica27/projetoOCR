const express = require('express');
const multer = require('multer');


const app = express();

const upload = multer();

// Definir a porta do servidor
const port = 3000;

// Rota para a página inicial
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});


// Iniciar o servidor
app.listen(port, () => {
  console.log(`Servidor escutando na porta ${port}`);
});
