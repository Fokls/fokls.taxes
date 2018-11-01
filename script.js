 
 

 let  UICONTROLLER = (function (){
  
    let DOMstrings = {
       NameLabel: '.name',
       ButtonLabel: '.button',
       SalaryLabel:'.salary'
     };
     
         
   
       

     
    // function testing (data){ console.log(data) }
return {

    //WHY DO WE NEED A RETURN IN GETINPUT FUNCTION
   getInput:function ()
   {
       return {
        name :document.querySelector(DOMstrings.NameLabel).value,
        salary: document.querySelector(DOMstrings.SalaryLabel).value
        // country: 'Russia',
        // puttingOFFMone: 0};
       }
    },

   getDOMstrings: function() {
    return DOMstrings;
}
}
  
 
 

  })();

 
 
  
//   let cacl = (function  () {
//   let annualinc, ndfl, pen, med, SocialIns, paiedBying, altogether, alltogetherANDBought, percentalltogether;  
//   let countANSalary = (person) => {
//       if(person.salaryType === 'monthly' ) {
//        annualinc = person.salary*12
//       } else {  annualinc = person.salary};
    
//     ndfl = annualinc*0.13;
//     pen = annualinc*0.22;
//     med = annualinc*0.051;
//     SocialIns = annualinc*0.029;
    
//      if(person.puttingOFFMone === 0 ) {
//        paiedBying =  (annualinc-ndfl)*0.18
//       } else {   paiedBying =(annualinc-ndfl - (person.puttingOFFMone*12))*0.18 };
    
//     alltogether = ndfl+ pen + med + SocialIns;
//     alltogetherANDBought = alltogether+paiedBying;
//     percentalltogether = alltogether/annualinc*100;
//     percentalltogetherANDBought = Math.floor(alltogetherANDBought/annualinc*100)
    
//       console.log(`Hello my dear friend ${person.name}, your annual income is ${annualinc}, from it you paid ${alltogether} to the government and different funds  it's ${percentalltogether}%, if you count taxes paid while buying things then you paid ${alltogetherANDBought}, it's ${ percentalltogetherANDBought}%.`);
//     };
    
//   //countANSalary(SampleDataImportant);
//   })();
   
  
  
   // GLOBAL APP CONTROLLER

const globalAppControl = (function (uicontr){

    // Make an event listener + starting the app function
    const setEventListener = () =>{
       const DOM = uicontr.getDOMstrings();
       document.querySelector(DOM.ButtonLabel).addEventListener('click', startTheWork);
    };

    //write starting the app function 
    const startTheWork = () => {
        let input;
    // getting the input
        input = UICONTROLLER.getInput();
        console.log(input)
    };
   


return {
    init: function() {
        setEventListener();
    }
};
})(UICONTROLLER);

   globalAppControl.init()