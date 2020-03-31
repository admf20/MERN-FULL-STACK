const mongoose = require('mongoose');

const URI = process.env.MONGODB_URI
    ? process.env.MONGODB_URI
        :'mongodb://localhost/databasetest';

mongoose.connect(URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    // useUnifiedTopology: true
});

const connection = mongoose.connection;

connection.once('open', (err) => {
    if(err){
        console.log(err);   
    }else{
        console.log('DATA_BS corriendo');
    }
});

// (node:11128) UnhandledPromiseRejectionWarning: MongoError: E11000 duplicate key error collection: data_base_mern.notes index: autor_1 dup key: { autor: "Andres Felipe" 
// }
//     at Function.create (C:\Users\felip\Desktop\FullStack ARQ.MERN\Backend\node_modules\mongodb\lib\core\error.js:43:12) 
//     at toError (C:\Users\felip\Desktop\FullStack ARQ.MERN\Backend\node_modules\mongodb\lib\utils.js:149:22)
//     at C:\Users\felip\Desktop\FullStack ARQ.MERN\Backend\node_modules\mongodb\lib\operations\common_functions.js:265:39
//     at C:\Users\felip\Desktop\FullStack ARQ.MERN\Backend\node_modules\mongodb\lib\core\connection\pool.js:404:18
//     at processTicksAndRejections (internal/process/task_queues.js:79:11)(node:11128) UnhandledPromiseRejectionWarning: Unhandled promise rejection. This error originated either by throwing inside of an async function without a catch block, or by rejecting a promise which was not handled with .catch(). To terminate the node process on unhandled promise rejection, use the CLI flag `--unhandled-rejections=strict` (see https://nodejs.org/api/cli.html#cli_unhandled_rejections_mode). (rejection id: 1)
// (node:11128) [DEP0018] DeprecationWarning: Unhandled promise rejections are deprecated. In the future, promise rejections that are not handled will terminate the 
// Node.js process with a non-zero exit code.