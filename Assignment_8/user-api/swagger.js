const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

// Swagger configuration options
const swaggerOptions = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'User API Documentation',
            version: '1.0.0',
            description: 'API for managing users with CRUD operations, authentication, and image uploads.',
            contact: {
                name: 'Developer',
                email: 'developer@example.com'
            }
        },
        servers: [
            {
                url: 'http://localhost:3000/api', // Base URL of the API
                description: 'Development Server'
            }
        ]
    },
    apis: ['./routes/userRoutes.js'] // Path to the route files containing Swagger annotations
};

// Generate Swagger documentation
const swaggerDocs = swaggerJsdoc(swaggerOptions);

// Export a function to set up Swagger UI
module.exports = (app) => {
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));
};
