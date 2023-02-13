interface Todo {
  id: string;
  content: string;
  isComplete: boolean;
  category: string;
  tags?: string[];
}

let todos: Todo[] = [];

const createList = ({ id, content, isComplete = false, category, tags }) => {
  todos.push({ id, content, isComplete, category, tags });
};

const getLists = (): Todo[] => {
  return [
    {
      id: 'admin',
      content: 'typescript study',
      isComplete: true,
      category: 'study',
      tags: ['coding', 'bootcamp'],
    },
  ];
};

const getList = (id: number): Todo => {
  return {
    id: 'admin',
    content: 'typescript study',
    isComplete: true,
    category: 'study',
    tags: ['coding', 'bootcamp'],
  };
};

const updateList = ({ id, content, isComplete, category, tags }): void => {
  todos = todos.map((todo) =>
    todo.id === id ? { ...todo, content, isComplete, category, tags } : todo
  );
};

// 이 함수에서도 id의 타입이 number라서 변경이 필요합니다.
const deleteList = (id: number): void => {
  todos = todos.filter((todo) => todo.id !== id);
};
