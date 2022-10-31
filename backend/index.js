import express from 'express'
import cors from 'cors'
import House from './models/Property.js'

var app=express();
app.use(cors());
app.use(express.static("public"));
app.use(express.json());
const port = 5000


app.get('/', (req, res) => {
    res.send('Hello Universe!')
})

app.get('/todos', (req, res) => {
    res.send('A list of todo items will be returned')
})

app.post('/create', (req, res) => {
    var id;
    while(true){
        var val = Math.floor(1000 + Math.random() * 9000);
        let posts = House.findOne({id:val})
        console.log(posts)
        if(posts){
            id=val;
            break;
        }
        
    }

    var posts = new House({

        hNo : id,
        blockN: req.body.blockN,
         desc : req.body.desc,
          type : req.body.type,
          Status : req.body.status,
          ownerId : "-",
          residentId : "-"
      });


      posts.save((err, doc) => {
        if (err){
            console.log(err)
        }
        else{
            res.send(posts)
        }
        }
        )
        



})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})