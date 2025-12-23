import { appQueue } from '../instance'

export const NOTIFICATION_QUEUE_NAME = appQueue.name

export interface NotificationJobData {
  userId: string
  title: string
  content: string
  type: 'info' | 'success' | 'warning' | 'error'
  metadata?: string
}

export const notificationQueue = appQueue
