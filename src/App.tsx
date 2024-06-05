"use client";
import { useState } from "react";

export default function Page() {
  const [noCount, setNoCount] = useState(0); // State to track the number of "No" clicks
  const [yesPressed, setYesPressed] = useState(false); // State to check if "Yes" is pressed
  const yesButtonSize = noCount * 20 + 16; // Dynamically adjust the "Yes" button size

  // Function to handle "No" button clicks
  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  // Function to get the appropriate text for the "No" button based on click count
  const getNoButtonText = () => {
    const phrases = [
      "No",
      "Are you sure?",
      "What if I say that we can make it together in the life?",
      "SOCHLEEEEEEEEEEEEEEEEEEEE KUTTIIIII",
      "What if some chocolates , a kiss and a hug?",
      "What about with choWmin wo bhi Paneer wali?",
      "Ab bhi nahi to thappad , okay?",
      "But :*(",
      "I am going to die ( after my bhudhapa with you )",
      "Yep I'll be dead",
      "ok I am hurt",
      "Mujhe baat nahi krni",
      "Nahi hi kerunga:((((",
      "BYYYYYYYYYYYYYYYYYYYYYYYEEEEEEEEEE",
      "Ab sorry bol and tap on YES",
      "No :(",
    ];

    return phrases[noCount % phrases.length]; // Use modulo to loop through the phrases
  };

  return (
    <div className="-mt-16 flex h-screen flex-col items-center justify-center">
      {yesPressed ? (
        <>
          <img src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif" alt="Bear Kiss" />
          <div className="my-4 text-4xl font-bold">WOOOOOO!!! I love you pookie!! ;))</div>
        </>
      ) : (
        <>
          <img
            className="h-[200px]"
            src="https://gifdb.com/images/high/cute-love-bear-roses-ou7zho5oosxnpo6k.gif"
            alt="Cute Love Bear"
          />
          <h1 className="my-4 text-4xl">Will you be mine lady?</h1>
          <div className="flex items-center">
            <button
              className={`mr-4 rounded bg-green-500 px-4 py-2 font-bold text-white hover:bg-green-700`}
              style={{ fontSize: yesButtonSize }}
              onClick={() => setYesPressed(true)}
            >
              Yes
            </button>
            <button
              onClick={handleNoClick}
              className="rounded bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-700"
            >
              {getNoButtonText()}
            </button>
          </div>
        </>
      )}
    </div>
  );
}
