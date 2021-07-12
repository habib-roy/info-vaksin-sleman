import redis from 'redis'
import { promisify } from 'util'

const redisClient = redis.createClient({
  host: process.env.REDIS_HOST,
  port: process.env.REDIS_PORT,
  password: process.env.REDIS_PASSWORD
})
const redisClientGet = promisify(redisClient.get).bind(redisClient);
const redisClientSet = promisify(redisClient.set).bind(redisClient);
const redisClientSetex = promisify(redisClient.setex).bind(redisClient);

export { redisClient, redisClientGet, redisClientSet, redisClientSetex };