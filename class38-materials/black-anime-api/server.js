const express = require('express')
const app = express()
const PORT = 8000

const characters = {
    'atsuko jackson': {
        'occupation/goal': 'police officer',
        'anime': 'Michiko to Hatchin'
    },
    'michiko malandro': {
        'occupation/goal': 'reunite with hatchin',
        'anime': 'Michiko to Hatchin'
    },
    'miyuki ayukawa': {
        "occupation/goal": 'engineer',
        'anime': 'Basquash'
    },
    'canary': {
        'occupation/goal': 'top class bodyguard',
        'anime': 'hunter x hunter'
    },
    'coffee': {
        'occupation/goal': 'bounty hunter',
        'anime': 'cowboy bepop'
    },
    'unlisted character': {
        'occupation/goal': 'n/a',
        'anime': 'n/a'
    }
}

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:characterName', (request, response) => {
    const charactersName = request.params.characterName.toLowerCase()
    if(characters[charactersName]) {
        response.json(characters[charactersName])
    } else {
        response.json(characters['Unlisted Character'])
    }
})

app.listen(PORT, () =>{
    console.log(`The server is running on port ${PORT}! You better go catch it!`)
})