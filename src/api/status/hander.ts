import { Context } from 'hono'
export class StatusHandler {
  static getStatus(c: Context) {
    return c.json({ message: "ok" });
  }
}