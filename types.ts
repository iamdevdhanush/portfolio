export enum ConnectionState {
  DISCONNECTED = 'DISCONNECTED',
  CONNECTING = 'CONNECTING',
  CONNECTED = 'CONNECTED',
  ERROR = 'ERROR',
}

export interface AudioVisualizerState {
  volume: number;
}

export interface LogMessage {
  id: string;
  timestamp: Date;
  sender: 'user' | 'bethina' | 'system';
  text: string;
  type: 'text' | 'info' | 'error';
}

export interface LiveConfig {
  voiceName: string;
  systemInstruction: string;
}
