const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

// Swagger Definition
const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'User Management API',
            version: '1.0.0',
            description: 'API for managing users with authentication, CRUD operations, and image uploads',
        },
        servers: [
            {
                url: 'http://localhost:3000',
                description: 'Local server',
            }
        ],
    },
    apis: ['./routes/*.js'], // Path to your route files
};

// Initialize Swagger
const swaggerSpec = swaggerJsdoc(options);

const swaggerDocs = (app) => {
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
};

module.exports = swaggerDocs;
