# BELMUN 2026 - Model United Nations Website

A professional, responsive website for the BELMUN 2026 Model United Nations conference.

## 🎨 Brand Colors

- **Dark Red**: `#11151C`
- **Dark Blue**: `#212D40`
- **Slate Gray**: `#364156`
- **Muted Purple**: `#7D4E57`

## 📁 Project Structure

```
belmun2026/
├── index.html          # Homepage
├── about.html          # About page
├── committees.html     # Committees listing
├── contact.html        # Contact/Registration form
├── styles.css          # Main stylesheet
├── script.js           # JavaScript functionality
└── README.md          # This file
```

## 🚀 How to Deploy on GitHub Pages

### Step 1: Create a GitHub Repository

1. Go to [GitHub](https://github.com) and log in
2. Click the **"+"** button in the top right corner
3. Select **"New repository"**
4. Name your repository (e.g., `belmun2026`)
5. Set it to **Public**
6. **DO NOT** initialize with README, .gitignore, or license
7. Click **"Create repository"**

### Step 2: Upload Files to GitHub

#### Option A: Using GitHub Web Interface (Easiest)

1. On your new repository page, click **"uploading an existing file"**
2. Drag and drop all the files from this project:
   - `index.html`
   - `about.html`
   - `committees.html`
   - `contact.html`
   - `styles.css`
   - `script.js`
   - `README.md`
3. Add a commit message like "Initial commit - BELMUN 2026 website"
4. Click **"Commit changes"**

#### Option B: Using Git Command Line

```bash
# Navigate to your project folder
cd path/to/your/project

# Initialize git repository
git init

# Add all files
git add .

# Commit files
git commit -m "Initial commit - BELMUN 2026 website"

# Add your GitHub repository as remote
git remote add origin https://github.com/YOUR-USERNAME/REPO-NAME.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on **"Settings"** (top menu)
3. Scroll down and click **"Pages"** in the left sidebar
4. Under **"Source"**, select **"main"** branch
5. Select **"/ (root)"** folder
6. Click **"Save"**
7. Wait a few minutes for GitHub to build your site
8. Your website will be live at: `https://YOUR-USERNAME.github.io/REPO-NAME/`

## 🌟 Features

### Pages Included

1. **Homepage** (`index.html`)
   - Hero section with MUN name and tagline
   - Quick info cards
   - Call-to-action buttons

2. **About** (`about.html`)
   - Mission statement
   - MUN explanation
   - Why BELMUN section
   - Vision statement

3. **Committees** (`committees.html`)
   - Beginner: WHO, UNDP
   - Intermediate: FIFA, IPC, ICJ, F1
   - Advanced: USS, INTERPOL
   - Detailed descriptions for each committee

4. **Contact** (`contact.html`)
   - Registration form
   - Contact information
   - Social media links

### Technical Features

- ✅ Fully responsive design (mobile, tablet, desktop)
- ✅ Modern, professional styling
- ✅ Smooth animations and transitions
- ✅ Mobile-friendly navigation menu
- ✅ Form validation
- ✅ Accessible and SEO-friendly
- ✅ Fast loading times

## 🎯 Committees Overview

### Beginner Level
- **WHO** - World Health Organization
- **UNDP** - United Nations Development Programme

### Intermediate Level
- **FIFA** - International Football Association
- **IPC** - Indian Parliament Crisis
- **ICJ** - International Court of Justice
- **F1** - Formula 1 Commission

### Advanced Level
- **USS** - United States Senate
- **INTERPOL** - International Criminal Police Organization

## 🔧 Customization Guide

### Updating Content

1. **Text Content**: Open any `.html` file and edit the text between tags
2. **Colors**: Edit the CSS variables in `styles.css` under `:root`
3. **Committee Information**: Edit `committees.html` to add/remove/modify committees
4. **Contact Information**: Edit `contact.html` to update email, phone, address

### Adding More Pages

1. Create a new HTML file (e.g., `schedule.html`)
2. Copy the structure from existing pages
3. Add a link to the navigation bar in all HTML files
4. Upload to GitHub

### Connecting the Form

The contact form currently shows a success message without sending emails. To make it functional:

1. Use a service like [Formspree](https://formspree.io/), [EmailJS](https://www.emailjs.com/), or [Netlify Forms](https://www.netlify.com/products/forms/)
2. Follow their documentation to integrate with your form
3. Update the `<form>` tag in `contact.html` with the service's action URL

## 📱 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 🛠️ Troubleshooting

### Website Not Showing Up?

1. Make sure GitHub Pages is enabled in Settings
2. Check that all files are in the root directory (not in a subfolder)
3. Wait 5-10 minutes after enabling GitHub Pages
4. Try accessing with `https://` instead of `http://`
5. Clear your browser cache

### Styling Looks Broken?

1. Verify `styles.css` is in the same folder as HTML files
2. Check that file names match exactly (case-sensitive)
3. Look for errors in the browser console (F12)

### Mobile Menu Not Working?

1. Ensure `script.js` is in the same folder as HTML files
2. Check browser console for JavaScript errors
3. Try hard-refreshing the page (Ctrl+Shift+R or Cmd+Shift+R)

## 📞 Support

For questions about the website setup, refer to:
- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [HTML/CSS Basics](https://developer.mozilla.org/en-US/docs/Learn)

## 📄 License

This website template is free to use and modify for educational purposes.

## 🙏 Credits

Created for BELMUN 2026 - Empowering Tomorrow's Leaders Through Diplomatic Excellence

---

**Last Updated**: January 2026
**Version**: 1.0.0
