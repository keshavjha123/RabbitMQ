async function publishMessage(channel, queueName, message) {
    try {
        await channel.assertQueue(queueName);
        await channel.sendToQueue(queueName, Buffer.from(message));
        console.log(`Message sent to ${queueName}: ${message}`);
    } catch (error) {
        console.log("Error sending message");
        throw error;
    }
}

module.exports = {
    publishMessage
};