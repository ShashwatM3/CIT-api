const express = require('express');
const app = express();
const port = process.env.PORT || 3001;

var cors = require('cors')

app.use(cors())

const accountSid = 'AC8ae163a17e6e3d2ce63e64a98bac68c4'; 
const authToken = '0a13cc33147e4ffb34682097fbf6c49d'; 
const client = require('twilio')(accountSid, authToken); 

app.get('/api/mail/:NUM', async (req, res) => {
    const param = req.params.NUM;
    const hyp_pos = param.indexOf("-");
    const no = "+"+param.slice(0,hyp_pos);
    const bo = param.slice(hyp_pos+1);
    console.log(bo)

    client.messages 
        .create({         
            to: no,
            from: '+16188160866',
            body: bo
        }) 
        .then(message => console.log(message.sid)) 
        .done();
})

app.get("/",(req,res)=>{
    res.status(200).send("successful")
})

app.listen(port, () => {
 console.log('Server is up and running on port ', port);
})
