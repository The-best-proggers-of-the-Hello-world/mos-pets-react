window.addEventListener('click', function (e) {

    if (e.target.getAttribute('class') == 'btn' &&
        e.target.parentElement.getAttribute('class') == 'button col') {
        var buttons = document.body.getElementsByClassName('types btn-group')[0]
        buttons.getElementsByClassName('active')[0].setAttribute('class', 'btn')
        e.target.setAttribute('class', 'btn active')
    }
    else if (e.target.getAttribute('class') == 'search-icon' ||
        e.target.getAttribute('class') == 'input-line' ||
        e.target.tagName == 'svg') {
        document.getElementsByClassName('search-bar')[0].getElementsByClassName('input-line')[0].
            getElementsByTagName('input')[0].focus()
    }
})