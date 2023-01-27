import { renderTasks } from "./helpers/renderTasks.js";
import { renderCategories } from "./helpers/renderCategories.js";
const inputTask = document.querySelector("#inputTask");
const addBtn = document.querySelector("#addBtn");
const tasksContainerElement = document.querySelector("#taskList");
const categoriesContainerElement = document.querySelector(".categories");
let selectedCategory;
const categories = ["general", "work", "gym", "hobby"];
const tasks = [
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
const addTask = (task) => {
    tasks.push(task);
    renderTasks(tasks, tasksContainerElement);
};
const updateSelectedCategory = (newCategory) => {
    selectedCategory = newCategory;
};
addBtn.addEventListener("click", (e) => {
    e.preventDefault();
    addTask({
        name: inputTask.value,
        done: false,
        category: selectedCategory,
    });
    renderTasks(tasks, tasksContainerElement);
});
renderCategories(categories, categoriesContainerElement, updateSelectedCategory);
renderTasks(tasks, tasksContainerElement);
addTask({ name: "specjal", done: true });
