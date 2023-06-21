var btn=document.getElementById("btn");
var totalprice=document.getElementById("totalprice");
var seats=document.querySelectorAll("#seats div.available");

var price=0;
var selectedseats=[];

seats.forEach((seat)=>{
    seat.addEventListener("click",()=>{
        if(seat.classList.contains("selected"))
        {
            seat.classList.remove("selected");
            selectedseats.splice(selectedseats.indexOf(seat),1);
            price-=Number(seat.dataset.price);
        }

        else
        {
            seat.classList.add("selected");
            selectedseats.push(seat);
            price+=Number(seat.dataset.price);
        }
        totalprice.innerHTML=price;
    })
});

btn.addEventListener("click",()=>{
    if (selectedseats.length==0)
    {
        alert("Please select atleast one seat");
    }

    else
    {
        var seatnum=selectedseats.map((seat)=> seat.innerHTML).join(", ");
        var text=`Booked Tickets: ${seatnum}\nTotal Price: ${price}`;
        alert(text);
    }
});