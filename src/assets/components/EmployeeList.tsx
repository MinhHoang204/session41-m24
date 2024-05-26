import React from 'react'
interface EmployeeListProps {
    employees: Employee[];
    onEdit: (id: number) => void;
    onDelete: (id: number) => void;
    onToggleStatus: (id: number) => void;
}
interface Employee {
    id: number;
    name: string;
    dob: string;
    email: string;
    address: string;
    status: 'active' | 'inactive';
}
export default function EmployeeList({employees, onDelete, onEdit, onToggleStatus}: EmployeeListProps) {
  return (
    <div>
      <h2>Nhân viên</h2>
      <table>
        <thead>
          <tr>
            <th>STT</th>
            <th>Họ và tên</th>
            <th>Ngày sinh</th>
            <th>Email</th>
            <th>Địa chỉ</th>
            <th>Trạng thái</th>
            <th>Chức năng</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee, index) => (
            <tr key={employee.id}>
              <td>{index + 1}</td>
              <td>{employee.name}</td>
              <td>{employee.dob}</td>
              <td>{employee.email}</td>
              <td>{employee.address}</td>
              <td>{employee.status === 'active' ? 'Đang hoạt động' : 'Ngừng hoạt động'}</td>
              <td>
                <button onClick={() => onToggleStatus(employee.id)}>
                  {employee.status === 'active' ? 'Chặn' : 'Bỏ chặn'}
                </button>
                <button onClick={() => onEdit(employee.id)}>Sửa</button>
                <button onClick={() => onDelete(employee.id)}>Xóa</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
