import { useState } from 'react'
import './App.css'

function App() {
  return (
    <>
      <nav></nav>
      <div className="maincont">
        <div className="textcont">
          <h1>CONTACT US</h1>
          <p>
            LET’S CONNECT: WE’RE HERE TO HELP, AND WE’D LOVE TO HEAR FROM YOU!
            WHETHER YOU HAVE A QUESTION, COMMENT, OR JUST WANT TO CHAT , YOU CAN
            REACH OUT TO US THROUGH THE CONTACT FORM OF THIS PAGE, OR BY PHONE,
            EMAIL, OR SOCIAL MEDIA.{" "}
          </p>
        </div>
        <div className="content">
          <div className="formcont">
            <div className="btncont">
              <button id="chatbtn">VIA SUPPORT CHAT</button>
              <button id="callbtn">VIA CALL</button>
            </div>
            <button id="mailbtn">VIA MAIL FORM</button>
            <form action="">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
              <label htmlFor="email">Email</label>
              <input type="email" name="email" id="email" />
              <label htmlFor="text">text</label>
              <textarea name="" id="" cols="30" rows="10"></textarea>
              <input type="submit" value="Submit" />
            </form>
          </div>
          <div className="imgcont">
            <img src="/images/contact.svg" alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default App
