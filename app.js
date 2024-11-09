// // app.js
// const express = require('express');
// const bodyParser = require('body-parser');
// const Queue = require('./queues/Queue');
// const PriorityQueue = require('./queues/Priorityqueue');
// const Stack = require('./stacks/Stack');
// const { generateInvoice, saveDailyLog } = require('./fileHandling/fileOperations');

// const app = express();
// app.use(bodyParser.json()); // Parse JSON request bodies

// // Initialize queues, stack, and daily transaction log
// const paymentQueue = new Queue();
// const priorityQueue = new PriorityQueue();
// const transactionHistory = new Stack();
// const dailyTransactions = [];

// // Route to add a new payment request
// app.post('/api/payments', (req, res) => {
//     const { customerName, address, type, amount, urgent } = req.body;
//     const request = {
//         id: Date.now(),const express = require('express');
// const bodyParser = require('body-parser');
// const Queue = require('./queues/Queue');
// const PriorityQueue = require('./queues/PriorityQueue');
// const Stack = require('./stacks/Stack');
// const { generateInvoice } = require('./fileHandling/fileOperations'); // Only keep generateInvoice

// const app = express();
// const port = 3000;

// const paymentQueue = new Queue();
// const priorityQueue = new PriorityQueue();
// const transactionHistory = new Stack();

// app.use(bodyParser.json());

// // Endpoint to add a new payment request
// app.post('/api/payments', (req, res) => {
//     const { customerName, address, type, amount, urgent } = req.body;

//     const request = {
//         id: Date.now(),
//         date: new Date().toISOString().split('T')[0],
//         customerName,
//         address,
//         type,
//         amount,
//         urgent
//     };

//     if (urgent) {
//         priorityQueue.enqueue(request, 1); // Priority 1 for urgent
//     } else {
//         paymentQueue.enqueue(request);
//     }

//     res.json({ message: "Payment request added", request });
// });

// // Endpoint to process all payment requests
// app.post('/api/payments/process', (req, res) => {
//     while (!priorityQueue.isEmpty() || !paymentQueue.isEmpty()) {
//         let request;

//         if (!priorityQueue.isEmpty()) {
//             request = priorityQueue.dequeue();
//         } else {
//             request = paymentQueue.dequeue();
//         }

//         processTransaction(request);
//     }

//     res.json({ message: "All payments processed." });
// });

// // Helper function to process individual transaction
// function processTransaction(request) {
//     generateInvoice(request); // Generate invoice as PDF
//     transactionHistory.push(request); // Add to history stack
// }

// // Start the server
// app.listen(port, () => {
//     console.log(`Server is running on http://localhost:${port}`);
// });

//         date: new Date().toISOString().split('T')[0],
//         amount: parseFloat(amount),
//         customerName,
//         address,
//         type,
//         urgent: urgent || false,
//     };

//     // Add to appropriate queue
//     if (request.urgent) {
//         priorityQueue.enqueue(request, 1); // Priority 1 for urgent requests
//     } else {
//         paymentQueue.enqueue(request);
//     }

//     console.log("Payment request added:", request);
//     res.status(201).json({ message: "Payment request added.", request });
// });

// // Route to process all payments
// app.post('/api/payments/process', (req, res) => {
//     while (!priorityQueue.isEmpty() || !paymentQueue.isEmpty()) {
//         let request;

//         // Process urgent requests first
//         if (!priorityQueue.isEmpty()) {
//             request = priorityQueue.dequeue();
//         } else {
//             request = paymentQueue.dequeue();
//         }

//         processTransaction(request);
//     }

//     saveDailyLog(dailyTransactions);
//     res.json({ message: "All payments processed." });
// });

// // Function to process a single transaction
// function processTransaction(request) {
//     generateInvoice(request); // Generate invoice
//     transactionHistory.push(request); // Log transaction in history stack
//     dailyTransactions.push(request); // Add to daily transaction log
// }

// // Start the Express server
// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
// });




// // const readline = require('readline');
// // const Queue = require('./queues/Queue');
// // const PriorityQueue = require('./queues/Priorityqueue');
// // const Stack = require('./stacks/Stack');
// // const { generateInvoice, saveDailyLog } = require('./fileHandling/fileOperations');

// // const paymentQueue = new Queue();
// // const priorityQueue = new PriorityQueue();
// // const transactionHistory = new Stack();
// // const dailyTransactions = [];

// // // Initialize readline interface
// // const rl = readline.createInterface({
// //     input: process.stdin,
// //     output: process.stdout
// // });

// // // Prompt user for input
// // function promptUser() {
// //     rl.question('Enter customer name: ', (customerName) => {
// //         rl.question('Enter address: ', (address) => {
// //             rl.question('Enter bill type (electricity, water, gas): ', (type) => {
// //                 rl.question('Enter amount: ', (amount) => {
// //                     rl.question('Is this an urgent request? (yes/no): ', (urgentResponse) => {
// //                         const urgent = urgentResponse.toLowerCase() === 'yes';
// //                         const request = {
// //                             id: Date.now(),
// //                             date: new Date().toISOString().split('T')[0],
// //                             amount: parseFloat(amount),
// //                             customerName,
// //                             address,
// //                             type,
// //                             urgent
// //                         };

