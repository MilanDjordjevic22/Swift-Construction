// the model for the database

import mongoose from "mongoose";

const QuoteSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    lowercase: true,
    trim: true,
  },
  phone: {
    type: String,
    required: true,
    trim: true,
  },
  message: {
    type: String,
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Pre-save hook to normalize the phone number
QuoteSchema.pre("save", function (next) {
  // Remove any non-digit characters such as dashes
  this.phone = this.phone.replace(/[^\d]/g, "");
  next();
});

export default mongoose.models.Quote || mongoose.model("Quote", QuoteSchema);
