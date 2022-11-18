let element = document.getElementById("name")
let nameErrMsgEl = document.getElementById("nameErrMsg");
let errorMsg = "Required*";

element.addEventListener("blur", function (event) {
    if (event.target.value === "") {
        nameErrMsgEl.textContent = errorMsg;
    } else {
        nameErrMsgEl.textContent = "";
    }
});
