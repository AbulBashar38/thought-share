import React from "react";

import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteThought } from "../redux/Thunk/thoughts/deleteThought";

const ThoughtTable = (props) => {
  const dispatch = useDispatch();
  const tableBody = props.tableBody;
  const tableHeads = props.tableHeads;
  return (
    <div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="p-4"></th>
              {tableHeads.map((tableHead) => (
                <th key={tableHead} scope="col" className="px-6 py-3">
                  {tableHead}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {tableBody
              ? tableBody.map((thought) => (
                  <tr
                    key={thought._id}
                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                  >
                    <td className="w-4 p-4">
                      <div className="flex items-center">
                        <input
                          id="checkbox-table-search-1"
                          type="checkbox"
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        />
                        <label
                          htmlFor="checkbox-table-search-1"
                          className="sr-only"
                        >
                          checkbox
                        </label>
                      </div>
                    </td>
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {thought.title}
                    </th>
                    <td className="px-6 py-4">{thought.authorName}</td>
                    <td className="px-6 py-4">
                      {new Date(thought.date).toLocaleDateString("en-us", {
                        weekday: "long",
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </td>
                    {props.action && (
                      <td className="flex items-center px-6 py-4 space-x-3">
                        <Link
                          to={`editThought/${thought._id}`}
                          className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                        >
                          Edit
                        </Link>
                        <button
                          className="font-medium text-red-600 dark:text-red-500 hover:underline"
                          onClick={() => dispatch(deleteThought(thought._id))}
                        >
                          Remove
                        </button>
                      </td>
                    )}
                  </tr>
                ))
              : null}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ThoughtTable;
