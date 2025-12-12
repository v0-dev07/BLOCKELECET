const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    passwordHash: {
      type: String,
      required: true,
    },
    walletAddress: {
      type: String,
      default: null,
    },
    role: {
      type: String,
      enum: ['voter', 'admin'],
      default: 'voter',
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('User', userSchema);
