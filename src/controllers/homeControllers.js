const db = require('../database/models')

module.exports = {
    index: (req, res) => {
        db.Product.findAll()
        .then(function(products){
            res.render('home', {
        styles: ['home'],
        title: 'Fabri Whiskeys',
        products: products
        })
    })
}
}