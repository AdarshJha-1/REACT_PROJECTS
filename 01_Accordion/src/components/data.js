// Define a constant array called data to hold a collection of IT-related question-answer pairs
const data = [
  {
    id: 1,
    question: "What does 'HTML' stand for?",
    answer: "Hypertext Markup Language",
    explanation: "HTML stands for Hypertext Markup Language. It is the standard markup language for creating web pages and web applications. HTML describes the structure of a web page semantically and consists of a series of elements that encapsulate different types of content, such as headings, paragraphs, links, images, and more."
  },
  {
    id: 2,
    question: "What is the difference between 'var', 'let', and 'const' in JavaScript?",
    answer: "The 'var' keyword declares a variable globally or locally to an entire function, while 'let' and 'const' are block-scoped declarations.",
    explanation: "In JavaScript, 'var' declares a variable globally or locally to an entire function, regardless of block scope. 'let' and 'const', introduced in ES6, are block-scoped declarations, which means they are only accessible within the block they are defined in. Additionally, 'let' allows reassignment of the variable's value, whereas 'const' declares a constant whose value cannot be changed once assigned."
  },
  {
    id: 3,
    question: "What is a RESTful API?",
    answer: "RESTful API (Representational State Transfer) is an architectural style for designing networked applications. It relies on a stateless, client-server communication protocol, typically HTTP, and uses standard operations such as GET, POST, PUT, DELETE to perform CRUD operations on resources.",
    explanation: "A RESTful API is designed to be efficient, scalable, and easy to understand. It follows the principles of REST, which include using unique URIs to identify resources, leveraging HTTP methods for performing operations on resources, and using hypermedia links to represent relationships between resources. RESTful APIs are widely used in web development for building backend services that can be consumed by various clients, including web browsers, mobile apps, and other servers."
  },
  {
    id: 4,
    question: "What is the difference between 'git merge' and 'git rebase'?",
    answer: "'git merge' integrates changes from one branch into another, while 'git rebase' rewrites the commit history by moving the entire branch to begin on the tip of another branch.",
    explanation: "In Git, 'git merge' combines the changes from one branch (the source branch) into another branch (the target branch), creating a new commit. This preserves the commit history of both branches but can result in a more complex history. On the other hand, 'git rebase' rewrites the commit history by moving the current branch to the tip of another branch. This results in a linear history and can provide a cleaner, more streamlined view of the project's development. However, it should be used with caution, especially when working in a shared repository, as it can alter the commit history of the repository."
  },
  {
    id: 5,
    question: "What is 'dependency injection'?",
    answer: "Dependency injection is a design pattern in which a class receives its dependencies from external sources rather than creating them itself.",
    explanation: "Dependency injection helps to decouple the components of a system, making them easier to test, reuse, and maintain. Instead of creating dependencies within a class, the dependencies are provided to the class from an external source, typically through constructor injection, method injection, or property injection. This promotes loose coupling and allows for better separation of concerns, as the class does not need to know how its dependencies are created or managed."
  },
];

// Export the data array to make it accessible to other parts of the application
export default data;
