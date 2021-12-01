import React from "react";
import { Avatar } from "@chakra-ui/react";
const UserProfileOthers = (props) => {
  return (
    <>
      {/* //------------------------For Laptop Size-------------------------------------- */}
      <div className="hidden lg:block">
        <div className="h-96 w-[calc(100%-300px)]">
          <div
            className="  bg-Educational-bg"
            style={{
              height: "350px",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          >
            <div className="w-full text-center items-center pt-14">
              <Avatar
                className="w-36 h-28"
                name={props.name}
                src={props.img}
                borderRadius="100%"

              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-8 bg-skin-lightBlue text-skin-darkBlue mt-16 rounded-2xl"
                  viewBox="0 0 20 20"
                >
                  <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                </svg>
              </Avatar>
              <h3 className="text-white text-xl font-semibold">{props.name}</h3>
              <h4 className="text-white">{props.location}</h4>
            </div>
          </div>
        </div>
      </div>

      {/* //------------------------For Mobile Size-------------------------------------- */}

      <div className="block lg:hidden h-auto">
        <div
          className=" bg-EducationM-bg"
          style={{
            height: "230px",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <div className="text-center">
            <Avatar name={props.name} src={props.img} className="w-28 h-20 mt-6" borderRadius="100%">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-8 bg-skin-lightBlue text-skin-darkBlue mt-20 rounded-2xl"
                viewBox="0 0 20 20"
              >
                <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
              </svg>
            </Avatar>
            <h3 className="text-white text-xl font-semibold">{props.name}</h3>
            <h4 className="text-white">{props.location}</h4>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserProfileOthers;
