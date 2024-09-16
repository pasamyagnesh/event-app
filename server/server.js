const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 5000;

// Sample event data for all departments
const eventData = {
  CSE: [
    {
      eventName: "Poster Presentation",
      topics: "Artificial Intelligence, Machine Learning, Block Chain, Cybersecurity, Generative AI",
      prize: "5000/- Prize money",
      winners: "-",
      coordinators: "O.Bharath Kiran, Y.Satish Reddy, S. Sai Kumar"
    },
    {
      eventName: "Paper Presentation",
      topics: "Internet of Things, Renewable Energy, Sustainable Development, Healthcare Policy and Management, Financial Markets and Investment",
      prize: "7000/- Prize money",
      winners: "-",
      coordinators: "V.Harsha vardhan, P.Yagnesh, P.Siddardh"
    },
    {
      eventName: "Coding Competition",
      topics: "Data Structures, Algorithms, Competitive Programming",
      prize: "8000/- Prize money",
      winners: "-",
      coordinators: "N.Sravan Kumar, T.Suresh"
    },
    {
      eventName: "Hackathon",
      topics: "Web Development, Mobile App Development, Cybersecurity",
      prize: "10000/- Prize money",
      winners: "-",
      coordinators: "P.Vikram, R.Mahesh"
    },
    {
      eventName: "Tech Quiz",
      topics: "Programming Languages, Networking, Operating Systems",
      prize: "3000/- Prize money",
      winners: "-",
      coordinators: "S.Ravi Kumar, K.Jyothi"
    }
  ],
  ECE: [
    {
      eventName: "Poster Presentation",
      topics: "Digital Signal Processing, Embedded Systems, Communication Engineering",
      prize: "5000/- Prize money",
      winners: "-",
      coordinators: "A.Kumar, B.Singh"
    },
    {
      eventName: "Paper Presentation",
      topics: "Wireless Communication, VLSI Design, Internet of Things",
      prize: "7000/- Prize money",
      winners: "-",
      coordinators: "C.Joshi, D.Mehta"
    },
    {
      eventName: "Robotics Expo",
      topics: "Autonomous Systems, Robotics Design, Mechatronics",
      prize: "9000/- Prize money",
      winners: "-",
      coordinators: "E.Rahul, F.George"
    },
    {
      eventName: "Circuit Design Challenge",
      topics: "Analog Circuits, Digital Logic Design, VLSI",
      prize: "12000/- Prize money",
      winners: "-",
      coordinators: "G.Priya, H.Kumar"
    },
    {
      eventName: "Tech Quiz",
      topics: "Electronics, Signal Processing, Communication Networks",
      prize: "3000/- Prize money",
      winners: "-",
      coordinators: "I.Venkat, J.Mahesh"
    }
  ],
  EEE: [
    {
      eventName: "Poster Presentation",
      topics: "Power Systems, Electric Machines, Renewable Energy",
      prize: "5000/- Prize money",
      winners: "-",
      coordinators: "K.Nikhil, L.Akash"
    },
    {
      eventName: "Paper Presentation",
      topics: "Smart Grids, Electric Vehicles, Energy Efficiency",
      prize: "7000/- Prize money",
      winners: "-",
      coordinators: "M.Sravan, N.Hemanth"
    },
    {
      eventName: "Project Expo",
      topics: "Solar Power, Wind Energy, Smart Homes",
      prize: "10000/- Prize money",
      winners: "-",
      coordinators: "O.Shiva, P.Anusha"
    },
    {
      eventName: "Circuit Design",
      topics: "Power Electronics, Control Systems, Transformers",
      prize: "9000/- Prize money",
      winners: "-",
      coordinators: "Q.Krishna, R.Preeti"
    },
    {
      eventName: "Tech Quiz",
      topics: "Power Systems, Electronics, Electric Drives",
      prize: "3000/- Prize money",
      winners: "-",
      coordinators: "S.Kalyan, T.Suresh"
    }
  ],
  MECH: [
    {
      eventName: "Poster Presentation",
      topics: "Automobile Engineering, Thermodynamics, Fluid Mechanics",
      prize: "5000/- Prize money",
      winners: "-",
      coordinators: "U.Rajesh, V.Dheeraj"
    },
    {
      eventName: "Paper Presentation",
      topics: "Manufacturing Processes, CAD/CAM, Robotics",
      prize: "7000/- Prize money",
      winners: "-",
      coordinators: "W.Siva, X.Vamsi"
    },
    {
      eventName: "Model Expo",
      topics: "3D Printing, CNC Machines, Advanced Materials",
      prize: "10000/- Prize money",
      winners: "-",
      coordinators: "Y.Vinay, Z.Shanth"
    },
    {
      eventName: "Design Challenge",
      topics: "Automobile Design, Aerospace Engineering, HVAC Systems",
      prize: "12000/- Prize money",
      winners: "-",
      coordinators: "A.Akash, B.Preeti"
    },
    {
      eventName: "Tech Quiz",
      topics: "Thermodynamics, Fluid Mechanics, Machine Design",
      prize: "3000/- Prize money",
      winners: "-",
      coordinators: "C.Jyothi, D.Rajesh"
    }
  ],
  CIVIL: [
    {
      eventName: "Poster Presentation",
      topics: "Structural Engineering, Green Buildings, Urban Planning",
      prize: "5000/- Prize money",
      winners: "-",
      coordinators: "E.Kiran, F.Pranay"
    },
    {
      eventName: "Paper Presentation",
      topics: "Earthquake Engineering, Smart Cities, Water Resources",
      prize: "7000/- Prize money",
      winners: "-",
      coordinators: "G.Manoj, H.Arun"
    },
    {
      eventName: "Building Design Expo",
      topics: "Architecture, Urban Planning, Sustainable Development",
      prize: "10000/- Prize money",
      winners: "-",
      coordinators: "I.Venkat, J.Ram"
    },
    {
      eventName: "Surveying Challenge",
      topics: "Land Surveying, GPS, Geotechnical Engineering",
      prize: "9000/- Prize money",
      winners: "-",
      coordinators: "K.Preeti, L.Vikram"
    },
    {
      eventName: "Tech Quiz",
      topics: "Civil Engineering, Construction Management, Transportation",
      prize: "3000/- Prize money",
      winners: "-",
      coordinators: "M.Ravi, N.Suresh"
    }
  ],
  AIML: [
    {
      eventName: "Poster Presentation",
      topics: "Deep Learning, Reinforcement Learning, Natural Language Processing",
      prize: "5000/- Prize money",
      winners: "-",
      coordinators: "O.Pratap, P.Geetha"
    },
    {
      eventName: "Paper Presentation",
      topics: "Artificial Intelligence, Computer Vision, Predictive Analytics",
      prize: "7000/- Prize money",
      winners: "-",
      coordinators: "Q.Harsha, R.Poojitha"
    },
    {
      eventName: "Hackathon",
      topics: "AI for Healthcare, Autonomous Systems, AI Ethics",
      prize: "12000/- Prize money",
      winners: "-",
      coordinators: "S.Anil, T.Rohit"
    },
    {
      eventName: "ML Model Expo",
      topics: "Data Science, AI Tools, Machine Learning Models",
      prize: "10000/- Prize money",
      winners: "-",
      coordinators: "U.Kiran, V.Priya"
    },
    {
      eventName: "Tech Quiz",
      topics: "AI Algorithms, Neural Networks, AI Applications",
      prize: "3000/- Prize money",
      winners: "-",
      coordinators: "W.Sai, X.Kumar"
    }
  ]
};


// Serve static files from the React app
app.use(express.static(path.join(__dirname, '../client/build')));

// API route to fetch event data based on department
app.get('/api/events/:department', (req, res) => {
  const department = req.params.department.toUpperCase();
  const data = eventData[department] || [];
  console.log(data);
  res.json(data);
});

// Catch-all route to serve React app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
