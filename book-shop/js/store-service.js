var gTrans = {
    'header': {
        en: 'Welcome to your store',
        es: 'Bienvenido a tu tienda',
        fr: 'Bienvenue dans votre magasin',
        he: 'ברוך הבא לחנות שלך'
    },
    'book-title': {
        en: 'Book title',
        es: 'Titulo del libro',
        fr: 'Titres de livres',
        he: 'שם הספר'
    },
    'price': {
        en: 'Price',
        es: 'Precio',
        fr: 'Prix',
        he: 'מחיר'
    },
    'add-book': {
        en: 'Add a book',
        es: 'Agregar un libro',
        fr: 'Ajouter un livre',
        he: 'הוסף ספר'
    },
    'id': {
        en: 'ID',
        es: 'ID',
        fr: 'Identité',
        he: 'מספר סידורי'
    },
    'actions': {
        en: 'Actions',
        es: 'Conducta',
        fr: 'Actions',
        he: 'פעולות'
    },

}

var gCurrLang = 'en';

function getTrans(transKey) {
    // if key is unknown return 'UNKNOWN'
    if (!gTrans[transKey]) return 'UNKNOWN'
    var transMap = gTrans[transKey];
    var trans = transMap[gCurrLang];
    // If translation not found - use english
    if (!trans) trans = transMap['en']
    return trans;
}

function doTrans() {
    var els = document.querySelectorAll('[data-trans]');
    for (var i = 0; i < els.length; i++) {
        var el = els[i]
        var transKey = el.dataset.trans;
        var trans = getTrans(transKey);
        if (el.nodeName === 'INPUT') el.placeholder = trans
        else el.innerText = trans;
    }
}

function setLang(lang) {
    gCurrLang = lang;
}
