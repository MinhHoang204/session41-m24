import React from 'react'
import Task from './Task';
interface TaskListProps {
    tasks: TaskType[];
    onToggle: (id: number) => void;
    onEdit: (id: number) => void;
    onDelete: (id: number) => void;
}
export interface Task {
    id: number;
    name: string;
    completed: boolean;
}
export interface State {
    tasks: Task[];
}
export default function TaskList({tasks, onToggle, onEdit, onDelete}: TaskListProps) {
  return (
    <div className="task-list">TaskList
        {tasks.map(task => (
        <Task
          key={task.id}
          task={task}
          onToggle={onToggle}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </div>
  )
}
