const share = require('../../shared/constants');

const config = {
    app: {
        port: process.env.PORT || process.env.RELDENS_APP_PORT || 8080,
        colyseusMonitor: process.env.RELDENS_COLYSEUS_MONITOR || false
    },
    db: {
        engine: process.env.RELDENS_DB_ENGINE || 'mysql',
        host: process.env.RELDENS_DB_HOST || '10.0.2.2',
        port: process.env.RELDENS_DB_PORT || 3306,
        database: process.env.RELDENS_DB_NAME || 'reldens',
        user: process.env.RELDENS_DB_USER || 'reldens',
        password: process.env.RELDENS_DB_PASSWORD || 'reldens',
        connectionLimit: process.env.RELDENS_DB_LIMIT || 10
    },
    initialScene: {
        scene: share.TOWN,
        x: 400,
        y: 345,
        dir: share.DOWN
    }
};

module.exports = config;
