import mongoose, { Schema, models, model } from "mongoose";

const SessionSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    expiresAt: {
      type: Date,
      required: true,
      index: true,
    },
  },
  { timestamps: true }
);

// ✅ NAMED EXPORT
export const Session =
  models.Session || model("Session", SessionSchema);
