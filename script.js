document.addEventListener('DOMContentLoaded', () => {
    const booksByYear = {
        2022: [
            { title: 'The Sentence', author: 'Louise Erdrich', member: 'Non-Profit CEO', image: 'the_sentence.jpg' },
            { title: 'Lincoln Highway', author: 'Amor Towles', member: 'Journalist', image: 'amor-towles-lincoln-highway.jpg' },
            { title: 'The Splendid and the Vile', author: 'Erik Larson', member: 'Lawyer', image: 'Books_splendid2.jpg' },
            { title: 'The Passenger', author: 'Ulrich Alexander Boschwitz', member: 'Consultant', image: 'the_passenger.jpg' },
            { title: 'House Made of Dawn', author: 'Scott Momaday', member: 'Businessman', image: 'house_of_dawn.jpg' },
            { title: 'Marsh King\'s Daughter', author: 'Karen Dionne', member: 'Political Guy', image: 'marsh_king.jpg' }
        ],
        2023: [
            { title: 'Immense World', author: 'Ed Yong', member: 'Non-Profit CEO', image: 'Immense.jfif' },
            { title: 'Hell of a Book', author: 'Jason Mott', member: 'Journalist', image: 'hell.jfif' },
            { title: 'Slow Horses', author: 'Mick Herron', member: 'Lawyer', image: 'Slow_horses.jfif' },
            { title: 'Cloudstreet', author: 'Tim Winton', member: 'Consultant', image: 'Cloudstreet.jfif' },
            { title: 'Demon Copperhead', author: 'Barbara Kingsolver', member: 'Businessman', image: 'demon.jfif' },
            { title: 'The Wager', author: 'David Grann', member: 'Political Guy', image: 'Heaven.jfif' }
        ],
        2024: [
            { title: 'Covenant of Water', author: 'Abraham Verghese', member: 'Non-Profit CEO', image: 'Covenant.jfif' },
            { title: 'Heaven and Earth Grocery Store', author: 'James McBride', member: 'Journalist', image: 'Heaven.jfif' },
            { title: 'Shepherd’s Life', author: 'James Rebanks', member: 'Lawyer', image: 'shepherd.jpg' },
            { title: 'Boy Swallows Universe', author: 'Trent Dalton', member: 'Consultant', image: 'boy_swallows_universe.jpg' }
        ]
    };

    const memberElements = document.querySelectorAll('.member');
    const bookSection = document.getElementById('books');
    const yearButtons = document.querySelectorAll('#years button');

    memberElements.forEach(memberElement => {
        memberElement.addEventListener('click', () => {
            const memberName = memberElement.dataset.member;
            const books = Object.values(booksByYear).flat().filter(book => book.member.toLowerCase().replace(/ /g, '-') === memberName);
            displayBooks(books);
        });
    });

    yearButtons.forEach(button => {
        button.addEventListener('click', () => {
            const year = button.dataset.year;
            const books = booksByYear[year];
            displayBooks(books);
        });
    });

    function displayBooks(books) {
        bookSection.innerHTML = '';
        books.forEach(book => {
            const bookItem = document.createElement('div');
            bookItem.classList.add('book-item');
            bookItem.innerHTML = `
                <img src="${book.image}" alt="${book.title}">
                <div>
                    <h3>${book.title}</h3>
                    <p><strong>Author:</strong> ${book.author}</p>
                    <p><strong>Member:</strong> ${book.member}</p>
                </div>
            `;
            bookSection.appendChild(bookItem);
        });
    }
});
