import express from 'express'
import morgan from 'morgan'
import "express-async-errors"

const app = express()
const port = 3000

app.use(morgan("dev"))
app.use(express.json());

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})

type Planet = {
    id: number,
    name: string,
  };

  type Planets = Planet[];

  let planets: Planets = [
    {
      id: 1,
      name: "Earth",
    },
    {
      id: 2,
      name: "Mars",
    },
  ];
//gettin planets
app.get("/api/planets/:id", (req, res) => {
    const {id} = req.params;
    const planet = planets.find(item => item.id === Number(id))
    res.status(200).json(planet)
})

//posting new planets
app.post("/api/planets/", (req, res) => {
    const { id, name } = req.body;
    const newPlanet = { id, name }
    planets = [...planets, newPlanet]
    console.log(planets)
    res.status(201).json({msg: "Il nuovo pianeta è stato importato"})
})

//reformatting a planets
app.put('/api/planets/:id', (req, res) => {
    const { id } = req.params;
    const { name } = req.body;
    planets = planets.map((planet) => planet.id === Number(id) ? {...planet, name} : planet)
    console.log(planets)
    res.status(200).json({msg: 'Il pianeta è stato aggiornato'})
})

//deleting a planet  
app.delete('/api/planets/:id', (req, res) => {
    const { id } = req.params;
    planets = planets.filter(planet => planet.id !== Number(id));
    console.log(planets)
    res.status(200).json({msg: 'Il pianeta è stato cancellato'})
})
