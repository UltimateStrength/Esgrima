window.addEventListener('scroll', function() {
    var header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);
});

window.addEventListener('load', function() {
    var searchInput = document.getElementById('search-input');
    var searchErrorMessage = document.getElementById('search-error-message');
    var searchErrorTimeout;

    searchInput.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            event.preventDefault();
            performSearch();
        }
    });

    function performSearch() {
        var searchTerm = searchInput.value.trim().toLowerCase();
        var content = document.getElementById('content');
        var contentItems = content.getElementsByTagName('h1');
        var searchFound = false;

        for (var i = 0; i < contentItems.length; i++) {
            var contentItem = contentItems[i];
            if (contentItem.textContent.toLowerCase().includes(searchTerm)) {
                contentItem.scrollIntoView({ behavior: 'smooth', block: 'start' });
                searchFound = true;
                break;
            }
        }

        if (!searchFound) {
            searchInput.style.animation = 'shake 0.5s';
            searchInput.focus();
            searchInput.addEventListener('animationend', function() {
                searchInput.style.animation = '';
            });

            clearTimeout(searchErrorTimeout);
            searchErrorMessage.style.opacity = '1';
            searchErrorTimeout = setTimeout(function() {
                searchErrorMessage.style.opacity = '0';
            }, 1000);
        }
    }

    var searchLink = document.getElementById('search-link');
    searchLink.addEventListener('click', function(event) {
        event.preventDefault();
        performSearch();
    });
});

window.addEventListener('load', function() {
    var searchInput = document.getElementById('search-input');

    searchInput.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            event.preventDefault();
            performSearch();
        }
    });

    function performSearch() {
        var searchTerm = searchInput.value.trim();
        var searchResult = window.find(searchTerm, false, false, true, false, true, false);

        if (!searchResult) {
            searchInput.style.animation = 'shake 0.5s';
            searchInput.style.backgroundColor = 'red';
            searchInput.focus();
            searchInput.addEventListener('animationend', function() {
                searchInput.style.animation = '';
                searchInput.style.backgroundColor = '#ffffff';
            });
        }
    }
});
