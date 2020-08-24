const login = document.querySelector(".login");
const signup = document.querySelector(".signup");
const personal = document.querySelector(".personal");
const professional = document.querySelector(".professional");
const education = document.querySelector(".education");
const personalTab = document.querySelector(".presonalTab");
const professionalTab = document.querySelector(".professionalTab");
const educationTab = document.querySelector(".educationTab");
const signupForm = document.forms["signupForm"];
const usernames = [];

const showAlert = (text) => alertify.alert("Citoto", text);

const validatePersonalForm = () => {
  if (signupForm["fname"].value == "") {
    showAlert("Please Enter First Name!");
    return false;
  }
  if (signupForm["lname"].value == "") {
    showAlert("Please Enter Last Name");
    return false;
  }
  if (signupForm["email"].value == "") {
    showAlert("Please Enter Email");
    return false;
  }
  const emailReg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
  if (emailReg.test(signupForm["email"].value) == false) {
    showAlert("Invalid Email Address");
    return false;
  }
  if (signupForm["phone"].value == "") {
    showAlert("Please Enter Phone Number");
    return false;
  }
  const phoneReg = /^\d{10}$/;
  if (phoneReg.test(signupForm["phone"].value) == false) {
    showAlert("Invalid Phone Number");
    return false;
  }
  if (signupForm["password"].value == "") {
    showAlert("Please Enter Your New Password");
    return false;
  }
  return true;
};

const validateProfessionalForm = () => {
  if (signupForm["currentjob"].value == "") {
    showAlert("Please Enter Your Current Job!");
    return false;
  }
  if (signupForm["jobtype"].value == "") {
    showAlert("Please Enter Your Job Type!");
    return false;
  }
  if (signupForm["company"].value == "") {
    showAlert("Please Enter Your Company Name!");
    return false;
  }
  return true;
};

function generateUniqueUsername(username) {
  const firstName = signupForm["fname"].value;
  const lastName = signupForm["lname"].value;
  if (firstName && lastName) {
    let username = `${firstName}${lastName[0]}`;
    let user = usernames.find((name) => name === username);
    let number = 0;
    while (user) {
      number++;
      username = `${firstName}${lastName[0]}${number}`;
      user = usernames.find((name) => name === username);
    }
    signupForm["username"].value = username;
  } else {
    showAlert("Please enter First Name and Last Name");
    signupForm["username"].value = "";
  }
}

const submitForm = () => {
  if (signupForm["grade"].value == "") {
    showAlert("Please Enter Your Grade!");
    return false;
  }
  if (signupForm["degree"].value == "") {
    showAlert("Please Enter Your Degree!");
    return false;
  }
  if (signupForm["school"].value == "") {
    showAlert("Please Enter Your School Name!");
    return false;
  }
  alertify.alert("Citoto", "Your account has been created", () => {
    toLogin();
    usernames.push(signupForm["username"].value);
    signupForm.reset();
    console.log("Users List: ", usernames);
  });
  return true;
};

const hide = (element) => element.classList.add("hide");
const show = (element) => element.classList.remove("hide");
const select = (element) => element.classList.add("select");
const unSelect = (element) => element.classList.remove("select");

const selectTab = (tab) => {
  if (tab === professionalTab) {
    select(professionalTab);
    unSelect(personalTab);
    unSelect(educationTab);
  }

  if (tab === personalTab) {
    select(personalTab);
    unSelect(professionalTab);
    unSelect(educationTab);
  }

  if (tab === educationTab) {
    select(educationTab);
    unSelect(professionalTab);
    unSelect(personalTab);
  }
};

const showForm = (form) => {
  if (form === personal) {
    show(personal);
    selectTab(personalTab);
    hide(professional);
    hide(education);
  }
  if (form === professional) {
    if (validatePersonalForm()) {
      hide(personal);
      show(professional);
      selectTab(professionalTab);
      hide(education);
      personalTab.classList.add("check");
    }
  }
  if (form === education) {
    if (validateProfessionalForm()) {
      hide(personal);
      hide(professional);
      show(education);
      selectTab(educationTab);
      professionalTab.classList.add("check");
    }
  }
};

const toSignup = (e) => {
  show(signup);
  hide(login);
  showForm(personal);
};

const toLogin = (e) => {
  hide(signup);
  show(login);
  personalTab.classList.remove("check");
  professionalTab.classList.remove("check");
};
