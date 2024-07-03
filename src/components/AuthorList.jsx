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
    <section>
      <header className="grid grid-cols-[1fr_1fr_30%] font-bold text-lg">
        <span className="p-3">Name</span>
        <span className="p-3">Surname</span>
        <span className="text-right p-3">Actions</span>
      </header>
      <div>
        {authors.map(({ id, name, surname }) => (
          <div
            className="grid grid-cols-[1fr_1fr_30%] border-t border-black/20 "
            key={id}
          >
            <div className="p-3 py-2">
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
            </div>
            <div className="p-3 py-2 ">
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
            </div>
            <div className="p-3 py-2 flex justify-end">
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
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AuthorList;
