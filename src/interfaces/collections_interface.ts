export interface ICollection {
  code: string;
  name: string;
  user: string;
  _id: string;
  abbreviation: string;
  decks: []
}

export interface IInfos {
  name: string;
  code: string;
  abbreviation: string;
  completedCards: number;
  totalTasksInCards: number;
}
