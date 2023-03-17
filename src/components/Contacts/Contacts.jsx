import React from "react";

const Contacts = () => {
  return (
    <center className="my-5">
      <h2 style={{ fontFamily: "Dancing Script" }}>Contact details</h2>
      <div className="d-flex justify-content-around my-5">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <img
            width={50}
            style={{ marginLeft: "63px" }}
            src="https://cdn.icon-icons.com/icons2/2631/PNG/512/gmail_new_logo_icon_159149.png"
            alt=""
          />
          <p style={{ fontWeight: "700" }}>asanovna.7477@gmail.com</p>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <img
            width={45}
            style={{ marginLeft: "53px" }}
            src="https://cdn.icon-icons.com/icons2/41/PNG/128/phone_7135.png"
            alt=""
          />
          <p style={{ fontWeight: "700" }}>+(996)703 96 98 16</p>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <img
            width={50}
            src="https://cdn3.iconfinder.com/data/icons/sociocons/256/github-sociocon.png"
            alt=""
          />
          <a rel="stylesheet" href="https://github.com/saikal-98">
            GitHub
          </a>
        </div>
      </div>
    </center>
  );
};

export default Contacts;
