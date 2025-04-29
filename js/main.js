// ?? ========================= VARIABLES ==========================
const bookName = document.getElementById("bookName")
const bookUrl = document.getElementById("siteUrl")
const submitBtn = document.getElementById("submitBtn")
const form = document.getElementById("formSec")
const tableBody = document.getElementById("tableBody")
const alertMsg = document.querySelector("#alertMsg")

var books;
if (localStorage.getItem("Books") !== null) {
    books = JSON.parse(localStorage.getItem("Books"))
    displayBook()
} else {
    books = []
}

// ?? ======================== HELPER FUNCTIONS ===================
function displayBook() {
    let cartona = ""
    for (let i = 0; i < books.length; i++) {
        cartona += `
        <tr class="text-center">
        <td>${i + 1}</td>
        <td>${books[i].name}</td>
        <td>
        <button class="bg-success px-3 py-1 text-white rounded-2 gap-2 border-0 text-decoration-none" onclick="visitUrl(${i})" >
        <i class="fa-solid fa-eye"></i>
        Visit
        </button>
        </td>
        <td>
         <button class="bg-danger px-3 py-1 text-white rounded-2  border-0" onclick="delBook(${i})">
        <i class="fa-solid fa-trash"></i>
        Delete
        </button>
        </td>
        </tr>
          `
    }
    tableBody.innerHTML = cartona
}
function clearInputs() {
    bookName.value = ""
    bookUrl.value = ""
    bookName.classList.remove("is-valid")
    bookUrl.classList.remove("is-valid")
}
function delBook(index) {
    books.splice(index, 1)
    localStorage.setItem("Books", JSON.stringify(books))
    displayBook()
}
function visitUrl(index) {
    let urlLink = books[index].url
    window.location.href = `${urlLink}`
}

function inputValidations(element) {
    var allregex = {
        bookName: /^[a-z0-9_-]{3,15}$/,
        siteUrl: /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()!@:%_\+.~#?&\/\/=]*)/
    }
    var text = element.value
    if (allregex[element.id].test(text)) {
        element.classList.add("is-valid")
        element.classList.remove("is-invalid")
        return true
    }
    else {
        element.classList.add("is-invalid")
        element.classList.remove("is-valid")
        return false
    }
}
// ?? =========================== MAIN FUJNCTION ======================
function bookDetails() {

    if (inputValidations(bookName) && inputValidations(bookUrl)) {
        var book = {
            name: bookName.value,
            url: bookUrl.value
        }
        console.log(book)
        books.push(book)
        localStorage.setItem("Books", JSON.stringify(books))
        clearInputs()
        displayBook()
    } else {
        alertMsg.classList.replace("d-none", "d-flex")
    }
}
// ?? ========================= EVENTS ========================== 

document.addEventListener("click", function (e) {
    if ((e.target.id === "alertMsg")) {
        alertMsg.classList.add("d-none")
    }
    if (e.target.id === "closeIcon") {
        alertMsg.classList.add("d-none")
    }
})
submitBtn.addEventListener("click", bookDetails)
bookName.addEventListener("input", function () {
    inputValidations(bookName)
})
bookUrl.addEventListener("input", function () {
    inputValidations(bookUrl)
})
form.addEventListener("submit", function (e) {
    e.preventDefault()
})


