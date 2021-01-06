window.addEventListener("DOMContentLoaded", (event) => {
      let formField = document.querySelectorAll('.form__input');
      let formContainer = document.querySelector("#drivers-license-form");
      let driversInfo = document.querySelectorAll('.license__info');
      let formValues = [];
      // formContainer.addEventListener('input', event =>{

      //   for (let i = 0; i < formField.length - 3; i++){

      //     formValues.push(formField[i].values);
      //   }
      //   console.log(formValues[0]);
      // });
      


  // ** Phase 1B: Update license with event delegation and event.target ** 


  // ** Phase 2: Add focus and blur events to form inputs **
 

  // ** Phase 3: Check that license numbers match **
 

  // ** Phase 4: Update submit button click count **
      document.addEventListener('submit', event =>{
        event.preventDefault();
        for (let i = 0; i < formField.length - 3; i++){
          driversInfo[i].innerText = formField[i].value;
        }
      })


 
});