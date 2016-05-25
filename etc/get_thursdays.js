"use strict";

var theDate = new Date("May 1, 2016");
var endYear = 2018;

// TODO: generate this based on end year
let years = {
  '2016': [ [], [], [], [], [], [], [], [], [], [], [], [] ],
  '2017': [ [], [], [], [], [], [], [], [], [], [], [], [] ]
};


while(theDate.getUTCFullYear() < endYear){
   if(theDate.toString().split(" ")[0] === 'Thu'){
      years[theDate.getUTCFullYear()][theDate.getMonth()].push(new Date(theDate));
   }
   theDate.setDate(theDate.getDate() + 1);
}

for(let year of years){
  for(let months of year){
    for(let i = 0; i < 12; i++){
       if(months[i].length > 0){
          console.log("[ ] - " + months[i][1]);
    }}
  }
}
