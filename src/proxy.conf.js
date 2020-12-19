const LOCALHOST_URL = 'http://localhost:3000';
const PROD_URL = '...';

const PROXY_CONFIG = [
    {
        context: [
            "/albums",
            "/album",
            "/artists",
            "/artist"
        ],
        target: LOCALHOST_URL
    }
]

module.exports = PROXY_CONFIG;