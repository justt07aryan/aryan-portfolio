# Deployment Guide
## Free Hosting Options for Your Portfolio Website

This guide will help you deploy your portfolio website using free hosting services. No domain purchase or payment required!

---

## Option 1: GitHub Pages (Recommended - Completely Free)

### Prerequisites:
- GitHub account (free at github.com)
- Git installed on your computer (download from git-scm.com)

### Steps:

1. **Install Git** (if not already installed)
   - Download from: https://git-scm.com/downloads
   - Follow installation wizard

2. **Create GitHub Repository**
   - Go to github.com and sign in
   - Click the "+" icon → "New repository"
   - Name: `aryan-portfolio` (or any name)
   - Make it Public
   - Don't initialize with README (we already have files)
   - Click "Create repository"

3. **Upload Your Files**
   
   Open PowerShell/Terminal in your project folder and run:
   
   ```bash
   # Initialize git (first time only)
   git init
   
   # Add all files
   git add .
   
   # Commit files
   git commit -m "Initial commit: Portfolio website"
   
   # Add your GitHub repository (replace YOUR_USERNAME)
   git remote add origin https://github.com/YOUR_USERNAME/aryan-portfolio.git
   
   # Push to GitHub
   git branch -M main
   git push -u origin main
   ```

4. **Enable GitHub Pages**
   - Go to your repository on GitHub
   - Click "Settings" tab
   - Scroll to "Pages" in left sidebar
   - Under "Source", select "main" branch
   - Select "/ (root)" folder
   - Click "Save"
   - Wait 1-2 minutes

5. **Your Website is Live!**
   - URL: `https://YOUR_USERNAME.github.io/aryan-portfolio/`
   - Share this link with anyone!

---

## Option 2: Netlify (Easiest - Drag & Drop)

### Steps:

1. **Create Netlify Account**
   - Go to netlify.com
   - Sign up with GitHub/Email (free)

2. **Deploy Your Site**
   - Log in to Netlify
   - Drag and drop your project folder onto the Netlify dashboard
   - Wait for deployment (30 seconds)

3. **Your Website is Live!**
   - Netlify gives you a random URL: `https://random-name-123.netlify.app`
   - You can change it in Settings → Domain settings

4. **Future Updates**
   - Just drag and drop again, or
   - Connect to GitHub for automatic deployments

---

## Option 3: Vercel (Great for Performance)

### Steps:

1. **Install Node.js** (if not installed)
   - Download from: nodejs.org
   - Install the LTS version

2. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

3. **Deploy**
   ```bash
   # In your project folder
   vercel
   ```
   - Follow the prompts
   - First time: create account (free)
   - Press Enter to accept defaults

4. **Your Website is Live!**
   - Vercel gives you a URL like: `https://aryan-portfolio.vercel.app`

---

## Option 4: Surge.sh (Simple CLI)

### Steps:

1. **Install Node.js** (if not installed)
   - Download from: nodejs.org

2. **Install Surge**
   ```bash
   npm install -g surge
   ```

3. **Deploy**
   ```bash
   # In your project folder
   surge
   ```
   - Create free account when prompted
   - Enter domain (e.g., `aryan-portfolio.surge.sh`)
   - Press Enter

4. **Your Website is Live!**
   - URL: `https://aryan-portfolio.surge.sh`

---

## Setting Up Contact Form (Optional)

Your contact form currently works with a simulated submission. To make it actually send emails:

### Option A: Formspree (Free - 50 submissions/month)

1. Go to formspree.io
2. Sign up (free)
3. Create a new form
4. Copy your form endpoint
5. In `js/form-validation.js`, uncomment and update:
   ```javascript
   const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
       method: 'POST',
       headers: {
           'Content-Type': 'application/json',
       },
       body: JSON.stringify(formData)
   });
   ```

### Option B: EmailJS (Free - 200 emails/month)

1. Go to emailjs.com
2. Sign up (free)
3. Create email service
4. Create email template
5. Get your Service ID and Template ID
6. Add EmailJS script to `index.html`:
   ```html
   <script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"></script>
   ```
7. Update form submission in `js/form-validation.js`

---

## Custom Domain (Optional - Not Required)

If you want a custom domain later (e.g., aryan.com):

1. Buy domain from Namecheap, Google Domains, etc.
2. In GitHub Pages/Netlify/Vercel settings:
   - Add custom domain
   - Follow DNS configuration instructions
   - Wait 24-48 hours for propagation

**Note:** This is optional! The free subdomains work perfectly.

---

## Troubleshooting

### GitHub Pages not showing?
- Wait 5-10 minutes after first deployment
- Check repository is Public
- Check branch is "main" and folder is "/(root)"
- Clear browser cache

### Images not loading?
- Make sure image paths are correct
- Use relative paths: `images/profile.jpg` (not absolute)
- Check file names match exactly (case-sensitive)

### Form not working?
- Check browser console for errors (F12)
- Make sure form service is properly configured
- Test with Formspree or EmailJS

---

## Need Help?

- GitHub Pages Docs: https://docs.github.com/en/pages
- Netlify Docs: https://docs.netlify.com
- Vercel Docs: https://vercel.com/docs

Your website is production-ready! 🚀




