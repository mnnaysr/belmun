# BELMUN 2026 - Model United Nations Website

## Brand Colors

- **Dark Red**: `#11151C`
- **Dark Blue**: `#212D40`
- **Slate Gray**: `#364156`
- **Muted Purple**: `#7D4E57`

## Project Structure

```
belmun2026/
├── index.html          # Homepage
├── about.html          # About page
├── committees.html     # Committees listing
├── contact.html        # Contact/Registration form
├── styles.css          # Main stylesheet
├── script.js           # JavaScript functionality
└── README.md          # This file
'''

## Features

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
   - Social media

## Committees Overview

### Beginner Level
- **WHO** - World Health Organization
- **UNDP** - United Nations Development Programme

### Intermediate Level
- **FIFA** - International Football Association
- **IPC** - International Press Corps
- **ICJ** - International Court of Justice
- **F1** - Formula 1 Commission

### Advanced Level
- **USS** - United States Senate
- **INTERPOL** - International Criminal Police Organization

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

## Browser Support

-  Chrome (latest)
-  Firefox (latest)
-  Safari (latest)
-  Edge (latest)
-  Mobile browsers (iOS Safari, Chrome

## Credits

Created for BELMUN 2026 - Empowering Tomorrow's Leaders Through Diplomatic Excellence

---

**Last Updated**: January 2026
**Version**: 1.0.0
