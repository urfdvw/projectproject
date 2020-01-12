// new window life span ///////////////////////////////////////////////////////////////////

// a handle of the new window that othe functions can operate
var preview = document.getElementById('preview').contentWindow

// content display ///////////////////////////////////////////////////////////////////////

// main function
function preview_verse(b_in, c_in, v_in) {
    // parse
    let b = parseInt(b_in)
    let c = parseInt(c_in)
    let v = parseInt(v_in)
    if (!(verse_exists(b, c, v))) {
        throw ('invalid input')
    }

    // clear
    preview.document.body.innerHTML = '';
    // get all verses in a chapter
    let verses = get_verses_chapter(b, c)
    // append verses to html
    let text_class = "odd"
    for (let i = 0; i < verses.length; i++) {
        // prepare text block
        let aPieceOfText = document.createElement("p")
        aPieceOfText.innerHTML = (i + 1) + ' ' + verses[i][1] + '<br>' + (i + 1) + ' ' + verses[i][0]
        aPieceOfText.id = "" + (i + 1)
        aPieceOfText.className = text_class
        aPieceOfText.onclick = function(){display_verse(b, c, i+1)};
        // append text
        preview.document.body.appendChild(aPieceOfText);
        // alter text class for styling
        if (text_class == "odd") {
            text_class = "even"
        } else {
            text_class = "odd"
        }
    }
    // scroll to position
    setTimeout(function () {
        // only work for chrome
        // https://stackoverflow.com/a/49842367/7037749
        var testDiv = preview.document.getElementById("" + v);
        const y = testDiv.getBoundingClientRect().top + preview.scrollY;
        preview.scroll({
            top: y
        });
    }, 100);
}