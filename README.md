# Wind Route Sim

A web application showing a Mapbox map centered on Toronto.

## Setup

1.  Clone the repository.
2.  Install dependencies:
    ```bash
    npm install
    ```
3.  Create `.env.local` using `.env.example` as a template and add your Mapbox token:
    ```bash
    cp .env.example .env.local
    ```
    Edit `.env.local` to set `VITE_MAPBOX_TOKEN`.

## Running

Start the development server:

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).
