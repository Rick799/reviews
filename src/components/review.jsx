import { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Review = () => {
  const [index, setIndex] = useState(0); // Initialize the current index to 0
  const { name, company, image, review } = people[index]; // Get the details of the current person
  const checkNumber = (number) => {
    if (number > people.length - 1) {
      return 0;
    }
    if (number < 0) {
      return people.length - 1;
    }
    return number;
  };
  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex); // Ensure the index is within the valid range
    });
  };
  const prevPerson = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex); // Ensure the index is within the valid range
    });
  };
  const randomPerson = () => {
    let randomNumber = Math.floor(Math.random() * people.length);
    if (randomNumber === index) {
      randomNumber = index + 1;
    }
    setIndex(checkNumber(randomNumber)); // Set a random index for a different person
  };

  return (
    <article className="text-center p-5 border-2 rounded-lg shadow-xl shadow-slate-950 hover:shadow-2xl hover:shadow-slate-950 ease-linear duration-300 bg-slate-50">
      <div className="relative w-36 h-36 rounded-full mb-6 mx-auto before:w-full before:h-full before:bg-yellow-400 before:rounded-full before:absolute before:-top-2 before:-right-2">
        <img
          src={image}
          alt={name}
          className="w-full h-full block object-cover rounded-full relative"
        />
        <span className="absolute top-1 -left-1 w-10 h-10 text-yellow-100 bg-teal-300 rounded-full flex justify-center items-center">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="text-xl mb-0.5 font-semibold tracking-widest">{name}</h4>
      <p className="text-md mb-2 capitalize tracking-tighter font-medium text-indigo-700">
        {company}
      </p>
      <p className="mb-10 italic font-medium">{'"' + review + '"'}</p>
      <div className="button-container">
        <button
          className="text-xl text-yellow-400 cursor-pointer my-2 mx-3 ease-linear duration-300 hover:text-indigo-800"
          onClick={prevPerson}
        >
          <FaChevronLeft />
        </button>
        <button
          className="text-xl text-teal-300 cursor-pointer my-2 mx-3 ease-linear duration-300 hover:text-indigo-800"
          onClick={nextPerson}
        >
          <FaChevronRight />
        </button>
      </div>
      <button
        className="capitalize px-3 py-0.5 mt-2 rounded-md bg-indigo-100 text-indigo-500 ease-linear duration-300 hover:bg-indigo-700 hover:text-indigo-100 border-transparent cursor-pointer"
        onClick={randomPerson}
      >
        surprise me
      </button>
    </article>
  );
};

export default Review;
