import MongoClient from 'mongodb'
export default function Repository(){
    const client = new MongoClient(process.env.NODE_ENV, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    return {
        acceptDb(callback){
            client.connect((err, db) => {
                if(err || !db){
                    return callback(err)
                }
                dbConnect = db.db('soccerdb');
                console.log('DB 구성에서 몽고DB에 접속하다')
                return callback()
            })
        },
        getDb(){ return dbConnect}

    }
}