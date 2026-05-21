Ashish Verma - Developer Portfolio 🚀

A high-performance, modular personal portfolio built with React and Tailwind CSS. This application serves as a comprehensive showcase of my academic achievements at IIT Guwahati, competitive programming statistics, and technical projects spanning Systems Engineering, Machine Learning, and Full-Stack Development.

🔗 Live Demo: https://dev-portfolio-ashish.vercel.app/

✨ Key Features

Dynamic Coding Profiles: Automatically fetches and displays real-time statistics from the official Codeforces API and generates a dynamic SVG representation of LeetCode metrics to showcase my 900+ solved problems and Specialist rank.

Serverless Contact Form: Fully functional contact architecture utilizing Web3Forms to send messages directly to my email without requiring a dedicated backend server.

Direct CV Download: Integrated static asset hosting for instant retrieval of my latest resume.

Modular Architecture: Clean separation of concerns with reusable React components (Hero, Skills, Projects, CodingProfiles, Contact).

Responsive UI/UX: Fully mobile-responsive layout featuring staggered entrance animations via Framer Motion and a modern, dark-themed aesthetic.

🏆 Achievements Highlighted

GATE CSE AIR 733 (99.40 %ile) among 123,967 students.

Codeforces Specialist (Max rating: 1406).

900+ LeetCode Problems Solved honing Data Structures and Algorithms (DSA).

💻 Tech Stack

Languages: C/C++, Python, JavaScript, HTML/CSS

Web Technologies: React, Node.js, Express.js, Tailwind CSS

Databases: MongoDB, MySQL

Machine Learning & Systems: PyTorch, Hidden Markov Models (HMM), Socket Programming, Parallel External Memory (PEM) algorithms

Tools: Git, GitHub, Linux, Visual Studio

🚀 Projects Showcased

This portfolio highlights my top projects, bridging the gap between low-level systems and high-level AI/Web development:

PEM Algorithm for the LCS Problem: Designing Parallel Algorithms for the Longest Common Subsequence problem using Parallel External Memory (M.Tech Thesis).

Logic Synthesis Using Heuristics: Neural network combining GCN and embedders to predict and optimize circuit delay, cutting synthesis time from 3 hours to 20 minutes (PyTorch, Simulated Annealing).

Secure Hybrid TCP/UDP Framework: C++ client-server system demonstrating FCFS/RR scheduling, XOR encryption, and high-speed UDP data transfer.

Voice-Based Dictionary Search: Real-time C++ speech recognition system using Hidden Markov Models achieving 88% accuracy.

Blog-Bar: A full-stack MERN platform for creating, sharing, and managing articles with secure JWT authentication.

'''

📂 Project Structure

├── public/
│   └── docs/
│       └── Ashish_Resume.pdf    # Static resume file for download
├── src/
│   ├── components/              # Modular UI components
│   │   ├── CodingProfiles.jsx   # Live API data fetching (CF & LeetCode)
│   │   ├── Contact.jsx          # Web3Forms integration
│   │   ├── Hero.jsx             # Animated landing section
│   │   ├── ProjectCard.jsx      # Reusable project display
│   │   └── Skills.jsx           # Tech stack breakdown
│   ├── data/
│   │   └── projects.js          # Centralized project data store
│   ├── pages/
│   │   └── Home.jsx             # Main page assembly
│   ├── App.jsx                  # Application routing & layout
│   └── main.jsx                 # React entry point

'''

🛠️ Local Setup & Installation

To run this project locally on your machine:

Clone the repository

git clone [https://github.com/ashishvermag/your-repo-name.git](https://github.com/ashishvermag/your-repo-name.git)
cd your-repo-name


Install dependencies

'''
npm install
'''


Configure Environment Variables (Optional)
To enable the contact form locally, locate the accessKey variable inside src/components/Contact.jsx and replace the placeholder with your own key from Web3Forms.

Start the development server

'''
npm run dev
'''


📬 Contact & Links

Email: ashish.av35@gmail.com

College Email: ashish@iitg.ac.in

LinkedIn: ashish-verma1001

GitHub: ashishvermag

LeetCode: ashish_verma101

Designed and built by Ashish Verma.
