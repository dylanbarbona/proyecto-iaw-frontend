export enum NotificationType {
    LIKE = "LIKE",
    COMMENT = "COMMENT",
    FOLLOW = "FOLLOW"
}

export interface Notification {
  _id: string
  to: string
  viewed: boolean
  origin: string
  type: NotificationType
}
