# Pandist Cult API

Ruby + Sinatra + PostgreSQL API for the Pandist Cult website.

## Render settings

Create a Ruby web service with **Root Directory** set to `ruby-backend`.

- Build command: `bundle install`
- Start command: `bundle exec ruby app.rb`

Set these variables in Render's Environment tab. Do not put real credentials in GitHub.

- `DATABASE_URL`: Neon connection string for the existing ThePandistCult database; use SSL (`sslmode=require`).
- `FRONTEND_ORIGIN`: `https://ducklingx2.github.io`
- `FOUNDER_USERNAME`: exact username reserved for the Founder.
- `FOUNDER_PASSWORD`: strong password used only to create the Founder account if it does not exist.
- `PANDI_USERNAME`: exact username reserved for the Pandi.
- `PANDI_PASSWORD`: a different strong password used only to create the Pandi account if it does not exist.
- `RACK_ENV`: `production`

The API creates its database tables automatically. Passwords are bcrypt-hashed. Session tokens are random; only SHA-256 hashes are stored in the database. Registration does not allow users to select their rank or grade. The Founder assigns classifications. CALAMITY GRADE is reserved for the configured Founder and Pandi usernames.

The current Node service in `backend/` is deliberately left untouched on this preview branch. Do not change the live Render service to Ruby until you are ready to deploy this backend.
