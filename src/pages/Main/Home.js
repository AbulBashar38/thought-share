import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ThoughtCard from "../../component/ThoughtCard";
import { filterLatest, filterOldest } from "../../redux/filterReducer/action";
import { loadThoughts } from "../../redux/Thunk/thoughts/fetchThoughts";

const Home = () => {
  const dispatch = useDispatch();
  const thoughts = useSelector((state) => state.thoughts.thoughts);
  const { latestThought, oldestThought } = useSelector((state) => state.filter);
  if (latestThought) {
    thoughts.sort(function (a, b) {
      return new Date(b.date) - new Date(a.date);
    });
  } else if (oldestThought) {
    thoughts.sort(function (a, b) {
      return new Date(a.date) - new Date(b.date);
    });
  }
  useEffect(() => {
    dispatch(loadThoughts());
  }, [dispatch]);
  return (
    <div className="mx-10">
      <div className="flex justify-end gap-5 my-10">
        <button
          onClick={() => {
            dispatch(filterLatest());
          }}
          type="button"
          className="focus:outline-none focus:ring-4  font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-blue-300"
        >
          Latest Thoughts
        </button>
        <button
          onClick={() => {
            dispatch(filterOldest());
          }}
          type="button"
          className="focus:outline-none focus:ring-4  font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 text-gray-900 bg-white border border-gray-300 hover:bg-gray-100 focus:ring-gray-200"
        >
          Oldest Thoughts
        </button>
      </div>
      <div className="grid grid-cols-4 gap-5">
        {thoughts.map((thought) => (
          <ThoughtCard key={thought._id} thought={thought} />
        ))}
      </div>
    </div>
  );
};

export default Home;
