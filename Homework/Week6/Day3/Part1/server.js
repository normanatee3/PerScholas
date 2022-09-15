const express = require('express')
const app = express()
const ejs = require('ejs')

const answers = [
"It is certain",
"It is decidedly so",
"Without a doubt",
"Yes definitely",
"You may rely on it",
"As I see it yes",
"Most likely",
"Outlook good",
"Yes",
"Signs point to yes",
"Reply hazy try again",
"Ask again later",
"Better not tell you now",
"Cannot predict now",
"Concentrate and ask again",
"Don't count on it",
"My reply is no",
"My sources say no",
"Outlook not so good",
"Very doubtful"
]

app.get('/', (req, res) =>{
    res.send('Hello, Stranger')
})
app.get('/greeting', (req, res) =>{
    res.send('Hello, Stranger')
})
app.get('/greeting/:name', (req, res) =>{
    res.send('Wow! Hello there, ' + req.params.name)
})
app.get('/tip/:total/:tipPercentage', (req, res) =>{
    let total = parseInt(req.params.total)
    let tipPercentage = parseInt(req.params.tipPercentage)
    let tipTotal = (total*(tipPercentage/100)).toString()
    res.send(tipTotal)
})
app.get('/magic', (req, res) =>{
    res.send('Ask a question in the url')
})
app.get('/magic/:question', (req, res) =>{
    let randomAnswer = answers[Math.floor(Math.random()*answers.length)]
    res.send('<h1>' + req.params.question + "? " + randomAnswer + '</h1>')
})

// Fibonacci
app.get('/fibonacci/:num/', (req, res) =>{
    let fib = [0, 1]
    
    while(parseInt(req.params.num) > fib[fib.length-1]){
        newFib = fib[fib.length-1] + fib[fib.length-2]
        fib.push(newFib)
        console.log(fib);
    }

    let message = 0

    fib.forEach(el =>{
        if(parseInt(req.params.num) === el){
            message += 1 
        }
    })
    
    if(message > 0){
        res.send("Very good. It is Fibonacci.")
    }else{
        res.send("I can tell this is not a fibonacci number.")
    }
})





app.listen(3000, (req,res)=>{
    console.log(`listening on 3000`);
})