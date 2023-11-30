import React from "react";
import { NamePage } from "./NamePage";
import { EmailPage } from "./EmailPage";
import { useEffect } from "react";
import { useState } from "react";
import { EnquirePage } from "./EnquirePage";
import { MessagePage } from "./MessagePage";

export const BannerContact = () => {
  const [mode, setMode] = useState(localStorage.getItem("mode"));

  useEffect(() => {
    // Clear the contactEmail from local storage when the component mounts
  }, []);

  const handleChangeMode = (newMode) => {
    setMode(newMode);
    localStorage.setItem("mode", newMode);
  };

  return (
    <>
      <div className="banner-contact">
        <div className="title container">
          <h2 className="text-white fw-bold">Reach Out Today</h2>
        </div>
      </div>

      {!mode ? (
        <NamePage handleChangeMode={handleChangeMode} />
      ) : mode === "email" ? (
        <EmailPage handleChangeMode={handleChangeMode} />
      ) : mode === "enquire" ? (
        <EnquirePage handleChangeMode={handleChangeMode} />
      ) : mode === "message" ? (
        <MessagePage handleChangeMode={handleChangeMode} />
      ) : (
        <></>
      )}
    </>
  );
};
