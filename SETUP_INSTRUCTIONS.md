# HOW TO ADD YOUR LINKS AND IMAGES

## 📝 Adding Google Forms Links

To add your Google Forms registration links:

1. **Open `script.js` file**
2. **Find this section** (around line 45):

```javascript
const registrationLinks = {
    'secretariat-link': '', // Add your Secretariat Google Form link here
    'chair-link': '',       // Add your Chair Google Form link here
    'volunteer-link': '',   // Add your Volunteer Google Form link here
    'delegate-link': ''     // Add your Delegate Google Form link here
};
```

3. **Add your Google Form URLs** between the quotes:

```javascript
const registrationLinks = {
    'secretariat-link': 'https://forms.gle/YOUR-SECRETARIAT-FORM',
    'chair-link': 'https://forms.gle/YOUR-CHAIR-FORM',
    'volunteer-link': 'https://forms.gle/YOUR-VOLUNTEER-FORM',
    'delegate-link': 'https://forms.gle/YOUR-DELEGATE-FORM'
};
```

4. **Save the file** and upload to GitHub

---

## 🖼️ Adding Your Logo

1. **Prepare your logo image:**
   - Name it: `logo.png` (or `logo.jpg`)
   - Recommended size: 200x200 pixels or similar square/rectangular
   - Keep file size under 500KB

2. **Upload to GitHub:**
   - Go to your repository
   - Click "Add file" → "Upload files"
   - Upload your logo file
   - Make sure it's in the main folder (same place as index.html)

3. **If your logo has a different name:**
   - Open all HTML files (index.html, about.html, committees.html, contact.html)
   - Find: `<img src="logo.png"`
   - Change to: `<img src="YOUR-LOGO-NAME.png"`

---

## 🏢 Adding Committee Logos

For each committee logo, you need 8 images:

**Required logo files:**
- `committee-logos/who.png`
- `committee-logos/undp.png`
- `committee-logos/fifa.png`
- `committee-logos/ipc.png`
- `committee-logos/icj.png`
- `committee-logos/f1.png`
- `committee-logos/uss.png`
- `committee-logos/interpol.png`

**Steps:**

1. **Create a folder called `committee-logos`** in your GitHub repository:
   - Go to your repository
   - Click "Add file" → "Create new file"
   - Type: `committee-logos/placeholder.txt`
   - Add any text in the file
   - Commit (this creates the folder)

2. **Find or create logos** for each committee:
   - Search Google for official committee logos
   - Or create simple text-based logos
   - Make them square (200x200px recommended)
   - Save as PNG files with transparent backgrounds if possible

3. **Upload the logos:**
   - Go to the `committee-logos` folder
   - Click "Add file" → "Upload files"
   - Upload all 8 logo files
   - Make sure names match exactly (lowercase)

4. **Alternative - Use Text Instead:**
   If you don't have logos, you can use text placeholders:
   - Open `committees.html`
   - Find each committee logo section
   - Replace the `<img>` tag with text like:
   ```html
   <div class="committee-logo">
       <h2 style="color: white; margin: 0;">WHO</h2>
   </div>
   ```

---

## ✅ Quick Checklist

- [ ] Added Google Forms links to `script.js`
- [ ] Uploaded your main logo (`logo.png`)
- [ ] Created `committee-logos` folder
- [ ] Uploaded all 8 committee logos
- [ ] Tested all registration buttons work
- [ ] Tested on mobile and desktop

---

## 🆘 Troubleshooting

**Logo not showing?**
- Check file name matches exactly: `logo.png`
- Check file is in the main folder (not in a subfolder)
- Clear browser cache and refresh

**Registration buttons not working?**
- Make sure you saved `script.js` after adding links
- Check links are inside quotes: `'https://...'`
- Make sure you uploaded the updated `script.js` to GitHub

**Committee logos not showing?**
- Check `committee-logos` folder exists
- Check file names match exactly (all lowercase)
- Use browser console (F12) to see error messages

---

## 📧 Need Help?

Contact: belmun26@gmail.com
Instagram: @belmun26
