const app = require('./app')

// Startando a página INDEX
app.get("/", function(req, res){   
    return res.render("index.html")
})
    
// Conectar servidor à porta 3000
app.listen(3000, () => {
    console.log(`Server running at http://127.0.0.1:3000/`);
})