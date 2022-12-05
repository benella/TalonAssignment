export interface User {
  name: string;
  email: string;
}

export interface EventData {
  eventType: string;
  os: string;
  severity: string;
  time: string;
  user: User[];
}
