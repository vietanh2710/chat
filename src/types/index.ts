export interface DataChannelList {
  channelId: number;
  channelName: string;
  channelImg: string;
  lastMessage: string;
  lastTime: number;
}

export interface DataChannelMessage {
  message: string;
  lastTime: number;
  owner: boolean;
  userName: string;
  avt: string;
}

export interface ListUsers {
  id: number;
  userName: string;
  avt: string;
}
