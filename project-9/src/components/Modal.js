import React from "react";

const Modal = ({ open, onClose, formik, onOpen, setOpen, isUpdate }) => {
  console.log("onClose", onClose);
  return (
    <div className=" ">
      <div className="absolute bg-white rounded-md z-50 top-32 left-10 right-10 shadow-white shadow-md ">
        <div className=" flex justify-end mr-4">
          <img
            src="https://icons.veryicon.com/png/o/miscellaneous/medium-thin-linear-icon/cross-23.png"
            alt="cross-icon"
            className="w-[8%]"
            onClick={onClose}
          ></img>
        </div>
        <div className="flex flex-col m-auto w-[80%] mx-auto">
          <form onSubmit={formik.handleSubmit} name="form" id="form">
            <label htmlFor="name" className="flex flex-col mb-2 ">
              {" "}
              Name
              <input
                type="text"
                onChange={formik.handleChange}
                value={formik.values.name}
                name="name"
                id="name"
                className="border-2 border-black shadow-md rounded-sm pl-4 p-1"
              ></input>
            </label>

            <label htmlFor="email" className="flex flex-col mb-4">
              Phone no
              <input
                type="number"
                onChange={formik.handleChange}
                value={formik.values.email}
                name="email"
                id="email"
                className="border-2 border-black rounded-sm pl-4 p-1 shadow-md
        "
              ></input>
            </label>
            <div className=" mb-2 flex justify-end mr-10">
              <button
                type="submit"
                className="border-blue-700 border-2 bg-blue-700 rounded-lg py-1 px-2 text-white "
              >
                {isUpdate ? "update" : "add"} contact
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="backdrop-blur h-full w-full absolute top-0 bottom-0 opacity-80 right-0"></div>
    </div>
  );
};

export default Modal;
