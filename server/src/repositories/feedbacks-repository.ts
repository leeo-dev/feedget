export interface FeedBackCreateData {
  type: string;
  comment: string;
  screenshot?: string;
}
export interface FeedbacksRepository {
  create: (data: FeedBackCreateData) => Promise<void>;
}
