const { Kafka } = require("kafkajs");

const kafka = new Kafka({
  clientId: "my-app",
  brokers: ["localhost:9092"],
});

async function main() {
  try {
    const producer = kafka.producer();

    await producer.connect();

    var messages = [
      {
        value: "Message",
      },
    ];
    setInterval(async () => {
      await producer.send({
        topic: "Example.topic",
        messages,
      });
      console.log(`${messages.length} messages sended`);
    }, 30000);
    /* process.exit(1); */
  } catch (error) {
    console.error(error);
    process.exit(0);
  }
}

main();
