const express = require('express');
const conectarBancoDeDados = require('./db'); // Importar a função de conexão

const app = express();

// Middleware para trabalhar com JSON
app.use(express.json());

// Conectar ao banco de dados
conectarBancoDeDados();

// Modelo de Tarefa
const TarefaSchema = new mongoose.Schema({
  titulo: String,
  descricao: String,
  concluida: Boolean
});

const Tarefa = mongoose.model('Tarefa', TarefaSchema);

// Rotas para o CRUD de tarefas
app.post('/tarefas', async (req, res) => {
  try {
    const novaTarefa = new Tarefa(req.body);
    await novaTarefa.save();
    res.status(201).json(novaTarefa);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao criar a tarefa' });
  }
});

app.get('/tarefas', async (req, res) => {
  try {
    const tarefas = await Tarefa.find();
    res.status(200).json(tarefas);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar as tarefas' });
  }
});

app.delete('/tarefas/:id', async (req, res) => {
  try {
    await Tarefa.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Tarefa excluída' });
  } catch (error) {
    res.status(500).json({ message: 'Erro ao excluir a tarefa' });
  }
});

// Porta do servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
