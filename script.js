//alertify.alert("Citoto", "Alert Message!");

const login = document.querySelector(".login");
const signup = document.querySelector(".signup");
const personal = document.querySelector(".personal");
const professional = document.querySelector(".professional");
const education = document.querySelector(".education");
const personalTab = document.querySelector(".presonalTab");
const professionalTab = document.querySelector(".professionalTab");
const educationTab = document.querySelector(".educationTab");
const signupForm = document.forms["signupForm"];

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

const validateEducationForm = () => {
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
  alertify.alert("Citoto", "Your account has been created", () =>
    location.reload()
  );
  return true;
};

signupForm["username"].value;
let firstName;
let lastName;
const getFirstName = (e) => {
  firstName = e.value;
  if (firstName && lastName) {
    signupForm["username"].value = firstName + lastName[0];
  } else {
    signupForm["username"].value = "";
  }
};

const getLastName = (e) => {
  lastName = e.value;
  if (firstName && lastName) {
    signupForm["username"].value = firstName + lastName[0];
  }
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

const showPage = (page) => {
  if (page === login) {
    hide(signup);
    show(login);
  }
  if (page == signup) {
    show(signup);
    hide(login);
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

//Button actions
const toSignup = (e) => {
  showPage(signup);
  showForm(personal);
};

const toLogin = (e) => {
  showPage(login);
};
