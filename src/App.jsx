import React, { useState, useEffect } from "react";
import AuthorList from "./components/AuthorList";
import { AddAuthor } from "./components/AddAuthor";

const API = "http://localhost:8000";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`${API}/authors`)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      })
      .catch((error) => console.error("Error:", error));
  }, []);

  const onDeleteAuthorClickHandler = (authorID) => {
    fetch(`${API}/authors/${authorID}`, {
      method: "DELETE",
    }).then((res) => {
      if (res.status === 200) {
        setData((prevData) =>
          prevData.filter((author) => author.id !== authorID)
        );
      }
    });
  };

  const onAddAuthorSubmitHandler = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const surname = event.target.surname.value;

    fetch(`${API}/authors`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, surname }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.id) {
          setData((prevData) => [...prevData, data]);
        }
      });
  };

  const onEditAuthorClickHandler = (id, name, surname) => {
    fetch(`${API}/authors/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, surname }),
    })
      .then((response) => response.json())
      .then((updatedAuthor) => {
        setData((prevData) =>
          prevData.map((author) =>
            author.id === updatedAuthor.id ? updatedAuthor : author
          )
        );
      })
      .catch((error) => console.error("Error:", error));
  };

  return (
    <main className="flex justify-start items-center gap-14 flex-col w-full max-w-4xl mx-auto py-14 px-10">
      <h1 className="text-2xl">TABLE of AUTHORS</h1>
      <AddAuthor onAdd={onAddAuthorSubmitHandler} />
      <AuthorList
        authors={data}
        onDelete={onDeleteAuthorClickHandler}
        onEdit={onEditAuthorClickHandler}
      />
    </main>
  );
}

export default App;
