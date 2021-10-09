
  section {
    position: relative;
    min-height: 100vh;
    background: #6baeb1;
    display:flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
  
  }
  
  
  section .container {
  position: relative;
  width: 800px;
  height: 700px;
  background:#fff;
  box-shadow: 0 15 px 50 px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  }
  section .container .user  {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
  }
  section .container .user .imgBx {
    position: relative;
    width: 50%;
    height: 100%;
    background: #6baeb1;
    transition: 0.5s;
  }
  .imgBx .copy {
    color: white;
    font-size: 34px;
    text-align: center;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    z-index: 2;
    position: absolute;
    margin-top: 230px;
    margin-left: 69px;

   
  }
  section .container .user .imgBx img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  section .container .user .formBx {
    position: relative;
    width: 50%;
    height: 100%;
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 40px;
    transition: 0.5s;
  }
  section .container .user .formBx form h2 {
    font-size: 25px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 2px;
    text-align: center;
    width: 100%;
    margin-bottom: 10px;
    color: #555;
  }
  section .container .user .formBx form input {
    position: relative;
    width: 100%;
    padding: 10px;
    background: #f5f5f5;
    color: #333;
    border: none;
    outline: none;
    box-shadow: none;
    margin: 8px 0;
    font-size: 14px;
    letter-spacing: 1px;
    font-weight: 300;
  }
  section .container .user .formBx form input[type="submit"] {
    max-width: 100px;
    background: #6baeb1;
    color: #fff;
    cursor: pointer;
    font-size: 14px;
    font-weight: 500;
    letter-spacing: 1px;
    transition-duration: 0.5s;
  }
  
  /* section .container .signupBx{
    pointer-events: none;
  }
  section .container.active .signupBx{
    pointer-events: initial;
  }
  section .container .signupBx .formBx {
  
    left: 100%;
  }
  section .container.active .signupBx .formBx{
    left: 0;
  }
  section .container .signupBx .imgBx {
    left: -100%;
  }
  section .container.active .signupBx .imgBx{
    left: 0;
  }
  
  section .container .signinBx .formBx {
  
    left: 0%;
  }
  section .container.active .signinBx .formBx{
    left: 100%;
  }
  section .container .signinBx .imgBx {
    left: 0;
  }
  section .container.active .signinBx .imgBx{
    left: -100%;
  } */
  @media (max-width:768px) {
    section .container{
        max-width: 400px;
    }
    section .container .imgBx{
        display: none;
    }
    section .container .user .formBx {
        width: 100%;
    }
  }