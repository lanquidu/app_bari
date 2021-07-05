    const express = require("express");
    const bodyParser = require("body-parser");
    const path = require("path");
    const app = express();

    app.use(bodyParser.urlencoded({extended:false}));
    app.set("view engine", "ejs");
    app.use(express.static(path.join(__dirname, "public")));

    app.get("/", (req, res)=>{
        res.render("index");
    });

    app.post("/login", (req, res)=> {
        const {cc, dateBorn} = req.body;
        const  j= new Date(dateBorn);
        const g = new Date();

        let h = (g-j)
        z= Math.floor (h/(1000*60*60*24))

    

        if(j > g) {
            res.render ('error')
        }else{ 
            res.render ('success', {  
               id:  cc,
               dt: dateBorn,
               it: z,
            });
        }

    });

    app.listen(3000, () =>{
        console.log("server started on port 3000");
    });