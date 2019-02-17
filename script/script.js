 
 

 let  UICONTROLLER = (function (){
  
    let DOMstrings = {
       NameLabel: '.name',
       ButtonLabel: '.btnSum',
       SalaryLabel:'.salary',
       Notaxes: '.putOffMoney',
       Salaryprint: '.annual_salary',
       Netinc:'.net_icome',
       Alltaxes:'.annual_taxes',
       Montlypayment:'.monthlybase',
       ndsLabel: '.nds_taxes'

     };
     
         
   
       

     
    // function testing (data){ console.log(data) }
return {

    //WHY DO WE NEED A RETURN IN GETINPUT FUNCTION
     
   
    getInput:function ()
   {
       return {
        // name :document.querySelector(DOMstrings.NameLabel).value,
        salary: document.querySelector(DOMstrings.SalaryLabel).value,
        // country: 'Russia',
        puttingOFFMone: document.querySelector(DOMstrings.Notaxes).value,
    
         time: 'monthly'
       }
    },
    
    addInfo:function(el){
        console.log(el)
        document.querySelector(DOMstrings.Salaryprint).textContent = el.annualinc;
        document.querySelector(DOMstrings.Netinc).textContent = el.netincome;
        document.querySelector(DOMstrings.Alltaxes).textContent = el.alltaxes;
        document.querySelector(DOMstrings.ndsLabel).textContent = el.NDS ;

      },

    clearfields: function (){
        

       let fields=Array.from(document.querySelectorAll(DOMstrings.SalaryLabel + ',' + DOMstrings.Notaxes))
        
       let fieldzer = fields.forEach(el => el.value  = '');

        fields[0].focus();
        
    },

   getDOMstrings: function() {
    return DOMstrings;
}
}
  
 
 

  })();

 
 
  
  let calc = (function  () {
//   let annualinc, ndfl, pen, med, SocialIns, paiedBying, alltaxes, alltogetherANDBought, percentalltogether;  

  return {
     

    countANSalary: function (person) {
        let annualinc, ndfl, pen, med, SocialIns, alltaxes, netincome, TaxedMoney, NDS ; 
       // paiedBying, alltogetherANDBought, percentalltogether;
        if(person.time){
            annualinc = person.salary*12;
        } else {annualinc = person.salary}

        if(person.puttingOFFMone>0){
            TaxedMoney  = annualinc - person.puttingOFFMone;
        } else{  TaxedMoney = annualinc
                    }
         
         ndfl = annualinc*0.13;
         netincome = annualinc - ndfl;
         pen = annualinc*0.22;
         med = annualinc*0.051;
         SocialIns = annualinc*0.029;
         alltaxes = ndfl+ pen + med + SocialIns;
         NDS = TaxedMoney*0.18;

          return {
            annualinc,netincome, alltaxes,NDS 
          }
         
    }}

   
    
//      if(person.puttingOFFMone === 0 ) {
//        paiedBying =  (annualinc-ndfl)*0.18
//       } else {   paiedBying =(annualinc-ndfl - (person.puttingOFFMone*12))*0.18 };
    

//     alltogetherANDBought = alltaxes+paiedBying;
//     percentalltogether = alltogether/annualinc*100;
//     percentalltogetherANDBought = Math.floor(alltogetherANDBought/annualinc*100)
    
//       console.log(`Hello my dear friend ${person.name}, your annual income is ${annualinc}, from it you paid ${alltogether} to the government and different funds  it's ${percentalltogether}%, if you count taxes paid while buying things then you paid ${alltogetherANDBought}, it's ${ percentalltogetherANDBought}%.`);
//     };
    
//   //countANSalary(SampleDataImportant);
})();
   
  
  
   // GLOBAL APP CONTROLLER

const globalAppControl = (function (uicontr, calculate){

    // Make an event listener + starting the app function
    const setEventListener = () =>{
       const DOM = uicontr.getDOMstrings();
       document.querySelector(DOM.ButtonLabel).addEventListener('click', startTheWork);
       document.addEventListener('keypress', function(event){
           if(event.Code ===13 || event.which===13){
            startTheWork()
           }
       });
    };

    //write starting the app function 
    const startTheWork = () => {
        let input, annualsalary;
    // getting the input
        input = UICONTROLLER.getInput();
        console.log(input)
    // calculating 
     annualsalary = calculate.countANSalary(input);
     console.log(annualsalary);
     // print
     UICONTROLLER.addInfo(annualsalary);
     //clear fields
     UICONTROLLER.clearfields();
    };
    
   


return {
    init: function() {
        setEventListener();
    }
};
})(UICONTROLLER, calc);

   globalAppControl.init()