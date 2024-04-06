const express = require('express')
const app = express()

const { products } = require('./data')

app.use(express.static('./public'))

//HOME
app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './public/index.html'))
})

//TEST
app.get('/api/v1/test', (req, res) => {
    res.json({ message: "It worked!" })
})

//PRODUCTS
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

//QUERY
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


//404 ERROR
app.all('*', (req, res) => {
    res.status(404).send('<h1>Error 404: Not Found</h1>')
})

//PORT 3000
app.listen(3000, () => {
    console.log('Server is running on port 3000')
})