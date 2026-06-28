function openExpense(){
    window.location.href = "expense.html";
}
function back(){
    window.location.href = "index.html";
}
function back_expense(){
    window.location.href = "expense.html";
}
function exit(){
    window.location.href = "exit.html";
}
function other() {
    window.location.href = "other.html";
}
// html expense to other page i/p field filling
function sendCategory(category) {
    window.location.href = "other.html?category=" + category; // after button clicked the browser open that other page
}

//other page note data i/p filling code
window.onload = function(){
    console.log("Script Running");
    const data = new URLSearchParams(window.location.search);// window.location.search -> search after ? values
    const note = data.get("category");

    if(note){// other than url exit(other.html.....) means true only url means false
        document.getElementById("notes").value = note; // getting that note i/p field and assigning the value
    }

}
function infogetter(){
    const note = document.getElementById("notes").value;
    const amount = document.getElementById("amount").value;

    fetch("http://localhost:8080/expense",{method:"POST",
        headers :{"Content-Type":"application/x-www-form-urlencoded"},
        body :"notes="+note+"&amount="+amount
    })
        //get the submitted response from spring boot to web
        .then(response => response.text())
        .then(data => {

            document.getElementById("message").innerText = data;
            //clear i/p filed after submission to avoid default same entry
            document.getElementById("notes").value ="";
            document.getElementById("amount").value="";

            //disabling the submission message from spring after 3seconds to look good
            setTimeout(() => {
                document.getElementById("message").innerText = "";
            }, 3000);

        });
}
