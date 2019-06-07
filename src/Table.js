import React from 'react';

const TableRow = ({ firstName, lastName, middleName, email, title }) => (
  <tr>
    <td>{firstName}</td>
    <td>{lastName}</td>
    <td>{middleName}</td>
    <td>{email}</td>
    <td>{title}</td>
  </tr>
);

const Title = ({ users }) => (
  <table>
    <thead>
      <tr>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Middle Name</th>
        <th>Email</th>
        <th>Title</th>
      </tr>
    </thead>
    <tbody>
      {users.map(user => (
        <TableRow {...user} key={user.id} />
      ))}
    </tbody>
  </table>
);

export default Title;
