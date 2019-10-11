const mongo = require('mongodb').MongoClient;
const dsn = process.env.DBWEBB_DSN || 'mongodb://localhost:27017/chat';

const chat = {
    insertMessage: async function(request, response) {
        try {
            console.log(request);

            let res = await insertCollection(dsn, 'crowd', [request]);
            response.json(res);
        } catch (err) {
            console.log(err);
            res.json(err);
        }
    },

    getMessages: async function(request, response) {
        try {
            let res = await findInCollection(dsn, 'crowd', {}, {}, 0);

            console.log(res);
            response.json(res);
        } catch (err) {
            console.log(err);
            response.json(err);
        }
    }
};

module.exports = chat;

async function insertCollection(dsn, colName, doc) {
    const client = await mongo.connect(dsn);
    const db = await client.db();
    const col = await db.collection(colName);

    await col.insertMany(doc);

    await client.close();
}

async function findInCollection(dsn, colName, criteria, projection, limit) {
    const client = await mongo.connect(dsn);
    const db = await client.db();
    const col = await db.collection(colName);
    const res = await col
        .find(criteria, projection)
        .limit(limit)
        .toArray();
    console.log(client);
    console.log(db);
    console.log(col);
    console.log(res);

    await client.close();

    return res;
}
