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

First, clone the repository to your local machine:

```bash
git clone https://github.com/<your-username>/url-shortener.git
cd url-shortener
npm install


### Create a .env file in the root directory and add your MongoDB URI:

MONGODB_URI=mongodb...

To start the server, run:
npm run dev

### Usage
Shortening a URL
Send a POST request to /url with a JSON body containing the URL:
json
{
  "url": "https://example.com"
}

Retrieving URL Analytics
To get analytics for a shortened URL, send a GET request to /url/analytics/:shortId.

You can also navigate to /url/:shortId to be redirected to the original URL.
