const loginForm = document.getElementById("login-form");
const signupForm = document.getElementById("signup-form");

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = new FormData(e.target);
  const user = {
    username: data.get("username"),
    password: data.get("password"),
  };
  fetch('/user/login', {
      method: "POST",
      headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
  }).then(res => {
      console.log(res.status)
      if (res.status === 403) {
          alert("invalid credentials, please try again")
      }
      else {
          window.location.replace("/trips")
      }
  }).catch(err => console.log(err))
});

signupForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = new FormData(e.target);
  const user = {
    username: data.get("username"),
    email: data.get("email"),
    password: data.get("password"),
  };
  fetch('/user/signup', {
      method: "POST",
      headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
  }).then(res => {
      console.log(res.status)
      if (res.status === 403) {
          alert("invalid option, please try again")
      }
      else {
          alert("Success! Please log in")
      }
  }).catch(err => console.log(err))
});

