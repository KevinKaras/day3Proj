window.addEventListener("DOMContentLoaded", (event) => {
  // let formField = document.querySelectorAll('.form__input');
  // let formContainer = document.querySelector("#drivers-license-form");
  // let driversInfo = document.querySelectorAll('.license__info');
  // let formValues = [];
  let driver1 = document.querySelector('#license-num');
  let driver2 = document.querySelector('#license-num-confirm');
  let entireForm = document.querySelector("#drivers-license-form");
  document.querySelector('#card-donor-status').innerText = "No";
  

  // formContainer.addEventListener('input', event =>{

  //   for (let i = 0; i < formField.length - 3; i++){

  //     formValues.push(formField[i].values);
  //   }
  //   console.log(formValues[0]);
  // });



  // ** Phase 1B: Update license with event delegation and event.target **
  // console.log(entireForm);
  entireForm.addEventListener("input", event => {
    if (event.target.id === 'title') {
      document.querySelector("#card-title").innerText = event.target.value;
    } else if (event.target.id === "first-name") {
      document.querySelector("#card-first-name").innerText = event.target.value;
    } else if (event.target.id === "last-name"){
      document.querySelector("#card-last-name").innerText = event.target.value;
    } else if (event.target.id === "eye-color"){
      document.querySelector("#card-eye-color").innerText = event.target.value;
    } else if (event.target.id === "height"){
      document.querySelector("#card-height").innerText = event.target.value;
    } else if (driver1.value === driver2.value){
      document.querySelector('#card-license-num').innerText = driver2.value;
    } else if (driver1.value !== driver2.value){
      document.querySelector('#card-license-num').innerText = "";
    }
    if (event.target.checked === true){
      document.querySelector('#card-donor-status').innerText = "Yes";
    } else if (event.target.checked === false) {
      document.querySelector('#card-donor-status').innerText = "No";
    } 
  });

  // ** Phase 2: Add focus and blur events to form inputs **



  // ** Phase 3: Check that license numbers match **


  // ** Phase 4: Update submit button click count **
  document.addEventListener('submit', event => {
    event.preventDefault();

  })



});
