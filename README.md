Readme api

# GitHub Commit History Viewer

This project is a backend service that fetches and displays the commit history of a specified public GitHub repository. It uses the GitHub API to retrieve commit data and provides an endpoint to access this information.

## Features

- Fetches commit history from a specified GitHub repository.
- Displays commit messages, authors, timestamps, and more.
- Supports pagination to handle repositories with a large number of commits.

## Technologies Used

- Node.js
- Nest.js
- GitHub API

## Getting Started

### Prerequisites

- Node.js (version 14.x or later)
- GitHub account and personal access token (optional for authenticated requests)

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/martinperezarias/github-commit-viewer-api.git
    cd github-commit-viewer-api
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Create a `.env` file in the root of the project and add the following keys:
    ```bash
    PORT=4000
    GITHUB_TOKEN=XXXXXXXX (optional)
    USERNAME=alan2207
    REPO=bulletproof-react
    ```
    **I sugest you to set the username & repo provided here to get a repository with a good amount of commits**

### Usage

1. Start the server:
    ```bash
    npm start
    ```

2. The server will start on port `4000` by default. You can access the commit history endpoint at with a POST request:
    ```
    http://localhost:4000/api/commit/get/all
    ```
    With the following body example:

    Example:
    ```
    {
      page: 1
      perPage: 15
      repo: "martinperezarias"
      username: "mercadolibre-clone"
    }
    ```

### API Endpoints

- `POST /api/commit/get/all` - Fetch commit history for the specified repository.

#### Body request
- `username` The username name to fetch. (If is not provided the search will be by the environment keys provided before).
- `repo` The repository name to fetch. (If is not provided the search will be by the environment keys provided before).
- `page` The page number of results to fetch.
- `perPage` The number of results per page (default is 30).

#### Extra explanations
The application will fetch te commits twice.
- First to get the paginated information.
- The other to get the total number of commits in that repository.