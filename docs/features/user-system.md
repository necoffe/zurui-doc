# User System

Detailed documentation of the user authentication and features.

## Registration Flow

1. User clicks "Register"
2. Provides: name, email, password
3. Account created with `user` role
4. Automatically logged in and redirected

## Google OAuth Flow

1. User clicks "Login with Google"
2. Redirected to Google consent screen
3. Google returns auth token
4. System finds or creates user by email
5. User logged in

## User Features

### Bookmarks
- One-click bookmark/unbookmark
- Stored in `bookmarks` table (user_id ↔ manga_id)
- Accessible at `/library`

### Readlists
- Custom collections of manga
- Create, rename, delete readlists
- Add/remove manga from any readlist
- Multiple readlists supported

### Reading History
- Auto-tracked when reading chapters
- Stores last read chapter per manga
- Enables "Continue Reading" on manga detail page

### Ratings
- 5-star system (stored as 1-5 integer)
- One rating per user per manga
- `refreshScore()` converts to 10-point scale
- Average displayed on manga pages and cards
- Total raters count shown

### Comments
- Available on manga detail and chapter reader pages
- Threaded replies (one level deep)
- Admin badges shown for admin users
- Admin-only delete action
- Rate limited to prevent spam

## Security

| Feature | Implementation |
|---------|---------------|
| Password Storage | bcrypt (12 rounds) |
| CSRF Protection | Token on all forms |
| Rate Limiting | Login: 5/min, Register: 3/min, Comments: 10/min |
| Session Security | Encrypted, secure cookies in production |
| XSS Prevention | Blade auto-escaping |
