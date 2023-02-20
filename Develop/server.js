const express = require('express');
const path = require('path');

const PORT = process.env.port || 3001;

const app = express();
const bodyParser = require('body-parser');

let notes= [];

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'public')));



app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'notes.html'));
});

app.get('/api/notes', (req, res) => {
  res.json(notes);
});

app.post('/api/notes', (req, res) => {

  if (!req.body.title || !req.body.text) {
    return res.status(400).json({ message: 'Both title and text are required' });
  }
  const newNote = {
    id: notes.length + 1,
    title: req.body.title,
    text: req.body.text
  };
  notes.push(newNote);
  res.json(newNote);
  console.log(req.body);
});


app.get('/api/notes/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const note = notes.find(note => note.id === id);
  res.json(note);
});


app.delete('/api/notes/:id', (req, res) => {
  const id = parseInt(req.params.id);
  notes = notes.filter(note => note.id !== id);
  res.json({ message: `Note ${id} deleted` });
});




app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);