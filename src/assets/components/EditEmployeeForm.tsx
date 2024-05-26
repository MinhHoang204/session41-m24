import React, { useState } from 'react';

interface Employee {
  id: number;
  name: string;
  dob: string;
  email: string;
  address: string;
  status: 'active' | 'inactive';
}

interface Props {
  employee: Employee;
  onEditEmployee: (employee: Employee) => void;
  onClose: () => void;
}

const EditEmployeeForm: React.FC<Props> = ({ employee, onEditEmployee, onClose }) => {
  const [name, setName] = useState(employee.name);
  const [dob, setDob] = useState(employee.dob);
  const [email, setEmail] = useState(employee.email);
  const [address, setAddress] = useState(employee.address);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !dob || !email) {
      setError('All fields are required');
      return;
    }
    const updatedEmployee: Employee = {
      ...employee,
      name,
      dob,
      email,
      address,
    };
    onEditEmployee(updatedEmployee);
  };

  return (
    <div className="modal">
      <form onSubmit={handleSubmit}>
        <h2>Edit Employee</h2>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <label>
          Date of Birth:
          <input type="date" value={dob} onChange={(e) => setDob(e.target.value)} />
        </label>
        <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <label>
          Address:
          <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
        </label>
        <button type="submit">Save Changes</button>
        <button type="button" onClick={onClose}>Close</button>
      </form>
    </div>
  );
};

export default EditEmployeeForm;