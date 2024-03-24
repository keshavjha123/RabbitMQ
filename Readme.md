#The code base is quite simple. All you need to do is to download the rabbit mq image from docker hub.
# Run the following command to download the rabbit mq image
- docker pull rabbitmq
# To run the image , and put up the container, use the following command
- docker run -d --name rabbitmq -p 5672:5672 rabbitmq

- npm i : To install all the dependencies, and then run node ./index.js to publish and subscribe to a queue
in the channel