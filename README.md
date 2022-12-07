## Talon Home Assignment


### Server

---

#### Dockerfile

Running the server can be done with Dockerfile provided `server/Dockerfile`.

Build image and run with environment variables `DATABASE_USERNAME` and `DATABASE_PASSWORD`.

---

#### Setup
Node version `v17.8.0`

Under `server` directory, run

```
npm install
```

An environment variables `DATABASE_USERNAME` and `DATABASE_PASSWORD` are required, with the password for the MongoDB Atlas user.

---

#### Start
```
npm run start
```
Available on http://localhost:3000/

---

### Client

---

Angular application is built. `dist` is available at `server/public/angular-ui`, which is being served by the server. No action needed before running.

---