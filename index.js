const { subscribeMessage } = require("./subscribe");
const { publishMessage } = require("./publish");
const { connectToRabbitMQ } = require("./connect");



async function checkRabbitMQ() {
    try {
        const channel = await connectToRabbitMQ();
        const queue = "messages";
        const message = "Hello There!";
        for (let index = 0; index < 5; index++) {
            await publishMessage(channel, queue, index.toString());
            await subscribeMessage(channel, queue);
        }
    } catch (error) {
        console.log(error);
        throw error;
    }
}
checkRabbitMQ();