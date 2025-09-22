# NoteFlow - Digital Notes App

A beautiful, modern note-taking application built with Remix.js, featuring a clean UI and full CRUD operations.

![NoteFlow](https://via.placeholder.com/800x400/4f46e5/ffffff?text=NoteFlow+-+Your+Digital+Notes)

## Features

- **Modern UI**: Beautiful, responsive design with gradient backgrounds and glass-morphism effects
- **Full CRUD Operations**: Create, Read, Update, and Delete notes seamlessly
- **User Authentication**: Secure email/password authentication with cookie-based sessions
- **Real-time Updates**: Instant UI updates with Remix's built-in reactivity
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Fake Data Generation**: Built-in seeding with Faker.js for realistic test data

## Tech Stack

- **Frontend**: [Remix.js](https://remix.run/) with React
- **Database**: [SQLite](https://sqlite.org) with [Prisma ORM](https://prisma.io)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) with custom components
- **Authentication**: Cookie-based sessions with bcrypt password hashing
- **Testing**: [Cypress](https://cypress.io) for E2E tests, [Vitest](https://vitest.dev) for unit tests
- **Code Quality**: [ESLint](https://eslint.org), [Prettier](https://prettier.io), and [TypeScript](https://typescriptlang.org)
- **Data Generation**: [Faker.js](https://fakerjs.dev/) for realistic test data

## Getting Started

### Prerequisites

- Node.js 18+ 
- pnpm (recommended) or npm

### Installation

1. Clone the repository:
   ```bash
   git clone <your-repo-url>
   cd remixjs-crud
   ```

2. Install dependencies:
   ```bash
   pnpm install
   ```

3. Set up the database:
   ```bash
   pnpm run setup
   ```

4. Start the development server:
   ```bash
   pnpm run dev
   ```

The app will be available at `http://localhost:6999`

### Default Login Credentials

The seed script creates an admin user with test data:

- **Email**: `admin@example.com`
- **Password**: `password123`

### Database Seeding

The app includes a comprehensive seed script that generates:
- 1 admin user (admin@example.com)
- 10 fake users with random emails
- 5 notes per user (55 total notes)
- Realistic content using Faker.js

## Available Scripts

- `pnpm run dev` - Start development server on port 6999
- `pnpm run build` - Build for production
- `pnpm run start` - Start production server
- `pnpm run seed` - Seed database with fake data
- `pnpm run reset-db` - Reset database and reseed
- `pnpm run test` - Run unit tests with Vitest
- `pnpm run test:e2e:dev` - Run E2E tests with Cypress
- `pnpm run lint` - Run ESLint
- `pnpm run format` - Format code with Prettier

## Project Structure

### Key Files

- **Authentication**: [./app/models/user.server.ts](./app/models/user.server.ts) - User management and login
- **Sessions**: [./app/session.server.ts](./app/session.server.ts) - Session handling and verification
- **Notes CRUD**: [./app/models/note.server.ts](./app/models/note.server.ts) - Note operations (Create, Read, Update, Delete)
- **Database**: [./prisma/schema.prisma](./prisma/schema.prisma) - Database schema
- **Seeding**: [./prisma/seed.ts](./prisma/seed.ts) - Database seeding with Faker.js

### Routes

- `/` - Landing page with authentication options
- `/login` - User login
- `/join` - User registration  
- `/notes` - Notes dashboard
- `/notes/new` - Create new note
- `/notes/:id` - View and edit individual notes

## Development

This app runs on a fixed port `6999` for consistency. The development server includes:

- Hot reloading for instant updates
- Automatic database migrations
- Built-in error handling
- Mock server for development

### Database Management

- **Reset Database**: `pnpm run reset-db` - Clears all data and reseeds
- **Seed Database**: `pnpm run seed` - Adds fake data without clearing existing data
- **Database Location**: `./prisma/data.db` (SQLite file)

## Testing

### Cypress E2E Tests

Run end-to-end tests with:
```bash
pnpm run test:e2e:dev  # Interactive mode
pnpm run test:e2e:run  # Headless mode
```

Tests are located in the `cypress/e2e` directory and use [`@testing-library/cypress`](https://testing-library.com/cypress) for semantic element selection.

### Vitest Unit Tests

Run unit tests with:
```bash
pnpm run test
```

Uses [`@testing-library/jest-dom`](https://testing-library.com/jest-dom) for DOM-specific assertions.

### Code Quality

- **Type Checking**: `pnpm run typecheck` - TypeScript validation
- **Linting**: `pnpm run lint` - ESLint code analysis  
- **Formatting**: `pnpm run format` - Prettier code formatting

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Make your changes and test them
4. Commit your changes: `git commit -m 'Add amazing feature'`
5. Push to the branch: `git push origin feature/amazing-feature`
6. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
