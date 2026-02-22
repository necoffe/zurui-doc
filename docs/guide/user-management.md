# User Management

Managing users, roles, and authentication in Zurui.

## Authentication Methods

### Email/Password

Standard registration and login with:
- Email validation
- Password hashing (bcrypt)
- Rate-limited login attempts (`5 attempts per minute`)
- Rate-limited registration (`3 per minute`)

### Google OAuth

Social login via Google:
1. User clicks "Login with Google"
2. Redirects to Google consent screen
3. Returns with user profile
4. Auto-creates account or links existing

## User Roles

| Role | Access Level |
|------|-------------|
| **user** | Read manga, comment, bookmark, rate |
| **admin** | Full access to admin panel and all features |

## User Features

### Bookmarks / Library

- Users can bookmark manga to their library
- Toggle with a single click on the manga page
- View all bookmarks at `/library`

### Readlists

- Users can create custom reading lists
- Add/remove manga from readlists
- Multiple readlists per user
- Shareable list URLs

### Reading History

- Automatically tracks last read chapter per manga
- "Continue Reading" button shows on manga pages
- History stored per-user in database

### Ratings

- 5-star rating system per manga
- Ratings stored per-user (one rating per manga)
- Average score calculated automatically (`rating × 2` = 10-point scale)
- Real-time UI update after rating

### Comments

- Comments on both manga series and individual chapters
- Threaded replies
- Admin-only delete capability
- Rate-limited posting
- Comment rules displayed to users

### Profile

- Users can update their display name
- Upload profile photo
- Change password
- View stats (comments, bookmarks, etc.)

## Admin User Management

### Viewing Users

Navigate to **Admin → Users** to see all registered users with:
- Name, email, role
- Registration date
- Profile photo

### Modifying Users

Admins can:
- Change user roles (promote to admin)
- Suspend/ban users
- Delete user accounts

### Reports

Users can report issues via the Report button on manga/chapter pages:
- **Gambar Rusak** (Broken Images)
- **Gambar Acak** (Random/Wrong Images)  
- **Halaman Hilang** (Missing Pages)
- **Isi Salah** (Wrong Content)
- **Lainnya** (Other)

Admins can view and manage reports in **Admin → Reports**.
