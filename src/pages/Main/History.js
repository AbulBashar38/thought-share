import React from "react";
import { useSelector } from "react-redux";
import ThoughtTable from "../../component/ThoughtTable";

const History = () => {
  const tableHeads = ["Thought Title", "Author Name", "Date"];
  const history = useSelector((state) => state.history.history);
  return (
    <div>
      <h1 className="text-center text-4xl font-bold my-5">
        Your Reading History
      </h1>
      <ThoughtTable tableHeads={tableHeads} tableBody={history} />
    </div>
  );
};

export default History;
