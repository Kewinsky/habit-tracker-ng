# 🧠 HabitTrackerNg

A habit-tracking application built with **Angular**, **Firebase Firestore**, and **Angular Material**. Users can create, update, track, and complete habits with a focus on consistency and long-term progress.

## 🚀 Features

- Create, view, edit, and delete habits (CRUD)
- Track **current** and **longest** streaks
- Mark habits as complete for today
- Dashboard with habit statistics
- Responsive UI using **Angular Material**
- Data persistence using **Firebase Firestore**
- Built with **Standalone Angular Components** (Angular 17+)

## 🛠 Development Setup

To run the app locally:

```bash
npm install
ng serve
```

Then visit [`http://localhost:4200`](http://localhost:4200)

## 🧪 Mock Data Seeding

You can seed example habits (with pre-filled streaks, completed dates, etc.) by calling this method in `HabitService`:

```ts
this.habitService.seedHabits();
```

This is helpful for local testing and UI development. Remove the call afterward to prevent duplication.

## 🧱 Project Structure

```
src/
├── app/
│   ├── components/         # UI components (dashboard, habit list, form, detail)
│   ├── models/             # Habit model interface
│   ├── services/           # Firestore habit service
│   └── app.routes.ts       # Routing configuration
```

## 🔨 Building the App

```bash
ng build
```

Compiled files will be located in the `dist/` directory.

## 📦 Tech Stack

- **Angular 17+ (Standalone Components)**
- **Angular Material**
- **Firebase Firestore (NoSQL DB)**
- **RxJS** for reactive streams
- **SCSS** for modular styles

## 📘 Learn More

- [Angular Standalone Components](https://angular.dev/guide/standalone-components)
- [Angular Material Docs](https://material.angular.io/)
- [Firebase Firestore](https://firebase.google.com/docs/firestore)
- [RxJS Guide](https://rxjs.dev/guide/overview)
