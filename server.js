//deps express+path
let express = require("express");
let app = express();
let PORT= process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log('friend finder app is listening on our port: ' + PORT);
});



//use express to parse data
app.use(express.urlencoded({extended:true}));
app.use(express.json());

//set up express to require routes

require("./app/routing/apiRoute")(app);
require("./app/routing/htmlRoute")(app);

