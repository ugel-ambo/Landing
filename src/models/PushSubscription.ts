import mongoose from 'mongoose'

const pushSubscriptionSchema = new mongoose.Schema({
  endpoint: {
    type: String,
    required: true,
    unique: true,
  },
  keys: {
    p256dh: { type: String, required: true },
    auth: { type: String, required: true },
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
})

// Índice para búsquedas rápidas por endpoint
pushSubscriptionSchema.index({ endpoint: 1 })

export const PushSubscriptionModel =
  mongoose.models.push_subscriptions ||
  mongoose.model('push_subscriptions', pushSubscriptionSchema)
