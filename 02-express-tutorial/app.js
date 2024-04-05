const express = require('express')
const app = express()

const { products, people } = require('./data')

app.use(express.static('./public'))
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

const logger = (req, res, next) => {
    const method = req.method
    const url = req.url
    const time = new Date().getFullYear()
    console.log(`Logger: ${method}, ${url}, ${time}`)
    next()
}

app.use(logger)

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './public/index.html'))
})

app.get('/api/v1/test', (req, res) => {
    res.json({ message: "It worked!" })
})

app.get('/api/v1/products', (req, res) => {
    res.json(products)
})

app.get('/api/v1/products/:productID', (req, res) => {
    const idToFind = parseInt(req.params.productID)
    const product = products.find((p) => 
        p.id === idToFind
    )

    if(!product) {
        return res.status(404).json({ message: "That product was not found."})
    }

    res.json(product)
})

app.get('/api/v1/query', (req, res) => {
    const { search, limit, price } = req.query
    let sortedProducts = [...products]

    if(search) {
        sortedProducts = sortedProducts.filter((product) => {
            return product.name.startsWith(search)
        })
    }

    if(limit) {
        sortedProducts = sortedProducts.slice(0, parseInt(limit))
    }

    if(price) {
        sortedProducts = sortedProducts.filter((product) => {
            return product.price <= price
        })
    }

    if(sortedProducts.length < 1) {
        res.status(200).json({ message: "No products matched your search."})
    }

    res.status(200).json(sortedProducts)
})

app.use('/api/v1/people', peopleRouter)

app.get('/api/v1/people', (req, res) => {
    res.json(people)
})

app.post('/api/v1/people', (req, res) => {
    if(!people) {
        res.status(400).json({
            success: false, 
            message: "Please provide a name"
        })
    } else {
        people.push({
            id: people.length + 1,
            name: req.body.name
        })
        res.status(201).json({
            success: true,
            name: req.body.name
        })
    }
})

app.all('*', (req, res) => {
    res.status(404).send('<h1>Error 404: Not Found</h1>')
})

app.listen(3000, () => {
    console.log('Server is running on port 3000')
})