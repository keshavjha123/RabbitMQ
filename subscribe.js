
async function asyncTaskWithTheConsumedMessage(message) {
    console.log("async task started");
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            console.log("async task ended", message.content.toString());
            resolve();
        }, 5000);
    });
}
async function subscribeMessage(channel, queueName) {
    try {
        await channel.assertQueue(queueName);
        console.log(`Waiting for massage in queue ${queueName} ....`);
        channel.consume(queueName, async (message) => {
            channel.ack(message);
            await asyncTaskWithTheConsumedMessage(message);
        });
    } catch (error) {
        console.log("error consuming message");
        throw error;
    }
}

module.exports = {
    subscribeMessage
}