import { Component, inject, OnInit } from '@angular/core';
import { Habit } from '../../services/habit';
import { HabitModel } from '../../models/habit.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-habit-list',
  imports: [CommonModule],
  templateUrl: './habit-list.html',
  styleUrl: './habit-list.scss',
})
export class HabitList implements OnInit {
  private habitService = inject(Habit);

  habits: HabitModel[] = [];

  ngOnInit(): void {
    this.habitService.getHabits().subscribe((data) => {
      this.habits = data;
    });
  }
}
