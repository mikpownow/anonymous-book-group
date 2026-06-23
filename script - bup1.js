const booksData = {
    2022: [
        {
            title: "The Sentence",
            author: "Louise Erdrich",
            cover: "the_sentence.jpg",
            description: "A novel about love and loss set in a bookshop.",
        },
        {
            title: "The Lincoln Highway",
            author: "Amor Towles",
            cover: "amor-towles-lincoln-highway.jpg",
            description: "A coming-of-age story set in the 1950s.",
        },
        {
            title: "The Passenger",
            author: "Ulrich Alexander Boschwitz",
            cover: "the_passenger.jpg",
            description: "A gripping story of a Jewish man's escape from the Nazis.",
        },
        {
            title: "The Marsh King's Daughter",
            author: "Karen Dionne",
            cover: "marsh_king.jpg",
            description: "A psychological thriller about a woman's past.",
        },
        {
            title: "The Splendid and the Vile",
            author: "Erik Larson",
            cover: "Books_splendid2.jpg",
            description: "A narrative of Winston Churchill's leadership during WWII.",
        },
    ],
    2023: [
        {
            title: "Hell of a Book",
            author: "Jason Mott",
            cover: "hell.jfif",
            description: "A story that follows a writer and his life experiences.",
        },
        {
            title: "An Immense World",
            author: "Ed Yong",
            cover: "Immense.jfif",
            description: "A journey into the world of animal senses.",
        },
        {
            title: "Demon Copperhead",
            author: "Barbara Kingsolver",
            cover: "demon.jfif",
            description: "A modern retelling of David Copperfield.",
        },
        {
            title: "Cloudstreet",
            author: "Tim Winton",
            cover: "Cloudstreet.jfif",
            description: "A rich, sprawling tale of two families living together.",
        },
        {
            title: "House Made of Dawn",
            author: "N. Scott Momaday",
            cover: "house_of_dawn.jpg",
            description: "A novel that explores Native American identity.",
        },
        {
            title: "Slow Horses",
            author: "Mick Herron",
            cover: "Slow_horses.jfif",
            description: "A spy novel about a team of disgraced MI5 agents.",
        },
    ],
    2024: [
        {
            title: "Heaven and Earth Grocery Store",
            author: "James McBride",
            cover: "Heaven.jfif",
            description: "A moving story set in a small grocery store.",
        },
        {
            title: "The Covenant of Water",
            author: "Abraham Verghese",
            cover: "Covenant.jfif",
            description: "A multigenerational saga set in Kerala, India.",
        },
        {
            title: "A Shepherd's Life",
            author: "James Rebanks",
            cover: "shepherd.jpg",
            description: "A memoir about rural life and farming in the Lake District.",
        },
        {
            title: "Boy Swallows Universe",
            author: "Trent Dalton",
            cover: "boy_swallows_universe.jpg",
            description: "A coming-of-age tale set in Brisbane, Australia.",
        },
    ],
};

function displayBooks(year) {
    const booksList = document.getElementById("books-list");
    booksList.innerHTML = ""; // Clear previous books

    booksData[year].forEach((book) => {
        const bookItem = document.createElement("div");
        bookItem.className = "book-item";
        bookItem.onclick = () => openModal(book);
        bookItem.innerHTML = `<img src="${book.cover}" alt="${book.title}"><p>${book.title}</p>`;
        booksList.appendChild(bookItem);
    });
}

function openModal(book) {
    document.getElementById("book-title").innerText = book.title;
    document.getElementById("book-author").innerText = `Author: ${book.author}`;
    document.getElementById("book-cover").src = book.cover;
    document.getElementById("book-description").innerText = book.description;
    
    document.getElementById("book-info").style.display = "block";
}

function closeModal() {
    document.getElementById("book-info").style.display = "none";
}
