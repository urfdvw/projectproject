// get the potential index by given b,c,v
function verse_index(b, c, v) {
    return b * 1000000 + c * 1000 + v
}

// check if a given b,c,v exist
function verse_exists(b, c, v) {
    let index = verse_index(b, c, v)
    if (index in bible) {
        return true
    } else {
        console.log('(' + b + ',' + c + ',' + v + ') not found')
        return false
    }
}

// get the verses given chapter
function get_verses_chapter(b, c) {
    // containers
    let out = []
    // find number of verses
    let ve = 1
    while (true) {
        if (verse_exists(b, c, ve+1)){
            ve += 1
        } else {
            break
        }
    }
    // get and output 
    for (let v = 1; v <= ve; v++) {
        out.push(v)
    }
    return out
}