export interface Channels {
  id: string;
  description?: string;
  channelName: string;
  members: string[];
  owner: string;
  createdAt: number;
}

export interface Messages {
  id: string;
  uid: string;
  channelId: string;
  content: string;
  createdAt: number;
}

export interface Users {
  id: string;
  uid: string;
  email: string;
  avt: string;
  fullName: string;
  userName: string;
  backgroundColor: string;
  providerId: string;
  createdAt: number;
}

export interface UserUid {
  uid: string;
}

export interface Auth {
  id: string;
  uid: string;
  email: string;
  avt: string;
  fullName: string;
  userName: string;
  backgroundColor: string;
  providerId: string;
  createdAt: number;
}
