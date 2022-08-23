const express = require('express')
const app = express()
const PORT = 8000

const authors = {
    'jasmine mans': {
        'age': 29,
        'birthPlace': 'Newark, NJ',
        'currentTitle': 'Black Girl, Call Home'
    },
    'kiese laymon': {
        'age': 48,
        'birthPlace': 'Jackson, MS',
        'currentTitle': 'Heavy: An American Memoir'
    },
    'hanif abdurragib': {
        'age': 38,
        'birthPlace': 'Columbus, OH',
        'currentTitle': 'Go Ahead in the Rain: Notes to A Tribe Called Quest'
    },
    'warsan shire': {
        'age': 34,
        'birthPlace': 'Kenya, Af',
        'currentTitle': 'Bless the Daughter Raised by a Voice in Her Head: Poems'
    },
    'fatimah asghar': {
        'age': 'unknown',
        'birthPlace': 'Cambridge, MA',
        'currentTitle': 'If They Come for Us: Poems'
    },
    'unknown': {
        'age': 'unknown',
        'birthPlace': 'uknown',
        'currentTitle': 'unknown'
    }
    
}

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.get('/api/:name', (req, res) => {
    const authorName = req.params.name.toLowerCase
    if (authors[authorName]) {
        res.json(authors[authorName])
    } else {
        res.json(authors['unknown'])
    }
})

app.listen(PORT, () => {
    console.log(`The server is now running on port ${PORT}!`)
})