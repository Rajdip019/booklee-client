import React from "react";
import { useState } from "react";

export default function ProgressChecker() {
  const [Page, setPage] = useState(1);
  function nextPage() {
    if (Page === 4) return;
    setPage((Page = Page + 1));
  }
  return (
    <div>
      {Page != 3 && Page != 4 && (
   
            <div className="w-full text-center">
          <button
            onClick={nextPage}
            className="mx-auto font-bold text-lg bg-skin-lightGreen text-skin-darkGreen p-2 px-2 rounded-xl mb-5"
          >
            Next
          </button>
          </div>

      )}
      {Page == 3 && (
          <div className="w-full text-center">
        <button
          onClick={nextPage}
          className="inline-block font-bold text-lg bg-skin-lightGreen text-skin-darkGreen p-2 px-2 rounded-xl mb-5"
          >
          Submit
        </button>
        </div>
      )}
      {Page == 4 && (
          <div className="w-full text-center">
        <button
          onClick={nextPage}
          className="inline-block font-bold text-lg bg-skin-lightGreen text-skin-darkGreen p-2 px-2 rounded-xl mb-5"
          >
          Submit
        </button>
        </div>
      )}

      {Page === 1 && <PageOne />}
      {Page === 2 && <PageTwo />}
      {Page === 3 && <PageThree />}
      {Page === 4 && <AfterSubmission />}
    </div>
  );
}
function PageOne() {
  return (
    <div className="w-full flex">
      <div className="mx-auto">
        <span className="inline-block bg-skin-lightBlue rounded-full text-skin-darkBlue p-3 mx-3">
          1
        </span>
        <span className="inline-block bg-skin-lightBlue rounded-full text-skin-darkBlue p-3 mx-3">
          2
        </span>
        <span className="inline-block bg-skin-lightBlue rounded-full text-skin-darkBlue p-3 mx-3">
          3
        </span>
      </div>
    </div>
  );
}
function PageTwo() {
  return (
    <div className="w-full flex">
      <div className="mx-auto">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-9 w-9 inline-block bg-skin-lightGreen rounded-full text-skin-darkGreen p-2 text-bold mx-3"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
            clipRule="evenodd"
          />
        </svg>{" "}
        <span className="inline-block bg-skin-lightBlue rounded-full text-skin-darkBlue p-3 text-bold mx-3">
          2
        </span>
        <span className="inline-block bg-skin-lightBlue rounded-full text-skin-darkBlue p-3 text-bold mx-3">
          {" "}
          3
        </span>
      </div>
    </div>
  );
}
function PageThree() {
  return (
    <div className="w-full flex">
      <div className="mx-auto">
      <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-9 w-9 inline-block bg-skin-lightGreen rounded-full text-skin-darkGreen p-2 text-bold mx-3"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
            clipRule="evenodd"
          />
        </svg>{" "}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-9 w-9 inline-block bg-skin-lightGreen rounded-full text-skin-darkGreen p-2 text-bold mx-3"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
            clipRule="evenodd"
          />
        </svg>{" "}
        <span className="inline-block bg-skin-lightBlue rounded-full text-skin-darkBlue p-3 text-bold mx-3">
          3
        </span>
      </div>
    </div>
  );
}
function AfterSubmission() {
  return (
    <div className="w-full flex">
      <div className="mx-auto">
        <span className="text-2xl block text-center mb-5">Thank You</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-9 w-9 inline-block bg-skin-lightGreen rounded-full text-skin-darkGreen p-2 text-bold mx-3"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
            clipRule="evenodd"
          />
        </svg>{" "}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-9 w-9 inline-block bg-skin-lightGreen rounded-full text-skin-darkGreen p-2 text-bold mx-3"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
            clipRule="evenodd"
          />
        </svg>{" "}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-9 w-9 inline-block bg-skin-lightGreen rounded-full text-skin-darkGreen p-2 text-bold mx-3"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
            clipRule="evenodd"
          />
        </svg>{" "}
      </div>
    </div>
  );
}
