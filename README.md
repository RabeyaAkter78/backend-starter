# 🧩 Backend Starter

A clean and efficient **Node.js + TypeScript backend starter** project designed to save setup time.  
It includes pre-configured **authentication**, **user modules**, and **environment setup** to help you kickstart backend development faster.

---

## 📦 Features

- 🚀 Express.js server with TypeScript  
- 🧠 Mongoose integration (MongoDB)  
- 🔐 Authentication & user modules pre-coded  
- ⚙️ Environment variable management with `dotenv`  
- 💅 Code formatting and linting with Prettier & ESLint  
- 🔄 Ready-to-use development scripts  

---

## 🚀 Installation Process

### 1. Clone the Repository
```bash
git clone "repo-url"
2. Install Dependencies
bash
Copy code
npm install
3. Set Up Environment Variables
Create a .env file in the project root with the following content:

bash
Copy code
NODE_ENV=development
PORT=5000
DATABASE_URL=mongodb+srv://username:password@cluster.mongodb.net/dbname
BCRYPT_SALT_ROUNDS=10
JWT_SECRET=your_secret_key
4. Run the Project
bash
Copy code
npm run dev
🧱 Creating the Project from Scratch (Optional)
If you want to build this starter manually, follow the steps below:

1. Create a Folder and Open It in VS Code
bash
Copy code
mkdir backend_starter
cd backend_starter
code .
2. Initialize and Install Dependencies
bash
Copy code
npm init -y
npm install express mongoose cors dotenv
npm install typescript ts-node-dev --save-dev
npx tsc --init
3. Update Your tsconfig.json
json
Copy code
{
  "compilerOptions": {
    "module": "commonjs",
    "rootDir": "./src",
    "outDir": "./dist",
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,
    "strict": true,
    "skipLibCheck": true
  },
  "include": ["src"],
  "exclude": ["node_modules", "dist"]
}
4. Add Scripts to package.json
json
Copy code
"scripts": {
  "dev": "ts-node-dev --respawn --transpile-only src/server.ts",
  "lint": "npx eslint src --ignore-pattern '.js,.ts'",
  "lint:fix": "npx eslint src --fix",
  "format": "npx prettier --ignore-path .prettierignore --write \"**/*.{js,ts,json}\"",
  "test": "echo \"Error: no test specified\" && exit 1"
}
5. Create the Folder Structure
pgsql
Copy code
backend_starter/
├── src/
│   ├── app.ts
│   └── server.ts
├── package.json
├── tsconfig.json
├── .env
└── README.md
🧩 Example Code
src/app.ts
ts
Copy code
import express, { Application, Request, Response } from 'express'
import cors from 'cors'
import dotenv from 'dotenv'

dotenv.config()

const app: Application = express()

// Middleware
app.use(cors())
app.use(express.json())

// Test route
app.get('/', (req: Request, res: Response) => {
  res.send('Backend Starter is running 🚀')
})

export default app
src/server.ts
ts
Copy code
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import app from './app'

dotenv.config()

const port = process.env.PORT || 5000
const databaseUrl = process.env.DATABASE_URL as string

// Connect to MongoDB and start the server
async function startServer() {
  try {
    await mongoose.connect(databaseUrl)
    console.log('✅ Database connected successfully!')

    app.listen(port, () => {
      console.log(`🚀 Server is running on port ${port}`)
    })
  } catch (error) {
    console.error('❌ Failed to connect to the database', error)
  }
}

startServer()
🧰 Available Commands
Command	Description
npm run dev	Run the development server
npm run lint	Check for linting issues
npm run lint:fix	Fix linting issues automatically
npm run format	Format code with Prettier

🧾 Summary
This backend starter template provides you with:

🧩 Pre-configured TypeScript backend

⚙️ Ready-to-use Express server

🗄️ MongoDB + Mongoose setup

🔐 Auth & user modules prepared

💅 ESLint & Prettier formatting

🚀 Fast local development setup

🧠 Author Notes
This starter is built to save developers from repetitive setup work.
You can easily expand it with your own modules or APIs and start building production-ready applications faster.