import {useState} from 'react'
import EmployeeList from './assets/components/EmployeeList'
import AddEmployeeForm from './assets/components/AddEmployeeForm'
import "./App.css"
import EditEmployeeForm from './assets/components/EditEmployeeForm';
import ConfirmationModal from './assets/components/ConfirmationModal';
interface Employee {
  id: number;
  name: string;
  dob: string;
  email: string;
  address: string;
  status: 'active' | 'inactive';
}
export default function App() {
  const [employees, setEmployees] = useState<Employee[]>([
    { id: 1, name: 'Nguyễn Văn A', dob: '1990-02-28', email: 'nvana@gmail.com', address: 'Ba Đình, Hà Nội', status: 'active' },
    { id: 2, name: 'Trần Thị B', dob: '1985-07-15', email: 'ttb@gmail.com', address: 'Cầu Giấy, Hà Nội', status: 'inactive' },
  ]);

  const addEmployee = (employee: Omit<Employee, 'id' | 'status'>) => {
    setEmployees([
      ...employees,
      {
        ...employee,
        id: employees.length + 1,
        status: 'active'
      }
    ]);
  };

  const editEmployee = (id: number) => {
    // handle edit employee
  };

  const deleteEmployee = (id: number) => {
    setEmployees(employees.filter(employee => employee.id !== id));
  };

  const toggleStatus = (id: number) => {
    setEmployees(
      employees.map(employee =>
        employee.id === id ? { ...employee, status: employee.status === 'active' ? 'inactive' : 'active' } : employee
      )
    );
  };
  return (
    <div>App
      <AddEmployeeForm onAddEmployee={addEmployee} />
      <EmployeeList employees={employees} onEdit={editEmployee} onDelete={deleteEmployee} onToggleStatus={toggleStatus} />
      <EditEmployeeForm></EditEmployeeForm>
      <ConfirmationModal></ConfirmationModal>
    </div>
  )
}
