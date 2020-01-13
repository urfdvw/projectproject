function mainAction() {
    console.log(event.keyCode)
    let words = split_input()
    let bcv = words_2_bcv(words)
    var candidateBook = getList()
    if (event.keyCode === 13) { // Enter
        event.preventDefault(); // Cancel the default action
        // try to project
        if (bcv[0] != -1) { // if projectable
            // redirect side page if infomation complete
            display_verse(bcv[0], bcv[1], bcv[2]);
            // create recall button
            addRecallButton(bcv[0], bcv[1], bcv[2])
            // clear text
            init()
        }
    } else if (event.keyCode === 9) {// Tab
        event.preventDefault(); // Cancel the default action
        // try to record 
        if (bcv[0] != -1) { // if projectable
            // create recall button
            addRecallButton(bcv[0], bcv[1], bcv[2])
            // clear text
            init()
        }
    } else if (event.keyCode === 16) {// Shift
        event.preventDefault(); // Cancel the default action
        // try to preview
        if (bcv[0] != -1) { // if projectable
            preview_verse(bcv[0], bcv[1], bcv[2]);
        }
    } else if ((event.keyCode >= 65) && (event.keyCode <= 90)) {// Letter
        // just input letters
    } else if ((event.keyCode >= 49) && (event.keyCode <= 53)) {// number 1~5
        if (candidateBook.length > 0) { // if list is visible
            event.preventDefault(); // Cancel the default action
            // replace input book text with book name 
            var i = event.keyCode - 49
            document.getElementById("input").value = document
                .getElementById("input").value.replace(words[0], candidateBook[i] + " ")
        }
        // other wise just input a number digit
    } else if ((event.keyCode >= 48) && (event.keyCode <= 57)) { // other number
    } else if (event.keyCode === 32) {// Space
        /*
        if there is a list of candidate books,
        space will select the first book.
        And a SPACE will be inserted no matter what
        */
        if (candidateBook.length > 0) { // if list is visible
            // replace input book text with book name 
            document.getElementById("input").value = document
                .getElementById("input").value.replace(words[0], candidateBook[0] + " ")
        }
    } else if (event.keyCode === 8 || event.keyCode === 46) { // backspace and del
    } else if (event.keyCode === 38 || event.keyCode === 37|| event.keyCode === 33) { // up pageup
        scorll_to_next(-1);
    } else if (event.keyCode === 40 || event.keyCode === 39|| event.keyCode === 34) { // down pagedown
        scorll_to_next(1);
    } else { // any other input
        event.preventDefault(); // Cancel the default action
    }
}

function update() {
    updateList()
    updateInfo()
}

// button actions
function project_button() {
    let words = split_input()
    let bcv = words_2_bcv(words)
    if (bcv[0] != -1) { // if projectable
        // redirect side page if infomation complete
        display_verse(bcv[0], bcv[1], bcv[2]);
    }
}

function preview_button() {
    let words = split_input()
    let bcv = words_2_bcv(words)
    if (bcv[0] != -1) { // if projectable
        // redirect side page if infomation complete
        preview_verse(bcv[0], bcv[1], bcv[2]);
    }
}

function record_button() {
    let words = split_input()
    let bcv = words_2_bcv(words)
    if (bcv[0] != -1) { // if projectable
        // redirect side page if infomation complete
        addRecallButton(bcv[0], bcv[1], bcv[2]);
    }
}
// inputs ///////////////////////////////////////////////////////////////////////////

// no input
// get text from web
// return 3 pieces of text represent b c v (order matters)
// -1 means not ready yet
function split_input() {
    let text = document.getElementById("input").value
    text = text.trim()
    let words = text.split(/[ ,]+/); // trim() is includeed in regex
    // if no input at all
    if (words.length == 0) {
        return [-1, -1, -1]
    }

    if (!isInt(words[0])) { // if the first position is book
        if (words.length == 3) { // if input complete
            return words
        } else { // if not complete
            return [words[0], -1, -1]
        }
    } else { // if the first position is a number
        if (words.length == 3) { // if input complete
            return [words[2], words[0], words[1]]
        } else { // if not complete
            return [-1, -1, -1]
        }
    }
}

// return bcv if words are reasonable, "words" from split_input()
function words_2_bcv(words) {
    if (words.includes(-1)) { // if not complete
        return [-1, -1, -1]
    }
    if (!suggestionKeys.includes(words[0])) {
        return [-1, -1, -1]
    }
    let b = book_ind[words[0]]
    let c = parseInt(words[1])
    let v = parseInt(words[2])
    if (!(verse_exists(b, c, v))) {
        return [-1, -1, -1]
    }
    return [b, c, v]
}

