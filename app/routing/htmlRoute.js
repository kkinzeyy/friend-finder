//deps
let path=require('path');

//export the routes as a module
module.exports = (app) => {
//routes that directs user to html pages
app.get("/", function(req,res){
    res.sendFile(path.join(__dirname, "/../public/index.html"));
});

app.get('/questionaire', function(req,res){
    res.sendFile(path.join(__dirname, "/../public/questionaire.html"));
});
};
