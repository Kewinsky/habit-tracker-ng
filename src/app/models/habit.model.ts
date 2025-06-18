export interface HabitModel {
  id?: string;
  name: string;
  description: string;
  category: string;
  currentStreak: number;
  longestStreak: number;
  completedDates: string[];
  createdAt: Date;
  updatedAt: Date;
  isActive: boolean;
}
