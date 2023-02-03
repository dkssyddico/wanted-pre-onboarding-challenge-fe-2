/**
 * @typedef {Object} Tag - Tag type
 * @property {string} id - id of tag
 * @property {string} name - name of tag
 */

/**
 * @typedef {Object} Todo - Todo type
 * @property {string} id - id of todo
 * @property {string} content - content of todo
 * @property {boolean} isComplete - completion status of todo
 * @property {string} category - category of todo
 * @property {Tag[]} tags - tags of todo
 */

/**
 * Adds a new todo
 * @param {Object} todoInfo Properties of a new todo
 * @param {string} todoInfo.content content of a new todo
 * @param {string} todoInfo.category category of a new todo
 * @param {string[]} [todoInfo.tags] tags array of a new todo
 */

function addTodo(todoInfo) {}

/**
 * Inquires all todos
 * @returns {Todo[]} todosArray - An array that contains all todos
 */

function getAllTodos() {}

/**
 * Inquires a todo by id
 * @param {string} todoId
 * @returns {Todo[]} todoArray - An array that contains id-searched todo
 */

function getTodoById(todoId) {}

/**
 * Updates properties of todo found by todo's id except todo's id
 * @param {Object} todoInfo updated properties of todo
 * @param {string} todoInfo.id - id of todo
 * @param {string} [todoInfo.content] - content of todo
 * @param {boolean} [todoInfo.isComplete] - completion status of todo
 * @param {string} [todoInfo.category] - category of todo
 * @param {Tag[]} [todoInfo.tags] - tags of todo
 */

function updateTodo(todoInfo) {}

/**
 * Updates specific tag of todo found by todo's id
 * @param {string} todoId
 */

function updateTag(todoId) {}

/**
 * Deletes a todo found by todo's id
 * @param {string} todoId
 */

function deleteTodoById(todoId) {}

/**
 * Deletes all todos
 */

function deleteAllTodos() {}

/**
 * Deletes a specific tag in todo found by todo's id
 * @param {Object} tagInfo - tag information which will be deleted
 * @param {string} tagInfo.todoId
 * @param {string} tagInfo.tagId
 */

function deleteTagById(tagInfo) {}

/**
 * Deletes all tags in todo found by todo's id
 * @param {string} todoId
 */

function deleteAllTagsById(todoId) {}
