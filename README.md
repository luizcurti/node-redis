# node-redis

This project demonstrates a simple integration between **Node.js** and **Redis**, using the official `redis` library to perform basic operations with the in-memory database.

## 🚀 Technologies Used

- [Node.js](https://nodejs.org/)
- [Redis](https://redis.io/)
- [redis (npm)](https://www.npmjs.com/package/redis)

## 📦 Installation

1. Clone this repository:

```bash
git clone https://github.com/luizcurti/node-redis.git
cd node-redis
```

Make sure Redis is installed and running locally. You can start Redis with:

```bash
redis-server
```

🧪 How to Use
Run the main script to test Redis operations:

```bash
node index.js
```

Example Features (adjust based on actual implementation):
Connecting to Redis

Setting and getting keys/values

Deleting data

Using lists, hashes, or pub/sub (if applicable)

🛠 Project Structure

```bash
node-redis/
├── index.js          # Main script
├── package.json      # Project dependencies
└── README.md         # This file
```

🧠 Prerequisites
Node.js 14+

Redis installed locally or via Docker

🐳 Using Docker (Optional)
If you prefer to run Redis using Docker:

```bash
docker run --name redis -p 6379:6379 -d redis
```

✨ Contributing
Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.
