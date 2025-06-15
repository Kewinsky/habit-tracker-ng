import { Routes } from '@angular/router';
import { HabitList } from './components/habit-list/habit-list';
import { HabitDetail } from './components/habit-detail/habit-detail';
import { HabitForm } from './components/habit-form/habit-form';

export const routes: Routes = [
  { path: '', component: HabitList },
  { path: 'habit/:id', component: HabitDetail },
  { path: 'habit/:id/edit', component: HabitForm },
  { path: 'add', component: HabitForm },
];
