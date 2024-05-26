import React, {useState} from 'react'
interface AddEmployeeFormProps {
    onAddEmployee: (employee: Omit<Employee, 'id' | 'status'>) => void;
}
interface Employee {
    id: number;
    name: string;
    dob: string;
    email: string;
    address: string;
    status: 'active' | 'inactive';
}
export default function AddEmployeeForm({onAddEmployee}: AddEmployeeFormProps) {
  const [name, setName] = useState('');
  const [dob, setDob] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!name) newErrors.name = 'Họ và tên không được để trống.';
    if (!email) newErrors.email = 'Email không được để trống.';
    if (dob && new Date(dob) > new Date()) newErrors.dob = 'Ngày sinh không được lớn hơn ngày hiện tại.';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      onAddEmployee({ name, dob, email, address });
      setName('');
      setDob('');
      setEmail('');
      setAddress('');
    }
  };
  return (
    <div>
      <h2>Thêm mới nhân viên</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Họ và tên</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
          {errors.name && <span>{errors.name}</span>}
        </div>
        <div>
          <label>Ngày sinh</label>
          <input type="date" value={dob} onChange={(e) => setDob(e.target.value)} />
          {errors.dob && <span>{errors.dob}</span>}
        </div>
        <div>
          <label>Email</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          {errors.email && <span>{errors.email}</span>}
        </div>
        <div>
          <label>Địa chỉ</label>
          <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
        </div>
        <button type="submit">Thêm mới</button>
      </form>
    </div>
  )
}
