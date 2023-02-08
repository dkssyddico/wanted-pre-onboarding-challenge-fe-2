interface ITag {
  id: string;
  name: string;
}

interface ITodo {
  id: string;
  content: string;
  isComplete: boolean;
  category: string;
  tag: ITag[];
}

interface ITodoInfo {
  content: string;
  category: string;
  tags: string[];
}

interface ITodoUpdateInfo {
  id: string;
  content?: string;
  isComplete?: string;
  category?: string;
  tags?: Tag[];
}

interface ITagUpdateInfo extends ITag {
  todoId: string;
}

interface ITodoService {
  addTodo(TodoObj: ITodoInfo): void;
  getAllTodos(): ITodo[];
  getTodoById(todoId: string): ITodo[];
  updateTodo(updateTodoObj: ITodoUpdateInfo): void;
  updateTag(updateTagInfo: ITagUpdateInfo): void;
  deleteTodoById(todoId: string): void;
  deleteAllTodos(): void;
  deleteTagByTodoId(todoId: string, tagId: string): void;
  deleteAllTagsByTodoId(todoId: string): void;
}
