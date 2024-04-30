function handleOnLoad(){
    populateList();
}

function handleOnChange(){
    const selectedId = document.getElementById("selectListBox").value;
    bookList.forEach((book)=>{
        if(book.id == selectedId){
            myBook = book;
        }
    });

    populateForm();
}

function handlerEditClick(){
    makeEditable();
    hideButtons();
    var buttonHtml = "<button class =\"btn btn-primary btn-lg\" onclick=\"handleEditSave("+myBook.id+")\">Save</button"
    buttonHtml += "<button class=\"btn btn-warning btn-lg btn-cancle\" onclick=\"handleCancelSave()\"Cancel</button>"
    document.getElementById("saveButton").innerHTML = buttonHtml;
    document.getElementById("saveButton").style.display = "inline-block";
}

function handleRentClick(){
    myBook.numAvlb--;
    document.getElementById("bookAvlb").value = myBook.numAvlb;
    putBook(myBook.id);
}

function handleReturnClick(){
    myBook.numAvlb++;
    document.getElementById("bookAvlb").value = myBook.numAvlb;
    putBook(myBook.id);
}

function handleDeleteClick(){
    deleteBook();
}

function handleCancelSave(){
    populateForm();
    makeReadOnly();
    showButtons();
}

function handleEditSave(){
    putBook(id);
    makeReadOnly();
    showButtons();
}

function handleNewSave(){
    postBook();
    makeReadOnly();
    showButtons();
    blankFields();
}






function populateForm(){
    document.getElementById("bookTitle").value=myBook.title
    document.getElementById("bookAuthor").value=myBook.author
    document.getElementById("bookGenre").value=myBook.genre
    document.getElementById("bookAvlb").value=myBook.numAvlb
    document.getElementById("bookIsbn").value=myBook.isbn
    document.getElementById("bookLength").value=myBook.length
    document.getElementById("bookCover").value=myBook.cover
    var html="<img class = \"coverArt\" src = \"" + myBook.cover + "\"></img>";
    document.getElementById("picBox").innerHTML = html;
}

function hideButtons(){
    document.getElementById("newButton").style.display="none";
    document.getElementById("editButton").style.display="none";
    document.getElementById("deleteButton").style.display="none";
    document.getElementById("rentButton").style.display="none";
    document.getElementById("returnButton").style.display="none";
}

function showButtons(){
    document.getElementById("newButton").style.display="inline-block";
    document.getElementById("editButton").style.display="inline-block";
    document.getElementById("deleteButton").style.display="inline-block";
    document.getElementById("rentButton").style.display="inline-block";
    document.getElementById("returnButton").style.display="inline-block";
    document.getElementById("saveButton").style.display="inline-block";
}

function makeEditable(){
    document.getElementById("bookTitle").value="";
    document.getElementById("bookAuthor").value="";
    document.getElementById("bookGenre").value="";
    document.getElementById("bookAvlb").value="";
    document.getElementById("bookIsbn").value="";
    document.getElementById("bookLength").value="";
    document.getElementById("bookCover").value="";
}

function blankFields(){
    document.getElementById("bookTitle").value=true;
    document.getElementById("bookAuthor").value=true;
    document.getElementById("bookGenre").value=true;
    document.getElementById("bookAvlb").value=true;
    document.getElementById("bookIsbn").value=true;
    document.getElementById("bookLength").value=true;
    document.getElementById("bookCover").value=true;
}

function makeReadOnly(){
    document.getElementById("bookTitle").value=true;
    document.getElementById("bookAuthor").value=true;
    document.getElementById("bookGenre").value=true;
    document.getElementById("bookAvlb").value=true;
    document.getElementById("bookIsbn").value=true;
    document.getElementById("bookLength").value=true;
    document.getElementById("bookCover").value=true;
}