import axios from "axios";
import { Form, Formik, useField, useFormikContext } from "formik";

import React, { useState } from "react";
import ReactLoading from "react-loading";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useParams } from "react-router-dom";
import * as Yup from "yup";
import { postThought } from "../redux/Thunk/thoughts/postThought";
import { updateThought } from "../redux/Thunk/thoughts/updateThought";
const TextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="text-red-600">{meta.error}</div>
      ) : null}
    </>
  );
};
const FileInput = ({ label, ...props }) => {
  const { setFieldValue } = useFormikContext();
  const [field, meta] = useField(props);
  const { value, ...rest } = field;
  return (
    <div>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input
        {...rest}
        {...props}
        onChange={(event) => {
          setFieldValue(field.name, event.currentTarget.files[0]);
        }}
      />
      {meta.touched && meta.error ? (
        <div className="text-red-600">{meta.error}</div>
      ) : null}
    </div>
  );
};
const TextArea = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <textarea {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="text-red-600">{meta.error}</div>
      ) : null}
    </>
  );
};

const ThoughtForm = () => {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const thoughts = useSelector((state) => state.thoughts.thoughts);
  const thought = thoughts.find((thought) => thought._id === id);

  const updateBtn =
    "bg-green-700 hover:bg-green-800 focus:bg-green-800 active:bg-blue-900";
  const sendBtn =
    "bg-blue-600 hover:bg-blue-700 focus:bg-blue-700 active:bg-blue-800";
  return (
    <div className="relative">
      {isLoading && (
        <div className="h-screen w-full flex items-center justify-center bg-slate-700 absolute bg-opacity-50">
          <div className=" text-center flex flex-col items-center justify-center ">
            <ReactLoading
              type={"spin"}
              color={"#000000"}
              height={100}
              width={100}
            />
            <h1 className="text-4xl text-black font-semibold pt-5">
              {`Your Thought is ${id ? "updating" : "posting"}`}
            </h1>
          </div>
        </div>
      )}
      <div
        className="h-screen w-full flex items-center justify-center
      "
      >
        <div className="w-1/2">
          <Formik
            initialValues={{
              authorName: `${thought ? thought.authorName : ""}`,
              title: `${thought ? thought.title : ""}`,
              headerImage: `${thought ? thought.headerImage : ""}`,
              thought: `${thought ? thought.thought : ""}`,
              date: `${thought ? thought.date : new Date()}`,
              tags: `${thought ? thought.tags : ""}`,
            }}
            validationSchema={Yup.object({
              authorName: Yup.string().required("please give your name"),
              title: Yup.string().required("please give a title"),

              thought: Yup.string().required("You have to write your thought"),
              tags: Yup.string().required("please give some tags"),
            })}
            onSubmit={async (values, { resetForm }) => {
              setIsLoading(true);
              if (id) {
                dispatch(updateThought(id, values, setIsLoading));
              } else {
                const imgData = new FormData();
                imgData.set("key", "68b6ff580c83ca61463a6d6da0adcd4d");
                imgData.append("image", values.headerImage);
                await axios
                  .post("https://api.imgbb.com/1/upload", imgData)
                  .then((res) => {
                    const newFormData = {
                      ...values,
                      headerImage: res.data.data.display_url,
                    };

                    dispatch(postThought(newFormData, resetForm, setIsLoading));
                  })
                  .catch((err) => console.log(err));
              }
            }}
          >
            <Form>
              <div className="block p-6 rounded-lg shadow-lg bg-white w-full">
                <div className="form-group mb-3">
                  <TextInput
                    label="Name"
                    type="text"
                    className="form-control block
                  w-full
                  px-3
                  py-1.5
                  text-base
                  font-normal
                text-gray-700
                bg-white bg-clip-padding
                  border border-solid border-gray-300
                  rounded
                  transition
                  ease-in-out
                  m-0
                focus:text-gray-700 focus:bg-white focus:border-blue-600           focus:outline-none"
                    id="name"
                    placeholder="Name"
                    name="authorName"
                  />
                </div>
                <div className="form-group mb-3">
                  <TextInput
                    label="Title"
                    type="text"
                    className="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    id="title"
                    placeholder="Give a title"
                    name="title"
                  />
                </div>
                <div className="form-group mb-3">
                  <FileInput
                    label="Header Image"
                    name="headerImage"
                    className="form-control block
                  w-full
                  px-3
                  py-1.5
                  text-base
                  font-normal
                  text-gray-700
                  bg-white bg-clip-padding
                  border border-solid border-gray-300
                  rounded
                  transition
                  ease-in-out
                  m-0
                  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    id="headerImage"
                    type="file"
                    accept="image/*"
                  />
                </div>
                <div className="form-group mb-3">
                  <TextArea
                    className="
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
                    id="thought"
                    label="Your thought"
                    name="thought"
                    rows="3"
                    placeholder="Write your thought here"
                  />
                </div>
                <div className="form-group mb-3">
                  <TextInput
                    label="Tags"
                    type="text"
                    className="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    id="tags"
                    placeholder="Give some tags related to your thoughts"
                    name="tags"
                  />
                </div>
                <button
                  type="submit"
                  className={`w-full px-6 py-2.5  text-white font-medium text-xs leading-tight uppercase rounded shadow-md  hover:shadow-lg  focus:shadow-lg focus:outline-none focus:ring-0  active:shadow-lg transition duration-150 ease-in-out ${
                    id ? updateBtn : sendBtn
                  }`}
                >
                  {id ? "Update" : "Send"}
                </button>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default ThoughtForm;
