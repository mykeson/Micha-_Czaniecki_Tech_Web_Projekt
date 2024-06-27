import React, { useState } from "react";

const AuthorList = ({ authors, onDelete, onEdit }) => {
  const [editingAuthorId, setEditingAuthorId] = useState(null);
  const [editedName, setEditedName] = useState("");
  const [editedSurname, setEditedSurname] = useState("");

  const handleEditClick = (author) => {
    setEditingAuthorId(author.id);
    setEditedName(author.name);
    setEditedSurname(author.surname);
  };

  const handleSaveClick = (id) => {
    onEdit(id, editedName, editedSurname);
    setEditingAuthorId(null);
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Surname</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {authors.map(({ id, name, surname }) => (
          <tr key={id}>
            <td>
              {editingAuthorId === id ? (
                <input
                  type="text"
                  value={editedName}
                  onChange={(e) => setEditedName(e.target.value)}
                />
              ) : (
                name
              )}
            </td>
            <td>
              {editingAuthorId === id ? (
                <input
                  type="text"
                  value={editedSurname}
                  onChange={(e) => setEditedSurname(e.target.value)}
                />
              ) : (
                surname
              )}
            </td>
            <td>
              {editingAuthorId === id ? (
                <button onClick={() => handleSaveClick(id)}>Save</button>
              ) : (
                <button onClick={() => handleEditClick({ id, name, surname })}>
                  Edit
                </button>
              )}
              <button onClick={() => onDelete(id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default AuthorList;
