
const companies= [
  {name: "Energoinvest", category: "Finance", start: 1981, end: 2004},
  {name: "DP Žica", category: "Retail", start: 1992, end: 2008},
  {name: "Vranica", category: "Auto", start: 1999, end: 2007},
  {name: "Igman dd", category: "Retail", start: 1989, end: 2010},
  {name: "Vodoprivreda", category: "Technology", start: 2009, end: 2014},
  {name: "Drvopromet", category: "Finance", start: 1987, end: 2010},
  {name: "Creta Sun", category: "Auto", start: 1986, end: 1996},
  {name: "DEI", category: "Technology", start: 2011, end: 2016},
  {name: "Aegean Airlines", category: "Retail", start: 1981, end: 1989}
];


// for loop 
// for(let i=0;i<companies.length; i++) {
 //  console.log (companies[i]);
  
// }
//forEach loop

companies.forEach(function(company){
  console.log(company);
})