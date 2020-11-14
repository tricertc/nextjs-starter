import mongoose, { Document, Model, Schema } from 'mongoose';
import bcrypt from 'bcrypt';

const SALT_WORK_FACTOR = 10;

interface UserDocument extends Document {
  name: string;
  email: string;
  password: string;
  verifyPassword: (password: string) => Promise<boolean>;
}

const schema = new Schema<UserDocument>({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true, lowercase: true },
  password: { type: String, required: true },
});

schema.pre<UserDocument>('save', async function hashPassword() {
  if (this.isModified('password')) {
    const salt = await bcrypt.genSalt(SALT_WORK_FACTOR);
    this.password = await bcrypt.hash(this.password, salt);
  }
});

schema.methods.verifyPassword = function verifyPassword(
  this: UserDocument,
  password: string
): Promise<boolean> {
  return bcrypt.compare(password, this.password);
};

type UserModel = Model<UserDocument, unknown>;

const User: UserModel = mongoose.models.User || mongoose.model('User', schema);
export default User;
