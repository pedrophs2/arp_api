export const swaggerOptions = {
    swaggerDefinition: {
        info: {
            title: 'ArpAPI',
            description: 'API de testes para projetos da ArpDevs',
            contact: {
                name: 'ArpDevs'
            },
            servers: ['http://localhost:3000/', 'http://arpdevs.com.br/'],
            version: '1.0.0'
        }
    },
    apis: ['**/*.ts']
}