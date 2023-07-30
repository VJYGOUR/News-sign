import React, { useState, useEffect } from "react";
import img from "../Images/illustration-sign-up-mobile.svg";
import icon from "../Images/icon-list.svg";
import big from "../Images/icon-success.svg";
import image from "../Images/illustration-sign-up-desktop.svg";
import "./Pr.css";
function Pr() {
  const [Imagesrc, setImage] = useState(0);
  const [EraseContent, setEraseContent] = useState(true);
  let [Input, setInput] = useState("");
  const ImageHandler = () => {
    if (window.innerWidth >= 700) {
      setImage(image);
    } else {
      setImage(img);
    }
  };
  useEffect(() => {
    ImageHandler();
    const Hnadler = () => {
      ImageHandler();
    };
    window.addEventListener("resize", Hnadler);
  }, []);
  const SubmitHandler = function (event) {
    event.preventDefault();
    console.log(Input);
    Input === "" ? setEraseContent(true) : setEraseContent(false);
  };
  const InputHandler = function (event) {
    event.preventDefault();
    setInput(event.target.value);
  };
  const ShowFirstScreen = function () {
    setEraseContent(true);
  };
  return (
    <div className="min-h fl ">
      {EraseContent ? (
        <>
          <div className="min-h40 m-0 p-0 plgr ">
            <img src={Imagesrc} alt="" className=" ig-c m-0 p-0 imgg " />
          </div>
          <div className="min-h60 pt-4 pb-4 padd-lr or ht scndDiv">
            <h1 className="hbold f-size">Stay updated!</h1>
            <p className="tt">
              Join 60,000+ products managers receiving monthly updates on:
            </p>

            <p className="m-0">
              <img src={icon} /> Product delivery and experience what matters
            </p>

            <p className="m-0">
              <img src={icon} />
              Measuring to ensure updated are a success
            </p>

            <p>
              <img src={icon} /> And much more!
            </p>
            <form onSubmit={SubmitHandler}>
              <label className="mb-1 font">Email Address:</label> <br />
              <input
                type="email"
                className="mb-4 form-control-lg w-100"
                onChange={InputHandler}
                required
              />
              <br />
              <button
                type="submit"
                className=" btn btn-primary pd txt hover-button"
              >
                Subscribe to monthly newsletter
              </button>
            </form>
          </div>
        </>
      ) : (
        <div className="after-click forclick">
          <img src={big} className="clickimg" />
          <h2 className="clickHdn">Thanks for subscribing!</h2>
          <p className="clickp">
            A confirmation email has been sent to vsgh@gmailcom please open it
            click the button inside to confirm the susbscription
          </p>
          <button
            onClick={ShowFirstScreen}
            className="btn btn-primary click-button"
          >
            Dismiss message
          </button>
        </div>
      )}
    </div>
  );
}
export default Pr;
