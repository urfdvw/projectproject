

// new window life span ///////////////////////////////////////////////////////////////////

// a handle of the new window that othe functions can operate
var myNewWindow

// auto close child window on mother window close
window.addEventListener("beforeunload", function (e) {
    // Do something
    myNewWindow.close()
}, false);

// create new window and set style
function newPage() {
    // open a new window, specify size to make a mini window
    myNewWindow = window.open("", "", "width=400,height=400")
    // apply style // https://stackoverflow.com/a/26300876/7037749
    myNewWindow.document.write('<html><head><link rel="stylesheet" type="text/css" href="small_window.css"></head><body></body></html>');
    // test display
    display_chapter()
}

// global states /////////////////////////////////////////////////////////////////////////////

// current verse displayed
let b_cur = 43
let c_cur = 3
let v_cur = 16

// content display ///////////////////////////////////////////////////////////////////////

// main function
function display_verse(b, c, v) {
    // parse
    let b_input = parseInt(b)
    let c_input = parseInt(c)
    let v_input = parseInt(v)
    console.log(b_input,c_input,v_input)
    if (!(verse_exists(b_input, c_input, v_input))) {
        throw ('invalid input')
    }
    // if desired verse in the current chapter
    if (b_cur == b_input && c_cur == c_input) {
        v_cur = v_input
        scroll_to_verse()
    } else {
        // if desired verse not in the current chapter
        b_cur = b_input
        c_cur = c_input
        v_cur = v_input
        display_chapter()
    }
}

// display bcv of a new chapter
function display_chapter() {
    // clear
    myNewWindow.document.body.innerHTML = '';
    // get all verses in a chapter
    let verses = get_verses_chapter(b_cur, c_cur)
    // append verses to html
    let text_class = "odd"
    for (let i = 0; i < verses.length; i++) {
        // prepare text block
        let aPieceOfText = document.createElement("p")
        aPieceOfText.innerHTML = (i + 1) + ' ' + verses[i][1] + '<br>' + (i + 1) + ' ' + verses[i][0]
        aPieceOfText.id = "" + (i + 1)
        aPieceOfText.className = text_class
        // append text
        myNewWindow.document.body.appendChild(aPieceOfText);
        // alter text class for styling
        if (text_class == "odd") {
            text_class = "even"
        } else {
            text_class = "odd"
        }
    }
    // scroll to position
    setTimeout(function () {
        go_to_verse(v_cur)
    }, 100);
}

// scroll controlls ////////////////////////////////////////

function scroll_to_verse() {
    // only work for chrome
    // https://stackoverflow.com/a/49842367/7037749
    var testDiv = myNewWindow.document.getElementById("" + v_cur);
    const y = testDiv.getBoundingClientRect().top + myNewWindow.scrollY;
    myNewWindow.scroll({
        top: y,
        behavior: 'smooth'
    });
}

function go_to_verse() {
    // only work for chrome
    // https://stackoverflow.com/a/49842367/7037749
    var testDiv = myNewWindow.document.getElementById("" + v_cur);
    const y = testDiv.getBoundingClientRect().top + myNewWindow.scrollY;
    myNewWindow.scroll({
        top: y
    });
}

function scorll_to_next(i) {
    if (verse_exists(b_cur, c_cur, v_cur + i)) {
        v_cur += i
        scroll_to_verse()
    }
}