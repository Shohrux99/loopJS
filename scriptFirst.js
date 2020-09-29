do {
    let number = prompt('Tekshirmoqchi bo`lgan soningizni kiriting:')
    if (number % 2 == 0 && number > 0)
    {
        alert('Kiritilgan son JUFT!')
    } else if (number % 2 !== 0 && number > 0) {
        alert('Kiritlgan son TOQ!')
    } else {
        alert('Xato narsa kiritdingiz, qaytatdan urunib ko`ring!')
    }
} while (true);