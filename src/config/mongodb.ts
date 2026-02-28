import mongoose from 'mongoose'

export const connectMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI || '')
    console.log('Connected to MongoDB.')
  } catch (error) {
    console.log('Error connecting to MongoDB', error)
  }
}


// const MONGODB_URI = process.env.MONGODB_URI!

// if (!MONGODB_URI) {
//   throw new Error('MONGODB_URI is missing in .env')
// }

// let cached = (global as any).mongoose

// if (!cached) {
//   cached = (global as any).mongoose = { conn: null, promise: null }
// }

// export async function connectMongoDB() {
//   if (cached.conn) {
//     return cached.conn
//   }

//   if (!cached.promise) {
//     cached.promise = mongoose
//       .connect(MONGODB_URI, {
//         bufferCommands: false,
//       })
//       .then((mongoose) => mongoose)
//   }

//   cached.conn = await cached.promise
//   return cached.conn
// }

