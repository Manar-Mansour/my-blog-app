import express from 'express';
import bodyParser from 'body-parser';
import { MongoClient } from 'mongodb';
import path from 'path';
require('dotenv').config();

/*[
    {
        name: 'learn-node',
        upvotes: 0,
        comments: [],
    }, {
        name: 'node-capabilities',
        upvotes: 0,
        comments: [],
    }, {
        name: 'learn-react',
        upvotes: 0,
        comments: [],
    },
    {
        name: 'node-for-microservices',
        upvotes: 0,
        comments: [],
    }
]*/

const app = express();

app.use(express.static(path.join(__dirname, '/build')));
app.use(bodyParser.json());

const withDB = async (operations, res) => {
    try {
        //'mongodb://localhost:27017'
        const dbUrl=process.env.DB_URL;
        const client = await MongoClient.connect(dbUrl, { useNewUrlParser: true });
        const db = client.db('my-blog');
    
        await operations(db);
    
        client.close();
    } catch (error) {
        res.status(500).json({ message: 'Error connecting to db', error });
    }
}

app.get('/api/articles/:name', async (req, res) => {
    withDB(async (db) => {
        const articleName = req.params.name;

        const articleInfo = await db.collection('articles').findOne({ name: articleName })
        res.status(200).json(articleInfo);
    }, res);
})

app.post('/api/articles/:name/upvote', async (req, res) => {
    withDB(async (db) => {
        const articleName = req.params.name;
    
        const articleInfo = await db.collection('articles').findOne({ name: articleName });
        await db.collection('articles').updateOne({ name: articleName }, {
            '$set': {
                upvotes: articleInfo.upvotes + 1,
            },
        });
        const updatedArticleInfo = await db.collection('articles').findOne({ name: articleName });
    
        res.status(200).json(updatedArticleInfo);
    }, res);
});

app.post('/api/articles/:name/add-comment', (req, res) => {
    const { username, text } = req.body;
    const articleName = req.params.name;

    withDB(async (db) => {
        const articleInfo = await db.collection('articles').findOne({ name: articleName });
        await db.collection('articles').updateOne({ name: articleName }, {
            '$set': {
                comments: articleInfo.comments.concat({ username, text }),
            },
        });
        const updatedArticleInfo = await db.collection('articles').findOne({ name: articleName });

        res.status(200).json(updatedArticleInfo);
    }, res);
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/build/index.html'));
});
const port = process.env.PORT ||3000;
app.listen(port, ()=>{console.log(`running on http://localhost:${port}`)});
//app.listen(8000, () => console.log('Listening on port 8000'));