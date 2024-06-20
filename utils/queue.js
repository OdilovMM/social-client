const Queue = require("bull");
const mongoose = require("mongoose");

const redisConfig = {
  host: "localhost",
  port: 6379,
};

const saveToDBQueue = new Queue("saveToDB", { redis: redisConfig });

