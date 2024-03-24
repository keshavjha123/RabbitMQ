async function subscribeMessage(channel, queueName) {
    try {
        await channel.assertQueue(queueName);
        console.log(`Waiting for massage in queue ${queueName} ....`);
        channel.consume(queueName, message => {
            console.log(`received message : ${message.content.toString()}`);
            channel.ack(message);
        });
    } catch (error) {
        console.log("error consuming message");
        throw error;
    }
}

module.exports = {
    subscribeMessage
}