// list update //////////////////////////////////////////////////////////////////////////
function getList() {

    // get input book text
    let book_text = split_input()[0]
    console.log(book_text)
    if (book_text == -1) { // if book name not ready
        return []
    }

    // get candidateBook
    let candidateBook = findBooks(book_text)

    // no display situations
    if (candidateBook.includes(book_text)) { // if input is one of the candidate Books
        return []
    }

    return candidateBook
}
function updateList() {
    // the element 
    let reclist = document.getElementById('recommendation')
    // the data
    let candidateBook = getList()
    // if nothing to show
    if (candidateBook.length == 0) { // if no candidate Book
        reclist.style.visibility = 'hidden'
        return
    }
    // number of items to display
    let n = 5
    // display
    let listText = ""
    if (candidateBook.length < n) {
        n = candidateBook.length
    }
    for (let i = 0; i < n; i++) {
        listText += (i + 1).toString() + ": " + candidateBook[i] + "\n"
    }
    document.getElementById("candidateBookList").innerHTML = listText
    let input = document.getElementById('input')
    let caret = getCaretCoordinates(input, input.selectionEnd);
    let X = caret.left + input.offsetLeft
    let Y = caret.top + input.offsetTop + input.offsetHeight
    reclist.style.visibility = 'visible'
    reclist.style.left = X + 'px'
    reclist.style.top = Y + 'px'
}

function findBooks(keyWord) {
    if (keyWord.length == 0) {
        return []
    }
    // find a list of related books by fuzzy keyWord
    let relatedKeys = fuzzyFinder(keyWord, suggestionKeys);
    let value = []
    for (let i = 0; i < relatedKeys.length; i++) {
        candidateValue = book_name()[book_ind[relatedKeys[i]]];
        if (!(value.includes(candidateValue))) {
            value.push(candidateValue)
        }
    }
    return value
}

// ui //////////////////////////////////////////////////////////////////
function init() {
    document.getElementById("input").value = ""
    updateInfo()
}
function updateInfo() {
    // get bcv from input text
    let words = split_input()
    let bcv = words_2_bcv(words)
    let infoText = ''
    if (bcv[0] == -1) {
        infoText = '请输入“书名（空格）章（空格）节”，或者“章（空格）节（空格）书名”'
    } else {
        infoText = bible_versions(bcv) + "<br> [Enter]投影， [Shift]预览， [Tab]记录"
    }
    document.getElementById("info").innerHTML = infoText
}

function addRecallButton(cb, cc, cv) {
    let div = document.createElement('div')
    gotoText = "display_verse('" + cb + "','" + cc + "','" + cv + "')"
    previewText = "preview_verse('" + cb + "','" + cc + "','" + cv + "')"
    buttonText = book_name()[cb] + ", " + cc + ", " + cv
    div.innerHTML = '<button onclick="' + gotoText + '") >投影</button>'
    div.innerHTML += '<button onclick="' + previewText + '") >预览</button>'
    div.innerHTML += buttonText
    document.getElementById('historyblock').appendChild(div)
}

// lagguage /////////////////////////////////////////////////////////////////////////
function bible_versions(bcv) {
    // get language
    var ind = 0
    if (document.getElementById("si").checked) {
        ind = 1
    }
    if (document.getElementById("tr").checked) {
        ind = 2
    }
    if (document.getElementById("en").checked) {
        ind = 0
    }
    // creat text
    let text = bcv[1] + ':' + bcv[2] + ' ' + bible[verse_index(bcv[0], bcv[1], bcv[2])][ind]
    // get second version
    if (!(document.getElementById("two_version").checked)) {
        return text
    }
    if (ind == 0) {
        text += '<br>' + bible[verse_index(bcv[0], bcv[1], bcv[2])][1]
    } else {
        text += '<br>' + bible[verse_index(bcv[0], bcv[1], bcv[2])][0]
    }
    return text
}

function book_name() {
    if (document.getElementById("si").checked) {
        return si_book_name
    }
    if (document.getElementById("tr").checked) {
        return tr_book_name
    }
    if (document.getElementById("en").checked) {
        return en_book_name
    }
}

// tools ///////////////////////////////////////////////////////////////////////////


function fuzzyFinder(keyWord, list) {
    // fuzzy find keyWord in list
    // this is copied from 
    // https://blog.csdn.net/YeShenLiaoSuiFeng/article/details/80519004
    // need to be improved
    if (!Array.isArray(list) && keyWord !== '') return
    let arr = []
    let reg = new RegExp(keyWord, 'i') // 不区分大小写
    for (let i = 0; i < list.length; i++) {
        if (list[i].match(reg)) arr.push(list[i])
    }
    return arr
}

function isInt(a) {
    // find if a string is a integer number
    return a == parseInt(a)
}