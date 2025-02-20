# Welcome to s-507568 project

## Project info

**URL**: https://lovable.dev/projects/a144a17e-bf25-4d3f-a7e1-d5e8dcdeca6f

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/a144a17e-bf25-4d3f-a7e1-d5e8dcdeca6f) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with .

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/a144a17e-bf25-4d3f-a7e1-d5e8dcdeca6f) and click on Share -> Publish.

## I want to use a custom domain - is that possible?

We don't support custom domains (yet). If you want to deploy your project under your own domain then we recommend using Netlify. Visit our docs for more details: [Custom domains](https://docs.lovable.dev/tips-tricks/custom-domain/)

## Docker Setup

This project can be run using Docker for a consistent development environment.

### Prerequisites

- Docker
- Docker Compose

### Development Setup

1. Build and start the development container:

```bash:README.md
docker-compose up --build
```

2. Access the application at `http://localhost:8080`

3. Stop the containers:
```bash
docker-compose down
```

### Production Setup

1. Build and start the production container:
```bash
docker-compose -f docker-compose.prod.yml up --build
```

2. Access the production build at `http://localhost:80`

### Useful Docker Commands

```bash
# View logs
docker-compose logs -f

# Rebuild containers
docker-compose up --build

# Run in detached mode
docker-compose up -d

# Stop and remove containers
docker-compose down

# Remove volumes too
docker-compose down -v
```

### Docker Configuration Files

The project includes several Docker-related files:

- `Dockerfile` - Development container configuration
- `Dockerfile.prod` - Production container configuration 
- `docker-compose.yml` - Development orchestration
- `docker-compose.prod.yml` - Production orchestration
- `.dockerignore` - Specifies which files Docker should ignore

### Environment Variables

Docker Compose files will use the following environment variables:

- `NODE_ENV` - Set to `development` or `production`
- `PORT` - Default is `8080` for development, `80` for production

### Volume Mounting

The development setup uses volume mounting to enable hot-reloading:

- Source code is mounted at `/app`
- `node_modules` are maintained in a named volume

This ensures that code changes are reflected immediately without requiring container rebuilds.
