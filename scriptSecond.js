do {
    let a = prompt('Sonni kiriting:')
    let b = prompt('Darajani kiriting:')
    var i = 0
    var j = 1
    if (isNaN(a) || isNaN(b) || a == 0 || b == 0) {
        alert('Noto`g`ri kiritdingiz, qaytatan urunib ko`rinf!')
    } else {
        while (i < b)
        {
            j = j * a
            i++;
        }
        alert(j)
    }
} while (true);