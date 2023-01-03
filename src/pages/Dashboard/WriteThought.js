import axios from "axios";
import { Form, Formik, useField, useFormikContext } from "formik";

import React, { useState } from "react";
import ReactLoading from "react-loading";
import * as Yup from "yup";
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

const WriteThought = () => {
  const [isLoading, setIsLoading] = useState(false);
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
              Your Thought is posting
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
              authorName: "",
              title: "",
              headerImage: "",
              thought: "",
              date: new Date(),
              tags: "",
            }}
            validationSchema={Yup.object({
              authorName: Yup.string().required("please give your name"),
              title: Yup.string().required("please give a title"),
              // headerImage: Yup.string().required("please upload a image"),
              thought: Yup.string().required("You have to write your thought"),
              tags: Yup.string().required("please give some tags"),
            })}
            onSubmit={async (values, { resetForm }) => {
              setIsLoading(true);
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
                  axios
                    .post("http://localhost:5000/thought", {
                      thought: newFormData,
                    })
                    .then((res) => {
                      if (res.data.acknowledged) {
                        resetForm({
                          authorName: "",
                          title: "",
                          headerImage: "",
                          thought: "",
                          date: "",
                          tags: "",
                        });
                        setIsLoading(false);
                      }
                    })
                    .catch((err) => console.log(err));
                })
                .catch((err) => console.log(err));
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
                  className="
      w-full
      px-6
      py-2.5
      bg-blue-600
      text-white
      font-medium
      text-xs
      leading-tight
      uppercase
      rounded
      shadow-md
      hover:bg-blue-700 hover:shadow-lg
      focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-blue-800 active:shadow-lg
      transition
      duration-150
      ease-in-out"
                >
                  Send
                </button>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default WriteThought;
