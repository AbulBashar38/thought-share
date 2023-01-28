import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ThoughtTable from "../../component/ThoughtTable";
import { loadThoughts } from "../../redux/Thunk/thoughts/fetchThoughts";

const AllThought = () => {
  const dispatch = useDispatch();
  const thoughts = useSelector((state) => state.thoughts.thoughts);

  useEffect(() => {
    dispatch(loadThoughts());
  }, [dispatch]);
  const tableHeads = ["Thought Title", "Author Name", "Date", "Action"];

  return (
    <div>
      <ThoughtTable tableHeads={tableHeads} tableBody={thoughts} action />
    </div>
  );
};

export default AllThought;
