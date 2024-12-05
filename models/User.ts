import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  name: String,
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: String,
  image: String,
  role: {
    type: String,
    enum: ['user', 'admin', 'chairman', 'md', 'ceo'],
    default: 'user',
  },
  emailVerified: Date,
}, {
  timestamps: true,
});

export default mongoose.models.User || mongoose.model('User', UserSchema);