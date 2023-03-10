import React from "react";
import { Link } from "react-router-dom";
import { TfiWrite } from "react-icons/tfi";
import { FaClipboardList } from "react-icons/fa";
const Sidebar = () => {
  return (
    <div className="mx-10 my-10 text-white">
      <div>
        <h2 className="text-xl font-bold">Dashboard</h2>
      </div>
      <div className="my-10">
        <ul className="pt-2 pb-4 space-y-1 text-sm">
          <li className="rounded-sm my-2 hover:bg-slate-100 hover:text-black hover:rounded-xl">
            <Link
              to="/home"
              className="flex items-center p-2 space-x-3 rounded-md"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 "
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
              <span className="">Home</span>
            </Link>
          </li>
          <li className="rounded-sm hover:bg-slate-100 hover:text-black hover:rounded-xl">
            <Link
              to="writeThought"
              className="flex items-center p-2 space-x-3 rounded-md"
            >
              <TfiWrite size={20} />
              <span className="">Write your Thought</span>
            </Link>
          </li>
          <li className="rounded-sm hover:bg-slate-100 hover:text-black hover:rounded-xl">
            <Link
              to="allThought"
              className="flex items-center p-2 space-x-3 rounded-md"
            >
              <FaClipboardList size={20} />
              <span className="">All Thoughts</span>
            </Link>
          </li>
          <li className="rounded-sm hover:bg-slate-100 hover:text-black hover:rounded-xl">
            <a
              href="#"
              className="flex items-center my-2 p-2 space-x-3 rounded-md"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 "
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <span>Settings</span>
            </a>
          </li>
          <li className="rounded-sm hover:bg-slate-100 hover:text-black hover:rounded-xl">
            <Link to="#" className="flex items-center p-2 space-x-3 rounded-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 "
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                />
              </svg>
              <span>Logout</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
