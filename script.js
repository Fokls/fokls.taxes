 
 

 let  UICONTROLLER = (function (){
  
    // const DOMstrings = {
    //   NameLabel: '.name',
    //   ButtonLabel: '.button',
    //   SalaryLabel:'.salary'
    // };
    
    let name, salary, data;

   
    function getInput(){
        name = document.querySelector('.name').value;
        salary= document.querySelector('.salary').value;
        // country: 'Russia',
        // puttingOFFMone: 0};

    console.log(name, salary);
    };

    // function testing (data){ console.log(data) }
return  
    let getData = document.querySelector('#summary').addEventListener('click', getInput);
  
  })();

UICONTROLLER.getData();
 
  
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
   
  
  
   