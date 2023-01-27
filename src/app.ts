import { Task, Category } from "./types/types";
import { renderTasks } from "./helpers/renderTasks.js";
import { renderCategories } from "./helpers/renderCategories.js";

const inputTask: HTMLInputElement = document.querySelector("#inputTask");
const addBtn: HTMLButtonElement = document.querySelector("#addBtn");
const tasksContainerElement: HTMLElement = document.querySelector("#taskList");
const categoriesContainerElement: HTMLElement =
  document.querySelector(".categories");

let selectedCategory: Category;

const categories: Category[] = ["general", "work", "gym", "hobby"];

const tasks: Task[] = [
  {
    name: "one task",
    done: false,
  },
  {
    name: "two task",
    done: false,
    category: "gym",
  },
  {
    name: "three task",
    done: true,
    category: "work",
  },
];

const addTask = (task: Task) => {
  tasks.push(task);
  renderTasks(tasks, tasksContainerElement);
};

const updateSelectedCategory = (newCategory: Category) => {
  selectedCategory = newCategory;
};

addBtn.addEventListener("click", (e: Event) => {
  e.preventDefault();
  addTask({
    name: inputTask.value,
    done: false,
    category: selectedCategory,
  });
  renderTasks(tasks, tasksContainerElement);
});

renderCategories(
  categories,
  categoriesContainerElement,
  updateSelectedCategory
);
renderTasks(tasks, tasksContainerElement);

addTask({ name: "specjal", done: true });
