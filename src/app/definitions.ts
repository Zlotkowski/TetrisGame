export interface ServerFeedback {
  decision: string;
}

export interface Players_Score {
  name: string;
  score: number;
}

export interface Player_Data {
  name: string;
  id: string;
  points?: number;
}

export interface YourScore {
  name: string;
  id: string;
  points?: number;
}
