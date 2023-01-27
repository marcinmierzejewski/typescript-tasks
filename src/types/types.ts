export interface Task {
  name: string;
  done: boolean;
  category?: Category; // ? - optional property
};

export type Category = "general" | "work" | "gym" | "hobby";