# Node.js URL Shortener

This URL Shortener service, built with Node.js, Express.js, and MongoDB, provides a RESTful API for shortening URLs and tracking their analytics. It's designed to be simple to set up and use.

## Features

- Easy URL shortening
- Analytics for tracking URL visits
- REST API

## Getting Started

### Prerequisites

- Node.js (v14+)
- npm
- MongoDB

### Installation

1. Clone the repository to your local machine:
    ```
    git clone https://github.com/<your-username>/url-shortener.git
    cd url-shortener
    npm install
    ```

2. Create a `.env` file in the root directory and add your MongoDB URI:
    ```
    MONGODB_URI=mongodb...
    ```

3. To start the server, run:
    ```
    npm run dev
    ```

### Usage

#### Shortening a URL

Send a POST request to `/url` with a JSON body containing the URL:

```json
{
  "url": "https://example.com"
}
