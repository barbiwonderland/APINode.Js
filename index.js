const express = require("express");
const app = express();
app.use(express.json());
const cors=require("cors");
app.use(cors())

let cats = [
  { id: 1, name: "Mizzie", genre: "Femenino" },
  { id: 2, name: "Botitas", genre: "Masculino" },
];

app.get("/", (request, response) => {
  response.send("<h1>hello world </h1>");
});
app.get("/api/cats", (request, response) => {
  response.json(cats);
});
app.get("/api/cats/:id", (request, response) => {
  const id = Number(request.params.id);
  singleCat = cats.find((cat) => cat.id === id);
  if (singleCat) {
    response.json(singleCat);
  } else {
    response.status(404).end();
  }
});
app.post("/api/cats", (request, response) => {
  const cat = request.body;
  console.log(request.body,"bod")
  if(!cat  ){
    return response.status(400).json({
        error:"Cat body is missing"
    })
  }
  const ids = cats.map((x) => x.id);
  const maxId = Math.max(...ids);
  const newCat = {
    id: maxId + 1,
    name: cat.name,
    genre: cat.genre,
  };
  cats = [...cats, newCat];
  response.json(newCat);
});
app.delete("/api/cats/:id", (request, response) => {
  const id = Number(request.params.id);
  cats = cats.filter((cat) => cat.id !== id);
  response.status(204).end();
});
const PORT = 3200;
app.listen(PORT, () => {
  console.log("server run");
});
