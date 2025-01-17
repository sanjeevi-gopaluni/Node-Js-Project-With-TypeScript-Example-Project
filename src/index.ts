import app from './App';
import * as express from 'express';
const port = process.env.PORT | 3000;

app.listen(port, (err) => {
    if(err){
        return console.log(err);
    }
    return console.log(`server is listening connections on port ${port}`);
});
