# Complete Setup Guide
## Step-by-Step Instructions for Beginners

Welcome! This guide will help you set up and customize your portfolio website from scratch. Follow these steps carefully.

---

## 📋 Prerequisites

You don't need to install anything to get started! All tools are free and web-based.

**Required:**
- A computer (Windows, Mac, or Linux)
- Internet connection
- A web browser (Chrome, Firefox, Edge, or Safari)
- A text editor (we'll use VS Code - free)

**Optional (for deployment):**
- GitHub account (free at github.com)
- Email account for contact form

---

## 🚀 Step 1: Download and Install VS Code

VS Code (Visual Studio Code) is a free code editor made by Microsoft.

1. **Download VS Code**
   - Go to: https://code.visualstudio.com/
   - Click "Download for Windows" (or Mac/Linux)
   - Run the installer
   - Follow installation wizard (use default settings)

2. **Install Essential Extensions** (Optional but helpful)
   - Open VS Code
   - Click Extensions icon (square icon in left sidebar) or press `Ctrl+Shift+X`
   - Search and install:
     - **Live Server** (by Ritwick Dey) - Preview your website
     - **Prettier** (by Prettier) - Auto-format code
     - **HTML CSS Support** - Better code suggestions

---

## 📁 Step 2: Open Your Project

1. **Open VS Code**
2. **Open Folder**
   - Click `File` → `Open Folder`
   - Navigate to: `C:\Users\aryan\OneDrive\Desktop\aryan-portfolio`
   - Click "Select Folder"

3. **Explore the Structure**
   You should see:
   ```
   aryan-portfolio/
   ├── index.html
   ├── css/
   │   ├── style.css
   │   └── responsive.css
   ├── js/
   │   ├── main.js
   │   └── form-validation.js
   ├── images/
   │   └── projects/
   └── README.md
   ```

---

## 🎨 Step 3: Customize Your Content

### 3.1 Update Personal Information

**Open `index.html`** and find these sections:

#### A. Home Section (Line ~55)
```html
<h1 class="home-title">Aryan Srivastava</h1>
<h2 class="home-subtitle">Front-End Web Developer</h2>
<p class="home-description">
    Your description here...
</p>
```
**Replace with your own information.**

#### B. Social Media Links (Line ~70)
```html
<a href="https://github.com" target="_blank" class="social-link">
<a href="https://linkedin.com" target="_blank" class="social-link">
```
**Replace URLs with your actual GitHub and LinkedIn profiles.**

#### C. About Section (Line ~95)
Update:
- About Me paragraphs
- Name, Location, Education
- Available status

#### D. Skills Section (Line ~140)
Update skill percentages and descriptions:
```html
<div class="skill-bar" data-level="90"></div>
```

#### E. Projects Section (Line ~180)
Update each project:
- Project title
- Description
- Technologies (tags)
- GitHub and demo links

#### F. Contact Section (Line ~290)
Update:
- Email address
- Phone number
- Location
- Social media links

### 3.2 Add Your Images

1. **Profile Photo**
   - Get a professional photo (or use a placeholder)
   - Save as `profile.jpg`
   - Place in `images/` folder
   - Should be 400x400 pixels (square)

2. **Project Images**
   - Get screenshots of your projects
   - Save as `project1.jpg`, `project2.jpg`, etc.
   - Place in `images/projects/` folder
   - Should be 800x600 pixels (landscape)

**See `images/README.md` for detailed image setup instructions.**

---

## 👀 Step 4: Preview Your Website

### Method 1: Using Live Server (Recommended)

1. **Install Live Server Extension** (if not already)
   - Click Extensions icon
   - Search "Live Server"
   - Click Install

2. **Open Website**
   - Right-click on `index.html` in VS Code
   - Select "Open with Live Server"
   - Your browser will open automatically
   - Website will auto-refresh when you save changes

### Method 2: Direct Browser Opening

1. **Open File**
   - Navigate to project folder in File Explorer
   - Double-click `index.html`
   - Opens in default browser

**Note:** Method 2 won't auto-refresh. Use Live Server for development!

---

## ✏️ Step 5: Make Changes and Test

1. **Edit Files**
   - Make changes in VS Code
   - Save (`Ctrl+S`)
   - See changes in browser (if using Live Server)

2. **Test Responsiveness**
   - Open browser DevTools (`F12`)
   - Click device toggle icon (or `Ctrl+Shift+M`)
   - Test different screen sizes (mobile, tablet, desktop)

3. **Test Form**
   - Scroll to Contact section
   - Fill out the form
   - Check validation messages
   - Submit (currently simulated - see deployment guide for real form setup)

---

## 🎯 Step 6: Color Customization (Optional)

Want to change colors? Edit `css/style.css`:

**Find the `:root` section (line ~5):**
```css
:root {
    --primary-color: #2563eb;    /* Main blue */
    --primary-dark: #1e40af;     /* Dark blue */
    --secondary-color: #10b981;  /* Green accent */
    /* ... more colors */
}
```

**Change hex codes:**
- Use [Coolors.co](https://coolors.co) to find color palettes
- Copy hex codes and replace values
- Save and refresh browser

---

## 📦 Step 7: Prepare for Deployment

Before deploying, make sure:

- ✅ All your information is updated
- ✅ Images are added
- ✅ Links work correctly
- ✅ Form validation works
- ✅ Website looks good on mobile and desktop

---

## 🌐 Step 8: Deploy Your Website

Follow the **DEPLOYMENT.md** file for detailed instructions on:
- GitHub Pages (free hosting)
- Netlify (drag & drop)
- Vercel (CLI)
- Setting up contact form

---

## 🔧 Common Issues & Solutions

### Images Not Showing?
- Check file names match exactly (case-sensitive)
- Make sure images are in correct folders
- Use relative paths: `images/profile.jpg`

### Styles Not Loading?
- Check CSS files are in `css/` folder
- Check file paths in HTML: `href="css/style.css"`
- Hard refresh browser: `Ctrl+F5`

### JavaScript Not Working?
- Open browser console (`F12`)
- Check for errors (red text)
- Make sure JS files are in `js/` folder

### Form Not Submitting?
- Check browser console for errors
- Make sure form validation service is set up (see DEPLOYMENT.md)
- Test with Formspree or EmailJS

---

## 📚 Learning Resources

**HTML/CSS/JavaScript:**
- [MDN Web Docs](https://developer.mozilla.org) - Official documentation
- [W3Schools](https://www.w3schools.com) - Beginner tutorials
- [freeCodeCamp](https://www.freecodecamp.org) - Free courses

**Portfolio Inspiration:**
- [Awwwards](https://www.awwwards.com) - Best web designs
- [Dribbble](https://dribbble.com) - Design inspiration

**Free Tools:**
- [Canva](https://www.canva.com) - Design graphics
- [Unsplash](https://unsplash.com) - Free photos
- [Font Awesome](https://fontawesome.com) - Icons (already included)

---

## ✅ Checklist

Use this checklist to ensure everything is ready:

- [ ] VS Code installed
- [ ] Project folder opened in VS Code
- [ ] Personal information updated in HTML
- [ ] Profile photo added
- [ ] Project images added
- [ ] Social media links updated
- [ ] Skills percentages updated
- [ ] Projects descriptions updated
- [ ] Contact information updated
- [ ] Website tested in browser
- [ ] Mobile responsiveness checked
- [ ] Form validation tested
- [ ] Ready to deploy!

---

## 🎉 You're Done!

Your portfolio website is ready! Once you complete the deployment (Step 8), you'll have a live website that you can share with employers, clients, or anyone.

**Need Help?**
- Check the troubleshooting section above
- Review the DEPLOYMENT.md for hosting
- Search for solutions online (Stack Overflow, etc.)

Good luck with your portfolio! 🚀




