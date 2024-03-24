const { subscribeMessage } = require("./subscribe");
const { publishMessage } = require("./publish");
const { connectToRabbitMQ } = require("./connect");



async function checkRabbitMQ() {
    try {
        const channel = await connectToRabbitMQ();
        const queue = "messages";
        const message = "Hello There!";
        await publishMessage(channel, queue, message);
        await subscribeMessage(channel, queue);
    } catch (error) {
        console.log(error);
        throw error;
    }
}
checkRabbitMQ();