module.exports=function(app){
    app.post("/api/v1/attendences",function(req,res){
        const x = require("../src/attendences/create");
        x.main(req,res);
    })
    app.delete("/api/v1/attendences/:id",function(req,res){
        const x = require("../src/attendences/delete");
        x.main(req,res);
    })
    app.get("/api/v1/attendences/:id",function(req,res){
        const x = require("../src/attendences/get_by_id");
        x.main(req,res);
    })
    app.get("/api/v1/attendences",function(req,res){
        const x = require("../src/attendences/read");
        x.main(req,res);
    })
    app.put("/api/v1/attendences/:id",function(req,res){
        const x = require("../src/attendences/update");
        x.main(req,res);
    })
    
    }