import { useState } from "react";

function App() {
  const [todo, setTodo] = useState([]);
  const [newdata, setNewdata] = useState("");

  const addTodo = (e) => {
    e.preventDefault();
    if (newdata === "") {
      alert("todo can't be empty");
      return;
    }

    const newTodo = { data: newdata };
    setTodo([...todo, newTodo]);
    setNewdata("");
  };

  const removethis = (targetindex) => {
    setTodo((prevtodo) =>
      prevtodo.filter((items, index) => index !== targetindex)
    );
  };

  return (
    <>
      <div className="min-h-screen bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 flex items-center justify-center p-4">
        <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl p-8 space-y-8">
          
          <form onSubmit={addTodo} className="flex gap-4 items-center">
            <input
              type="text"
              placeholder="Enter your todo"
              value={newdata}
              onChange={(e) => setNewdata(e.target.value)}
              className="flex-1 p-4 border-2 border-gray-300 rounded-xl shadow-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-purple-600 text-white rounded-xl shadow-md hover:bg-purple-700 transition transform hover:scale-105"
            >
              Add Todo
            </button>
          </form>

          <ul className="space-y-4">
            {todo.map((item, index) => (
              <li
                key={index}
                className="flex items-center justify-between p-4 bg-white rounded-xl shadow-md hover:shadow-xl transition transform hover:scale-105"
              >
                <span className="text-lg font-semibold text-gray-800 break-words flex-1 max-w-[calc(100%-96px)]">
                  {item.data}
                </span>
                <button
                  onClick={() => removethis(index)}
                  className="px-4 py-2 bg-red-500 text-white rounded-xl shadow-md hover:bg-red-600 transition transform hover:scale-105 w-24"
                >
                  DELETE
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;
