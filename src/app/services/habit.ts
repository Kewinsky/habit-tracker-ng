import { inject, Injectable } from '@angular/core';
import {
  Firestore,
  collection,
  collectionData,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { HabitModel } from '../models/habit.model';

@Injectable({
  providedIn: 'root',
})
export class Habit {
  private firestore = inject(Firestore);
  private habitsRef = collection(this.firestore, 'habits');

  getHabits(): Observable<HabitModel[]> {
    return collectionData(this.habitsRef, { idField: 'id' }) as Observable<
      HabitModel[]
    >;
  }

  addHabit(habit: HabitModel) {
    return addDoc(this.habitsRef, habit);
  }

  updateHabit(id: string, habit: Partial<HabitModel>) {
    const habitDoc = doc(this.firestore, `habits/${id}`);
    return updateDoc(habitDoc, habit);
  }

  deleteHabit(id: string) {
    const habitDoc = doc(this.firestore, `habits/${id}`);
    return deleteDoc(habitDoc);
  }
}
