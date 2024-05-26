import React from 'react'
interface Task {
    id: number;
    name: string;
    completed: boolean;
}
export interface State {
    tasks: Task[];
}
export interface TaskProps {
    task: TaskType;
    onToggle: (id: number) => void;
    onEdit: (id: number) => void;
    onDelete: (id: number) => void;
}
export default function Task({task, onToggle, onEdit, onDelete,}: TaskProps) {
  return (
    <div className="task">
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => onToggle(task.id)}
      />
      <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
        {task.name}
      </span>
      <button onClick={() => onEdit(task.id)}>✏️</button>
      <button onClick={() => onDelete(task.id)}>🗑️</button>
    </div>
  )
}
