<div align="center">

# Bondeth Tech — Backend

**The backend API for Bondeth Tech, an online technology shop.**

![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![NestJS](https://img.shields.io/badge/NestJS-E0234E?style=for-the-badge&logo=nestjs&logoColor=white)
![TypeORM](https://img.shields.io/badge/TypeORM-FE0803?style=for-the-badge&logo=typeorm&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-4169E1?style=for-the-badge&logo=postgresql&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=jsonwebtokens&logoColor=white)

</div>

---

## Overview

Bondeth Tech Backend powers the Bondeth Tech online store. It provides authentication, a product catalog with brands and categories, a shopping cart, and order management through a REST API for the [Bondeth Tech storefront](https://github.com/RithyBondeth/Bondeth-Tech-Frontend).

## Features

- **Authentication:** registration and login with bcrypt and JWT (Passport), plus admin role management.
- **Catalog:** products with images and filtering, and full CRUD for brands and categories.
- **Shopping cart:** create a cart, and add, update, or remove items.
- **Orders:** checkout from the cart, filtering, and status updates.
- **User management** for admins.
- **Database seeding** with Faker.

## Tech Stack

| Area | Technology |
| --- | --- |
| Framework | NestJS |
| Language | TypeScript |
| Database | PostgreSQL, TypeORM |
| Authentication | Passport JWT, bcrypt |
| Validation | class-validator, class-transformer |

## Getting Started

### Prerequisites

- Node.js and npm
- A PostgreSQL database

### Installation

```bash
git clone https://github.com/RithyBondeth/Bondeth-Tech-Backend.git
cd Bondeth-Tech-Backend
npm install
npm run seed          # optional demo data
npm run start:dev
```

The API is served at `http://localhost:3000/api`.

### Environment Variables

| Variable | Purpose |
| --- | --- |
| `DATABASE_URL` | PostgreSQL connection string |
| `DATABASE_SYNCHRONIZE` | Auto-sync the schema (development only) |
| `JWT_SECRET`, `JWT_EXPIRE_IN` | Token signing |

## Project Structure

```text
Bondeth-Tech-Backend/
└── src/
    ├── auth/  user/  product/  cart/  order/
    ├── entities/     # TypeORM entities
    ├── guards/       # Auth and role guards
    └── config/       # Database and JWT configuration
```

## Related Repositories

- [Bondeth-Tech-Frontend](https://github.com/RithyBondeth/Bondeth-Tech-Frontend): the storefront

## Author

**Rithy Bondeth** — Full Stack Developer & AI Engineer

[![Portfolio](https://img.shields.io/badge/Portfolio-0A0A0A?style=for-the-badge&logo=vercel&logoColor=white)](https://bondeth.dev)
[![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/RithyBondeth)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/rithy-bondeth-484073282/)
