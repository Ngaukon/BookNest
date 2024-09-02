document.addEventListener('DOMContentLoaded', function() {
    // Get the URL parameter
    const urlParams = new URLSearchParams(window.location.search);
    const bookId = parseInt(urlParams.get('book'), 10);

    // Sample data for books
    const books = {
        1: {
            title: "Entrepreneurship",
            description: "Entrepreneurship course Unit equips Kenyan college and university students with essential skills in business planning, innovation, finance, and legal frameworks to launch successful ventures.",
            price: "Ksh 100",
            imageUrl: "Images/enterprenuership.jpg"
        },
        2: {
            title: "Computer Applications",
            description: "Computer Applications provides Kenyan students with essential knowledge in using software tools like word processors, spreadsheets, and databases, crucial for academic and professional success.",
            price: "Ksh 100",
            imageUrl: "Images/compapp.png"
        },
        3: {
            title: "Information Communication & Technology",
            description: "ICT offers Kenyan students foundational knowledge in information and communication technology, covering topics like computer hardware, software, networking, and digital literacy.",
            price: "Ksh 100",
            imageUrl: "Images/ict.png"
        },
        4: {
            title: "Life Skills",
            description: "Life Skills empowers Kenyan students with essential personal and social competencies, covering topics like decision-making, communication, emotional intelligence, and problem-solving.",
            price: "Ksh 100",
            imageUrl: "Images/lifeskills.png"
        },
        5: {
            title: "Communication Skills",
            description: "Communication Skills equips Kenyan students with essential abilities in effective speaking, writing, listening, and interpersonal communication, vital for academic and professional success.",
            price: "Ksh 100",
            imageUrl: "Images/comm.png"
        },
        
        
        
        
        // Add more books as needed
    };

    // Find the book
    const book = books[bookId];

    if (book) {
        document.getElementById('book-title').innerText = book.title;
        document.getElementById('book-description').innerText = book.description;
        document.getElementById('book-price').innerText = `Price: ${book.price}`;
        document.getElementById('book-image').src = book.imageUrl;
    } else {
        document.getElementById('book-title').innerText = "Book not found";
        document.getElementById('book-description').innerText = "";
        document.getElementById('book-price').innerText = "";
        document.getElementById('book-image').src = "";
    }

    // Handle the "Buy Now" button click
    document.getElementById('buy-now').addEventListener('click', function() {
        // Redirect to a checkout or payment page
        // For now, we'll just alert
        alert('Redirecting to payment page...');
        
        // Example: Redirect to a payment page

        
        // window.location.href = 'checkout.html?book=' + bookId;
    });
});
