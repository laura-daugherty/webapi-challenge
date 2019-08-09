const express = require('express');
const router = express.Router();

var people = [
  {
    id: "1",
    name: 'One Frodo Baggins',
    chores: [
      {
        id: "1",
        description: 'take the ring to Mordor',
        notes: 'make your way to Mount Doom',
        assignedTo: "1", // the id of Frodo,
        completed: true
      },
      {
        id: "2",
        description: 'destroy the ring',
        notes: 'cast the ring into the fire inside Mount Doom',
        assignedTo: "1",
        completed: false
      },
    ]
  },
  {
    id: "2",
    name: 'Two Frodo Baggins',
    chores: [
      {
        id: "1",
        description: 'Two take the ring to Mordor',
        notes: 'Two make your way to Mount Doom',
        assignedTo: "2", // the id of Frodo,
        completed: true
      },
      {
        id: "2",
        description: 'Two destroy the ring',
        notes: 'Two cast the ring into the fire inside Mount Doom',
        assignedTo: "2",
        completed: false
      },
    ]
  },
  {
    id: "3",
    name: 'Three Frodo Baggins',
    chores: [
      {
        id: "1",
        description: 'Threetake the ring to Mordor',
        notes: 'make your way to Mount Doom',
        assignedTo: "3", // the id of Frodo,
        completed: true
      },
      {
        id: "2",
        description: 'Three destroy the ring',
        notes: 'Three cast the ring into the fire inside Mount Doom',
        assignedTo: "3",
        completed: false
      },
    ]
  },
  {
    id: "4",
    name: 'Four Frodo Baggins',
    chores: [
      {
        id: "1",
        description: 'Four take the ring to Mordor',
        notes: 'Four make your way to Mount Doom',
        assignedTo: "4", // the id of Frodo,
        completed: true
      },
      {
        id: "2",
        description: 'Four destroy the ring',
        notes: 'Four cast the ring into the fire inside Mount Doom',
        assignedTo: "4",
        completed: false
      },
    ]
  }
]



router.get('/api/people/:id/chores', (req, res) => {
  const {id} = req.params
  const {completed} = req.query

  const person = people.find(person => person.id === id)

  if (!person) {
    return res.status(404).json({message: "failed to find person with that ID"})
  } 
  if (completed === "true") {
    return res.status(200).json(person.chores.filter(chore => chore.completed))
  } else if (completed === "false") {
    return res.status(200).json(person.chores.filter(chore => !chore.completed))
  }
  return res.status(200).json(person.chores || [])
})

router.post('/api/people/:id/chores', (req, res) => {
  const {id} = req.params
  const person = people.find(person => person.id === id)
  if (!person) {
    return res.status(400).json({message: "not a person"})
  } else {
    person.chores.push(req.body)
    return res.status(200).json(person.chores)
  }
});

router.delete('/api/people/:id', (req, res) => {
  const {id} = req.params
  // const person = people.find(person => person.id === id)
  // if (!person) {
  //   return res.status(400).json({message: "not a person"})
  // } 
    const newArray = people.filter(person => person.id !== id)
    return res.status(200).json(newArray)
})

router.put('/api/people/:id', (req, res) => {
  const {id} = req.params
  const person = people.find(person => person.id === id)
  const newArray = people.filter(person => person.id !== id)
  newArray.push(req.body)
  return res.status(200).json(newArray)

})
module.exports = router;
