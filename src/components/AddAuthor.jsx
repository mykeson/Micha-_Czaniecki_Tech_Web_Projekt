export const AddAuthor = ({ onAdd }) => (
  <fieldset className="block w-full">
    <form
      className="grid grid-cols-2 p-5 gap-4 gap-y-10 rounded-lg shadow-md"
      onSubmit={onAdd}
    >
      <div className="flex flex-col justify-start items-start gap-2">
        <label htmlFor="name">Name</label>
        <input
          className="block border w-full p-[0.2em] px-[0.5em]"
          id="name"
          name="name"
          placeholder="Type here..."
        />
      </div>

      <div className="flex flex-col justify-start items-start gap-2">
        <label htmlFor="surname">Surname</label>
        <input
          className="block border w-full p-[0.2em] px-[0.5em]"
          id="surname"
          name="surname"
          placeholder="Type here..."
        />
      </div>

      <div className="col-span-2 flex justify-start items-center">
        <button
          type="submit"
          className="block bg-green-500 px-8 py-1 rounded-md transform hover:scale-[110%] transition-transform duration-[7000]"
        >
          Add Author
        </button>
      </div>
    </form>
  </fieldset>
);
