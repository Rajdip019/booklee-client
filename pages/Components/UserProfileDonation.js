import React from "react";
import { Avatar, AvatarBadge } from "@chakra-ui/react";
const UserProfileDonation = (props) => {
  return (
    <>
      {/* //------------------------For Laptop Size-------------------------------------- */}
      <div className="hidden lg:block">
        <div className="h-96 w-[calc(100%-300px)]">
          <div
            className="bg-Donation-bg"
            style={{
              height: "350px",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          >
            <div className="w-full text-center items-center pt-14">
              <Avatar

              className="w-28 h-20"
                name={props.name}
                borderRadius="100%"

                name={props.name}
                className="rounded-full"

                src={props.img}

              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-8 bg-skin-lightGreen text-skin-darkGreen rounded-2xl mt-16"
                  viewBox="0 0 20 20"
                >
                  <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                </svg>
                <AvatarBadge boxSize="1.25em" src="_square.png" />
              </Avatar>
              <h3 className="text-white">{props.name}</h3>
              <h4 className="text-white">{props.location}</h4>
            </div>
          </div>
        </div>
      </div>

      {/* //------------------------For Mobile Size-------------------------------------- */}

      <div className="block lg:hidden">
        <div
          className="bg-DonationM-bg"
          style={{
            height: "230px",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <div className="text-center">
            <Avatar
              name={props.name}

              className="w-28 h-20"
              borderRadius="100%"

              className="rounded-full"

              src={props.img}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-8 bg-skin-lightGreen text-skin-darkGreen mt-20 rounded-2xl"
                viewBox="0 0 20 20"
              >
                <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
              </svg>
            </Avatar>
            <h3 className="text-white">Jon Hatson</h3>
            <h4 className="text-white">Gurgaon,New Delhi, India</h4>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserProfileDonation;
