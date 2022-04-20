import dotenv from 'dotenv'
import express from 'express'
import db from './app/models/index.js'
import apiRouter from "./app/routes/api.js"
import indexRouter from './app/routes/index.js'



async function startServer() {
    dotenv.config()
    const app = express();
    const mongoUri = process.env.MONGO_URI
    const port = process.env.PORT

    app.use(express.static('public'));
    app.use(express.urlencoded({extended: true}));
    app.use(express.json());
    app.use("/", indexRouter);
    app.use("/api", apiRouter);
    //app.use("/api",app);
    //const APP = './app/routes'
    // const nodes = ['admin','basic','board','game','todo','user']
    //const nodes = ['basic', 'board', 'user', 'todo']

   
    
    db.mongoose
        .connect(mongoUri, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        .then(() => {
            console.log(' ### 몽고DB 연결 성공 ### ')
        })
        .catch(err => {
            console.log(' 몽고DB와 연결 실패', err)
            process.exit();
        });
    app.listen(port, () => {
        console.log('***************** ***************** *****************')
        console.log('********** 서버가 정상적으로 실행되고 있습니다 *********')
        console.log('***************** ***************** *****************')
    })
    
    

}
startServer()