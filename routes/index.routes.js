const express = require('express')
const router = express.Router()
const axios = require('axios')

/* GET home page */
router.get('/', (req, res, next) => {
	res.render('index')
})

//ITERATION 2
//GET route for searching for 1 character
router.get('/all', (req, res, next) => {
	axios.get('http://localhost:8000/characters')
	.then((characters) => {
		res.render('index',{characters:characters.data})
	})	
})

//GET route for searching for 1 character
router.get('/search', (req, res, next) => {
	console.log(req.params)
	axios.get(`http://localhost:8000/characters/:id`)
	.then((character) => {
		res.render('index',{character:character.data})
	})
})

//GET:Hadrien - maybe this will work? I have commented it all out because I am scared to mess up the code that we have
// GET route for searching for 1 character
// router.get('/search/:id', (req, res, next) => {
//   const characterId = req.params.id;

//   axios.get(`http://localhost:8000/characters/${characterId}`)
//     .then((response) => {
//       const character = response.data;
//       res.render('index', { character }); 
//     })
//     .catch((error) => {
//       console.error('We couldn’t find the character, sorry!:', error);
//       res.status(404).send(‘We couldn’t find the character, sorry!); 
// });

// POST: Hadrien - I had a go at the next bit too...
// POST route for creating a new character
// router.post('/characters', (req, res) => {

//   const { name, occupation, cartoon, weapon } = req.body;

//   if (!name || typeof name !== 'string') {
//     return res.status(400).json({ error: 'Invalid name field' });
//   }

//   if (!occupation || typeof occupation !== 'string') {
//     return res.status(400).json({ error: 'Invalid occupation field' });
//   }

//   if (typeof cartoon !== 'boolean') {
//     return res.status(400).json({ error: 'Invalid cartoon field' });
//   }

//   if (!weapon || typeof weapon !== 'string') {
//     return res.status(400).json({ error: 'Invalid weapon field' });
//   }

//   const character = {
//     name,
//     occupation,
//     cartoon,
//     weapon,
//   };

//   axios.post('http://localhost:8000/characters', character)
//     .then((response) => {
//       res.status(201).json(response.data);
//     })
//     .catch((error) => {
//       console.error(‘We have had an error creating your character!:', error);
//       res.status(500).json({ error: 'We had an error creating your character!' });
//     });
// });

// // PATCH route for updating a character by ID - I think this is right, but there are some bugs...ß
// router.patch('/characters/:id', (req, res) => {
//   const characterId = req.params.id;

//   axios.get(`http://localhost:8000/characters/${characterId}`)
//     .then((response) => {
//       const existingCharacter = response.data;

//       const updatedCharacter = { ...existingCharacter, ...req.body };

//       axios.patch(`http://localhost:8000/characters/${characterId}`, updatedCharacter)
//         .then((response) => {
//           res.json(response.data);
//         })
//         .catch((error) => {
//           console.error('Error updating character:', error);
//           res.status(500).json({ error: ‘We’re sorry, we have not been able to update this character' });
//         });
//     })
//     .catch((error) => {
//       console.error('Error fetching character:', error);
//       res.status(404).send(‘We’re sorry, the character wasn’t found');
//     });
// });

//ITERATION 5
//POST route for deleting 1 character
router.post('/search/delete', (req, res, next) => {
	//Write code here
})

//ITERATION 6
//POST route for creating a new character
router.post('/search/new-character', (req, res, next) => {
	//Write code here
})

//ITERATION 7
//POST route for editing 1 character
router.post('/search/edit', (req, res, next) => {
	//Write code here
})

module.exports = router
