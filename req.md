
# WarmPaws – Pet Care in Winter

## Assignment Category
Assignment-09_category_rose

## Project Theme
A cozy winter companion platform for pet owners to ensure their furry friends stay warm, safe, and healthy during the cold season. Users can explore local pet care services, winter pet clothing, grooming options, and expert tips — all in one friendly interface.

## Requirements Checklist

### Code Quality & Deployment
- [ ] **GitHub Commits**: At least 10 meaningful commits with descriptive messages
- [ ] **README.md**: Include project name, purpose, live URL, key features, npm packages
- [ ] **Responsiveness**: Fully responsive on mobile, tablet, and desktop
- [ ] **Environment Variables**: Secure Firebase config using `.env`
- [ ] **SPA Behavior**: No errors on route reloads
- [ ] **Hosting**: Deploy on Netlify, Surge, or Firebase with authorized domains

### Design & UX
- [ ] Minimalist, modern design with clarity
- [ ] Subtle animations (AOS, Framer Motion, or Swiper.js)
- [ ] Persistent Navbar/Footer without crashes

## Features

### 1. Navbar
- Logo
- Navigation Links: Home, Services, My Profile
- User avatar with displayName on hover (if logged in)
- Login/Register buttons (if logged out)
- Logout button (if logged in)

### 2. Footer
- Contact info, social links, privacy policy

### 3. Home Page
- **Hero Slider**: Swiper/DaisyUI with winter-themed pet showcase
- **Popular Winter Care Services**: Cards from JSON (image, name, rating, price, "View Details")
- **Winter Care Tips**: Static/fake JSON data section
- **Meet Our Expert Vets**: 3–4 expert profiles
- **Extra Section**: Relevant to pet care (user-designed)

### 4. JSON Data Structure
Minimum 6 pet care services with fields:
```json
[
    {
        "serviceId": 1,
        "serviceName": "Winter Coat Fitting for Dogs",
        "providerName": "PawCare Studio",
        "providerEmail": "info@pawcare.com",
        "price": 25,
        "rating": 4.9,
        "slotsAvailable": 4,
        "description": "Custom coat fitting and warm outfit options...",
        "image": "URL",
        "category": "Clothing"
    }
]
```

### 5. Service Details Page (Protected Route)
- Redirect to login if not authenticated
- Redirect back to this page after login
- Display all JSON fields
- "Book Service" form (Name, Email)
- Success toast on submission

### 6. Authentication

**Login Page**
- Email & Password fields
- "Forget Password" link
- Login button with error toast
- Signup link
- Google OAuth button
- Redirect to desired route or Home after successful login

**Signup Page**
- Name, Email, Photo-URL, Password fields
- Password validation:
    - ✓ Uppercase letter
    - ✓ Lowercase letter
    - ✓ At least 6 characters
- Show validation errors
- Google OAuth button
- Login link
- Redirect to Home after successful signup

**Forgot Password Page**
- Email field (pre-filled from login if available)
- Reset button redirects to Gmail

### 7. My Profile Page
- Display: Name, Email, Image
- "Update Profile" button (update Name & Image using `updateProfile()`)
- Can be separate page or modal form

### 8. Additional Requirements
- [ ] Password toggle eye button in login/signup
- [ ] Use at least 3 npm packages: AOS, Animate.css, React-Spring, react-hot-toast, Swiper
- [ ] Toast notifications for success/error messages
- [ ] No crashes on page reloads

## Submission
- [ ] GitHub Repo Link: _____
- [ ] Live Link: _____
