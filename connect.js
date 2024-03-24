const amqp = require("amqplib");

async function connectToRabbitMQ() {
    try {
        const connection = await amqp.connect('amqp://localhost:5672');
        const channel = await connection.createChannel();
        return channel;
    } catch (error) {
        console.log("Error connecting to RabbitMQ server", error);
        throw error;
    }
}

module.exports = {
    connectToRabbitMQ
}