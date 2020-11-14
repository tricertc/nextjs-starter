import mongoose from 'mongoose';

let connected = false;

export async function ensureDbConnection(): Promise<void> {
  if (!connected) {
    await mongoose.connect(process.env.MONGO_URL, {
      useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    connected = mongoose.connections[0].readyState !== 0;
  }
}
