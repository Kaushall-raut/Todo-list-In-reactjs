import { useEffect, useState } from "react";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";

export const Todo = () => {
  var dat = new Date();
  let timee = dat.toLocaleTimeString();
  var currentDate = dat.toLocaleDateString();
  // !hooks section starts from here

  const [submitt, changeSubmit] = useState([]);
  const [inputt, change] = useState("");
  const [currentTime, setTime] = useState("");

  useEffect(() => {
    setTime(`${currentDate}-${timee}`);
  }, [currentTime]);
  //   !hooks section ends

  // ?function section starts

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputt) return; //* to check whether user is entering empty data

    if (submitt.includes(inputt)) return change(""); //*to check whether the item/string is already present

    changeSubmit((prev) => [...prev, inputt]);
    console.log("render");

    change("");
    // console.log(e.target.value);
  };
  const handleChange = (e) => {
    change(e.target.value);
  };
  // ? function section ends

  return (
    <section>
      <header>
        <h1>ToDo List</h1>
      </header>
      <section>{currentTime}</section>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={handleChange}
          autoComplete="off"
          value={inputt}
        />
        <button type="submit">Add</button>
      </form>
      <section>
        <ul>
          {submitt.map((value, index) => {
            return (
              <li key={index}>
                {value}
                <button>
                  <MdDelete />
                </button>

                <button>
                  <FaEdit />
                </button>
              </li>
            ); //*  So if you use js function or methods then you have to return it otherwise it will not display the output on browser why you need to return it because you are using javascript map function so without returning the value you can't access it or retrieved the value

            //! so what is the work of key in <li> tag

            //*  react requires key to identify the list of items in array so it doesn't update the wrong element
            // * the above will also work without key but its good coding ethics to provide key in li tag  and sometimes it also gives error if you don't pass key in li tag (its depends on version)
          })}
        </ul>
      </section>
    </section>
  );
};