// //                         // Add to appropriate queue
// //                         if (request.urgent) {
// //                             priorityQueue.enqueue(request, 1); // Priority 1 for urgent requests
// //                         } else {
// //                             paymentQueue.enqueue(request);
// //                         }

                        

// //                         console.log("Payment request added:", request);
// //                         processTransaction(request);

// //                         rl.question('Process another transaction? (yes/no): ', (response) => {
// //                             if (response.toLowerCase() === 'yes') {
// //                                 promptUser(); // Prompt again for next transaction
// //                             } else {
// //                                 saveDailyLog(dailyTransactions); // Save log at end
// //                                 rl.close(); // Close input
// //                                 console.log("All transactions processed and logged.");
// //                             }
// //                         });
// //                     });
// //                 });
// //             });
// //         });
// //     });
// // }

// // // Function to process a single transaction
// // function processTransaction(request) {
// //     generateInvoice(request); // Generate invoice
// //     transactionHistory.push(request); // Log transaction in history stack
// // }

// // // Start the input prompt
// // promptUser();
// const express = require('express');
// const bodyParser = require('body-parser');
// const Queue = require('./queues/Queue');
// const PriorityQueue = require('./queues/PriorityQueue');
// const Stack = require('./stacks/Stack');
// const { generateInvoice } = require('./fileHandling/fileOperations'); // Only keep generateInvoice

// const app = express();
// const port = 3000;

// const paymentQueue = new Queue();
// const priorityQueue = new PriorityQueue();
// const transactionHistory = new Stack();

// app.use(bodyParser.json());

// // Endpoint to add a new payment request
// app.post('/api/payments', (req, res) => {
//     const { customerName, address, type, amount, urgent } = req.body;

//     const request = {
//         id: Date.now(),
//         date: new Date().toISOString().split('T')[0],
//         customerName,
//         address,
//         type,
//         amount,
//         urgent
//     };

//     if (urgent) {
//         priorityQueue.enqueue(request, 1); // Priority 1 for urgent
//     } else {
//         paymentQueue.enqueue(request);
//     }

//     res.json({ message: "Payment request added", request });
// });

// // Endpoint to process all payment requests
// app.post('/api/payments/process', (req, res) => {
//     while (!priorityQueue.isEmpty() || !paymentQueue.isEmpty()) {
//         let request;

//         if (!priorityQueue.isEmpty()) {
//             request = priorityQueue.dequeue();
//         } else {
//             request = paymentQueue.dequeue();
//         }

//         processTransaction(request);
//     }

//     res.json({ message: "All payments processed." });
// });

// // Helper function to process individual transaction
// function processTransaction(request) {
//     generateInvoice(request); // Generate invoice as PDF
//     transactionHistory.push(request); // Add to history stack
// }

// // Start the server
// app.listen(port, () => {
//     console.log(`Server is running on http://localhost:${port}`);
// });


const express = require('express');
const bodyParser = require('body-parser');
const Queue = require('./queues/Queue');
const PriorityQueue = require('./queues/PriorityQueue');
const Stack = require('./stacks/Stack');
const { generateInvoice } = require('./fileHandling/fileOperations');

const app = express();
const port = 3000;

const paymentQueue = new Queue();
const priorityQueue = new PriorityQueue();
const transactionHistory = new Stack();

app.use(bodyParser.json());

// Endpoint to add a new payment request
app.post('/api/payments', (req, res) => {
    const { customerName, address, type, amount, urgent } = req.body;

    const request = {
        id: Date.now(),
        date: new Date().toISOString().split('T')[0],
        customerName,
        address,
        type,
        amount,
        urgent
    };

    if (urgent) {
        priorityQueue.enqueue(request, 1); // Priority 1 for urgent
    } else {
        paymentQueue.enqueue(request);
    }

    res.json({ message: "Payment request added", request });
});

// Endpoint to process all payment requests
app.post('/api/payments/process', (req, res) => {
    try {
        while (!priorityQueue.isEmpty() || !paymentQueue.isEmpty()) {
            let request;

            if (!priorityQueue.isEmpty()) {
                request = priorityQueue.dequeue();
            } else {
                request = paymentQueue.dequeue();
            }

            console.log("Processing request:", request);
            processTransaction(request);
        }
        res.json({ message: "All payments processed." });
    } catch (error) {
        console.error("Error processing payments:", error);
        res.status(500).json({ message: "Error processing payments", error });
    }
});

// Helper function to process individual transaction
function processTransaction(request) {
    try {
        generateInvoice(request); // Generate invoice as PDF
        transactionHistory.push(request); // Add to history stack
    } catch (error) {
        console.error("Error in processTransaction:", error);
        throw error; // Propagate error up
    }
}

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
