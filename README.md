## Getting Started

## Default Seeding User Account:

Admin 
`
{
    "email": "admin@vascomm.id",
    "password": "Vascomm2023!"
}
`

Customer 
`
{
    "email": "customer@vascomm.com",
    "password": "Vascomm2023!"
}
`

## Routes Customer

```bash
/
# base route homepage
/search
# search product
/auth
# login customer
/register
# register customer
```

## Routes Admin

```bash
/dashboard
# dashboard admin
/dashboard/auth
# login as administrator
/dashboard/product
# product management page
/dashboard/user
# user management page
/uknown-routes
# guard for non-existing routes
```

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.
This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.
