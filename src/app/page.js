"use client";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [modal, setModal] = useState(false);
  const [buttonClicked, setButtonClicked] = useState(false);
  const [yesButtonClicked, setYesButtonClicked] = useState(false);
  const [noButtonClickCount, setNoButtonClickCount] = useState(20);
  const [congratsAnimation, setCongratsAnimation] = useState(false);
  const modalHandle = () => {
    setModal(!modal);
  };

  const handleYesButtonClick = () => {
    setCongratsAnimation(!congratsAnimation);
    setModal(false);
  };

  const handleNoButtonClick = () => {
    setNoButtonClickCount(noButtonClickCount + 2);

    if (!yesButtonClicked) {
      setYesButtonClicked(!yesButtonClicked);
    }
  };
  return (
    <main className=" flex justify-center w-full">
      <div
        className=" bg-cover flex items-center  flex-col w-[400px] h-[844px]"
        style={{
          backgroundImage:
            "url('https://i.pinimg.com/564x/54/67/4a/54674a83dc8ea08d2641bee45b9d2ba3.jpg')",
          backgroundRepeat: "no-repeat",
        }}
      >
        <p className="text-[34px] font-[600] mt-8 text-black animated-text">
          Hey there?
        </p>

        <div className="flex flex-col gap-3 items-center mt-[400px]">
          <p className="text-[24px]  text-center font-[600] text-black animated-text2">
            Are you Jaahna?
            <br />
            Do you wanna see Wonder
          </p>
          <button onClick={modalHandle} className="btn animated-text2">
            Click me Jaahna
          </button>
        </div>
        {}
        {modal && (
          <div className="bg-black bg-opacity-70 w-full h-full absolute top-0 left-0 flex items-center justify-center">
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <p className="text-xl font-semibold">
                Nahh it's not Wonder <br /> it's my heart
              </p>
              <p className="text-xl font-semibold">Will you be mine?</p>

              <div className="flex justify-center mt-4 space-x-3">
                <button
                  style={{
                    padding: `${
                      yesButtonClicked ? `${noButtonClickCount}px` : ""
                    }`,
                  }}
                  className={`bg-[#e91e63] text-white font-semibold rounded py-2 px-4 transition duration-300 ease-in-out transform hover:scale-105`}
                  onClick={() => {
                    handleYesButtonClick();
                  }}
                >
                  yes😍
                </button>
                <button
                  className="bg-black text-white font-semibold rounded py-2 px-4 "
                  onClick={() => {
                    handleNoButtonClick();
                  }}
                >
                  {yesButtonClicked ? "are you sure ?" : " no🥲"}
                </button>
              </div>
            </div>
          </div>
        )}
        {congratsAnimation && (
          <div className="bg-black bg-opacity-60 w-full h-full absolute top-0 left-0 flex items-center justify-center">
            <div className="heart-animation flex mb-40 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-20 w-20 text-red-500"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 17.108l-1.717-1.51C3.088 11.26.29 7.44.29 4.817 0 2.167 2.2 0 4.9 0 6.45 0 7.977.853 10 3.101 12.023.853 13.55 0 15.1 0 17.8 0 20 2.167 20 4.817c0 2.623-2.797 6.443-7.993 10.781L10 17.108z"
                  clipRule="evenodd"
                />
              </svg>
              <div className="bg-white w-[300px] congrats-animation p-8 rounded-lg shadow-lg text-center">
                <p className="">
                  <span>you got my heart you did it </span> <br></br>
                  za bayrllaa hu {"<3"} chmg nmg huleeged bhr ni yah argaa oldgu
                  tgd bodj bgd chddg yumara l hiile hu hha <br /> from:Munkhjin
                </p>
                <a href="https://youtu.be/UBgiyAd1vgA">
                  <button className="bg-black mt-5 text-white font-semibold rounded py-2 px-4 button ">
                    nmg dar 💘
                  </button>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
