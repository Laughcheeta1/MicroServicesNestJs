// health-check.js
const { connect } = require('nats');

async function checkHealth() {
  try {
    const nc = await connect({ servers: process.env.NATS_URL });
    await nc.close();
    process.exit(0); // Success
  } catch (error) {
    console.error('Health check failed:', error);
    process.exit(1); // Failure
  }
}

checkHealth();