# **Angular Recipe & Shopping List Application**

# OWYN (Only What You Need) 

## **Project Overview**
This is a dynamic and responsive Angular application designed to manage recipes and shopping lists. The application utilizes **Angular**, **CSS**, and **TypeScript** and interacts with a **Firebase NoSQL database** to store and manage data in real-time.

### **Key Features**
- **Recipe Management**:
  - Add, edit, and delete recipes.
  - Save recipe data to a Firebase NoSQL database.
  - Fetch recipes from the database and notify dependent components of changes via a recipe service.

- **Shopping List Management**:
  - Add, edit, and delete ingredients.
  - Import ingredients from a recipe into the shopping list.
  - Sync shopping list updates across components using observables.

- **Technologies**:
  - Angular 17.3.11
  - Firebase (NoSQL Database)
  - RxJS (for reactive programming)
  - CSS for styling
  - TypeScript for application logic

---

## **Project Structure**
The project is divided into two main components:

### **1. Recipe Component**
The Recipe Component is responsible for managing recipes. It leverages a `RecipeService` to handle the following tasks:
- **Fetching Recipes**: Retrieves recipes from the Firebase database.
- **Saving Recipes**: Adds or updates recipes in the Firebase database.
- **Notifying Components**: Uses an observable to notify dependent components of any changes to the recipes.

#### Recipe Features:
- Recipe list and detail views.
- Adding ingredients from a recipe to the shopping list.
- Editing and managing recipes.

---

### **2. Shopping List Component**
The Shopping List Component handles ingredient management. It uses the `ShoppingListService` for:
- Adding, editing, and deleting ingredients.
- Importing ingredients from recipes.
- Managing state using an observable to ensure all dependent components are notified of updates.

#### Shopping List Features:
- Add ingredients manually or in bulk from a recipe.
- Edit or delete ingredients in the shopping list.
- Real-time synchronization across components.

---

## **Key Services**

### **RecipeService**
Handles all interactions related to recipes:
- **Firebase Integration**: Manages the saving and fetching of recipes.
- **Observable Updates**: Keeps components in sync with recipe changes.
- **Ingredient Sharing**: Allows recipes to share their ingredients with the shopping list.

### **ShoppingListService**
Handles all interactions related to the shopping list:
- **Ingredient Management**: Provides methods to add, edit, and delete ingredients.
- **Bulk Ingredient Import**: Accepts an array of ingredients (e.g., from a recipe).
- **Observable Updates**: Keeps components in sync with shopping list changes.

---

## **Project Setup**

### **Prerequisites**
1. Install [Node.js](https://nodejs.org/) and npm.
2. Install the Angular CLI:
   ```bash
   npm install -g @angular/cli



This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.11.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
