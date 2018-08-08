import '../styles/index.scss';

'use strict';

document.addEventListener('DOMContentLoaded',function() {
    document.querySelector('input[type="checkbox"]').onchange=pricingToggle;
},false);

const pricingToggle = () => { 
    const checkBox = document.getElementById("checkbox");
    const monthlyBasic = document.getElementById("monthly-basic");
    const annualBasic = document.getElementById("annual-basic");
    const monthlyStd = document.getElementById("monthly-std");
    const annualStd = document.getElementById("annual-std");
    const monthlyPro = document.getElementById("monthly-pro");
    const annualPro = document.getElementById("annual-pro");

    if (checkBox.checked == true) {
        annualBasic.style.display = "block";
        monthlyBasic.style.display = "none";
        
        annualStd.style.display = "block";
        monthlyStd.style.display = "none";

        annualPro.style.display = "block";
        monthlyPro.style.display = "none";
    } 
    else if (checkBox.checked !== true) {
        annualBasic.style.display = "none";
        monthlyBasic.style.display = "block";

        annualStd.style.display = "none";
        monthlyStd.style.display = "block";

        annualPro.style.display = "none";
        monthlyPro.style.display = "block";

    } else {
        console.log("what else is there!");
    }
};