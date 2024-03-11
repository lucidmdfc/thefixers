export interface User {
  full_name: string;
  email?: string;
  entrepris?: string;
  project?: string;
  created_at?: Date | null;
  profileImages?: string[];
}
