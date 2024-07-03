import React, { useState } from "react";
import Button from "./Button";

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
    <table className="w-full">
      <thead className="text-left">
        <tr>
          <th className="p-3 py-5">Name</th>
          <th className="p-3 py-5">Surname</th>
          <th className="p-3 py-5">Actions</th>
        </tr>
      </thead>
      <tbody className="">
        {authors.map(({ id, name, surname }) => (
          <tr className="border-t border-b border-black/50" key={id}>
            <td className="p-3 py-2">
              {editingAuthorId === id ? (
                <input
                  type="text"
                  className="border"
                  value={editedName}
                  onChange={(e) => setEditedName(e.target.value)}
                />
              ) : (
                name
              )}
            </td>
            <td className="p-3 py-2 ">
              {editingAuthorId === id ? (
                <input
                  type="text"
                  className="border"
                  value={editedSurname}
                  onChange={(e) => setEditedSurname(e.target.value)}
                />
              ) : (
                surname
              )}
            </td>
            <td className="p-3 py-2 mx-auto">
              {editingAuthorId === id ? (
                <Button text="Save" onclick={() => handleSaveClick(id)} />
              ) : (
                <div className="flex gap-3">
                  <Button
                    text="Edit"
                    onclick={() => handleEditClick({ id, name, surname })}
                  />
                  <Button
                    text="Delete"
                    onclick={() => onDelete(id)}
                    dupa="bg-red-400 hover:bg-red-600"
                  />
                </div>
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default AuthorList;
