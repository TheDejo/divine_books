/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
const path = require('path');
module.exports = {
    webpack: {
        alias: {
            '@': path.resolve(__dirname, 'src'),
            '@page-components': path.resolve(__dirname, 'src/page-components'),
            '@config': path.resolve(__dirname, 'src/config'),
            '@components': path.resolve(__dirname, 'src/components'),
            '@logger': path.resolve(__dirname, 'src/logger.config'),
        },
    },
};