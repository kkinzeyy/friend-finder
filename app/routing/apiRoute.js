//deps grab the freinds module created from the friends.js file
let friends=require('../data/friends');

//export the app as a module(make sure the brackets complete all the way thru the code)
module.exports=(app)=>{

//route to show all friends available in json format
app.get('/api/friends', (req,res)=>{
    return res.json(friends);
})   
  
//post routes `/api/friends` handle survey results
//route to handle the compatibility logic
//create a variable to hold the most matched friend
app.post('/api/friends', (req,res)=>{
    //set up variables for matches to be parsed
    let clientInfo= req.body;
    let clientScore= clientInfo.scores;
            
    let topMatch={
        name:'',
        photo:'',
        difference: Infinity
    };
    
    //declare scoreDifference for client comparison
    let scoreDifference;

    //loop through friends array
    for (let i=0; i<friends.length;i++) {
        let curMatchPerson =friends[i];
        scoreDifference= 0;
        //find survey differences
        for (let j=0; j<curMatchPerson.score.length; k ++){
            let userFriendScore = curMatchPerson.scores[j];
            let curClientScore = clientScores[j];

            //parse the string 'scores' into data
            scoreDifference = scoreDifference + Math.abs(parseInt(curClientScore) - parseInt(curMatchPerson));
        }
        //compare difference in scores
        if (scoreDifference <= topMatch.difference) {

            topMatch.difference = scoreDifference;
            topMatch.name = curMatchPerson.difference;
            topMatch.photo = curMatchPerson.photo;


        }
    }
    friends.push(clientInfo);
    res.json(topMatch);
});
};
