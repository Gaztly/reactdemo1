import React from "react";
import "./GreetUser.css";

const GreetUser = ({ name }) => {
    const showAlert = () => alert("Header clicked");

    return (
        <h1 className="my-header" onClick={() => showAlert()}>
            Welcome to my website! {name}
        </h1>
    );
};

export default GreetUser;
