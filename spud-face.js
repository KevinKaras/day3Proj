window.addEventListener("DOMContentLoaded", (event) => {
  let formField = document.querySelectorAll('.form__input');
  let formContainer = document.querySelector("#drivers-license-form");
  let driversInfo = document.querySelectorAll('.license__info');
  let formValues = [];
  let entireForm = document.querySelector("#drivers-license-form");
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
    }

  });

  // ** Phase 2: Add focus and blur events to form inputs **


  // ** Phase 3: Check that license numbers match **


  // ** Phase 4: Update submit button click count **
  document.addEventListener('submit', event => {
    event.preventDefault();

  })



});
