import { NotificationModel } from "./notification.model";

export interface ResponseModel{
  data: any
  notification: NotificationModel
  success: boolean
  message: any
}
