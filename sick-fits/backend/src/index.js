/**
 * Loading env value from one place atm as we only
 * have the need for one environment
 */
require('dotenv').config({ path: 'variables.env' });

const server = require('./createServer');

server.start(
    ({ 
        cors: {
            credentials: true,
            origin: process.env.FRONTEND_URL
        } 
    }), 
    ({ port }) => console.log(`Server is running http:localhost:${port}`)
)