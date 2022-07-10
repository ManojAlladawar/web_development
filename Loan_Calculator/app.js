// function Calculate(){
//     const amount = document.querySelector("#amount").value;
//     const rate = document.querySelector("#rate").value;
//     const months = document.querySelector("#months").value;
// }

// const interest = (amount *(rate *0.01))/months;

// const total = ((amount/months) + interest).toFixed(2);
// document.querySelector("#total").innerHTML = "EMI : (₹)" + total;
// }

function Calculate()
{
    const amount = document.querySelector("#amount").value;     
    const rate = document.querySelector("#rate").value;         
    const months = document.querySelector("#months").value;     

    //Calculating interest per month
    const interest = (amount * (rate * 0.01))/months;
    //Calculating total payment
    const total = ((amount/months) + interest).toFixed(2);

    document.querySelector("#total").innerHTML = "EMI : (₹)" + total;
}