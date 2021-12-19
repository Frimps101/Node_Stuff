const http = require("http")
const fs = require("fs")

const port = 8080


const server = http.createServer((req, res)=>{
    if(req.url === "/"){
        fs.readFile("./index.html", (err, data)=>{
            if(err){
                throw err
            }

            res.statusCode = 200
            res.setHeader("Content-Type", "text/html")
            res.end(data)
        })      
    }

    if(req.url === "/about"){
        fs.readFile("./about.html", (err, data)=>{
            if(err) throw err

            res.statusCode = 200
            res.setHeader("Content-Type", "text/html")
            res.end(data)
        })
    }

        if(req.url === "/contact-me"){
            fs.readFile("./contact-me.html", (err, data)=>{
                if(err) throw err
    
                res.statusCode = 200
                res.setHeader("Content-Type", "text/html")
                res.end(data)
            })
    }

    fs.readFile("./404.html", (err, data)=>{
        if(err) throw err

        res.statusCode = 404
        res.setHeader("Content-Type", "text/html")
        res.end(data)
    })
    
    })



server.listen(port, ()=>{
    console.log(`Server is running on port ${port}`)
})