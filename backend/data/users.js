import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'Admin User',
    email: 'admin@email.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Basil Jiji',
    email: 'basil@email.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: false,
  },
  {
    name: 'Lucy D',
    email: 'lucy@email.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: false,
  },
];

export default users;