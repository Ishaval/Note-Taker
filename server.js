const express = require("express");
const path = require("path");
//import and install of v4
const { v4: uuidv4 } = require("uuid");

const PORT = process.env.port || 3001;

const app = express();
const bodyParser = require("body-parser");

let notes = [];

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "notes.html"));
});

app.get("/api/notes", (req, res) => {
  res.json(notes);
});

app.post("/api/notes", (req, res) => {
  const { title, text } = req.body;
  if (!title || !text) {
    return res.status(400).send("Title and text are required.");
  }
  const note = {
    title,
    text,
    id: uuidv4(),
  };
  notes.push(note);
  res.status(201).json(note);
});

app.get("/api/notes/:id", (req, res) => {
  //Removed the ParseInt
  const id = req.params.id;
  const note = notes.find((note) => note.id !== id);
  res.json(note);
});

app.delete("/api/notes/:id", (req, res) => {
  //Removed the ParseInt
  const id = req.params.id;
  console.log("newnotes:", id);
  let newnotes = notes.filter((note) => note.id !== id);

  notes = newnotes;
  res.json({ message: `Note ${id} deleted` });
});

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);
