# Boss Machine

Boss Machine is a web application that helps manage Minions, Million Dollar Ideas, and Meetings for a fictional boss. It uses React for the frontend and Redux for state management. The backend is implemented with Express and utilizes the Faker library for generating mock data.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [File Structure](#file-structure)
- [API Endpoints](#api-endpoints)
- [License](#license)

- ##Screenshot of the UI
<img width="1068" alt="image" src="https://github.com/user-attachments/assets/a744c179-c53d-4099-8786-b29bc68b209b">
<img width="1013" alt="image" src="https://github.com/user-attachments/assets/89c9e5e4-92ba-4b29-b714-1eb64b12f708">
<img width="857" alt="image" src="https://github.com/user-attachments/assets/7f8c1e6b-eee5-474f-8de3-265f3965da8e">
<img width="801" alt="image" src="https://github.com/user-attachments/assets/f341d479-b0e6-44fc-8051-2c493a15b577">
<img width="998" alt="image" src="https://github.com/user-attachments/assets/5409e3ee-3255-4065-8dfb-99fa398b658b">
<img width="910" alt="image" src="https://github.com/user-attachments/assets/14f2a48b-9953-491c-8489-7356c872b0a5">
<img width="847" alt="image" src="https://github.com/user-attachments/assets/756b5df7-fa21-4646-858b-a3b179918360">


## Installation

### Prerequisites

- Node.js
- npm (Node Package Manager)

### Backend Setup

1. Clone the repository:
    ```bash
    git clone <repository-url>
    cd <repository-directory>
    ```

2. Install the backend dependencies:
    ```bash
    npm install
    ```

3. Start the backend server:
    ```bash
    npm start
    ```

The backend server should now be running on `http://localhost:4001`.

### Frontend Setup

1. Navigate to the frontend directory:
    ```bash
    cd frontend
    ```

2. Install the frontend dependencies:
    ```bash
    npm install
    ```

3. Start the frontend development server:
    ```bash
    npm start
    ```

The frontend should now be running on `http://localhost:3000`.

## Usage

- Navigate to `http://localhost:3000` to access the application.
- Use the navigation links to access Minions, Million Dollar Ideas, and Meetings sections.
- Add, edit, and delete records as needed.

## Features

- **Minions Management**: Add, edit, and delete minions.
- **Million Dollar Ideas**: Create, update, and remove ideas.
- **Meetings Management**: Automatically generated meetings that can be deleted all at once.

## File Structure

```plaintext
.
├── backend
│   ├── db
│   │   ├── ideas.js
│   │   ├── meetings.js
│   │   ├── minions.js
│   │   ├── work.js
│   │   └── utils.js
│   ├── routes
│   │   ├── ideas.js
│   │   ├── meetings.js
│   │   ├── minions.js
│   │   └── work.js
│   ├── server.js
│   └── package.json
├── frontend
│   ├── src
│   │   ├── components
│   │   │   ├── AllIdeas.js
│   │   │   ├── AllMeetings.js
│   │   │   ├── AllMinions.js
│   │   │   ├── Home.js
│   │   │   ├── IdeaDetail.js
│   │   │   ├── IdeaForm.js
│   │   │   ├── Meeting.js
│   │   │   ├── MinionDetail.js
│   │   │   ├── MinionForm.js
│   │   │   └── WorkList.js
│   │   ├── store
│   │   │   ├── ideasSlice.js
│   │   │   ├── meetingsSlice.js
│   │   │   ├── minionsSlice.js
│   │   │   ├── selectedIdea.js
│   │   │   ├── selectedMinion.js
│   │   │   └── store.js
│   │   ├── App.js
│   │   ├── index.js
│   │   └── utils.js
│   ├── public
│   └── package.json
└── README.md
```
## API Endpoints
### Minions
- GET /api/minions: Retrieve all minions.
- POST /api/minions: Create a new minion.
- GET /api/minions/:id: Retrieve a minion by ID.
- PUT /api/minions/:id: Update a minion by ID.
- DELETE /api/minions/:id: Delete a minion by ID.
### Ideas
- GET /api/ideas: Retrieve all ideas.
- POST /api/ideas: Create a new idea.
- GET /api/ideas/:id: Retrieve an idea by ID.
- PUT /api/ideas/:id: Update an idea by ID.
- DELETE /api/ideas/:id: Delete an idea by ID.
### Meetings
- GET /api/meetings: Retrieve all meetings.
- POST /api/meetings: Create a new meeting.
- DELETE /api/meetings: Delete all meetings.


### Explanation

1. **Installation**: Step-by-step instructions for setting up the project locally.
2. **Usage**: Basic instructions on how to navigate and use the application.
3. **Features**: Highlights the main features of the application.
4. **File Structure**: Provides an overview of the project's file structure.
5. **API Endpoints**: Lists the API endpoints available in the backend.
6. **License**: Specifies the project's license.

This `README.md` file provides a comprehensive overview of your project, making it easy for others to understand and use. If you need any more specific details or modifications, let me know!
