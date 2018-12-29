const express=require('express');
const hbs=require('hbs');


var app = express();
app.set('view engine', 'hbs');

app.get('/home',(req,res)=>{
res.render('home.hbs');
});
app.get('/about',(req,res)=>{
    res.render('about.hbs');
    });


app.get('/', (req,res)=>{
res.send('<h1> Welcome To My Web Page </h1>');
} );

app.post('/getUsers', (req,res)=>{
    res.send({
        name:'Rahul',
        age:23,
        likes:[
            'Biking',
            'Reading'
        ]

    });
    } );

app.listen(3000);
console.log('Server Running on http://localhost:3000');




