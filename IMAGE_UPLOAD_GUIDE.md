# HOW TO ADD IMAGES TO YOUR WEBSITE

## 📸 THREE TYPES OF IMAGES YOU NEED:

### 1. **Your Logo** (`logo.png`)
### 2. **UN Background Images** (3 images for homepage slideshow)
### 3. **Committee Logos** (8 logos for committees)

---

## 🖼️ 1. ADDING YOUR LOGO

### **Step 1: Prepare Your Logo**
- Save your logo file as: `logo.png` or `logo.jpg`
- Recommended size: 200x200 pixels (square) or 300x100 pixels (horizontal)
- Keep file size under 500KB

### **Step 2: Upload to GitHub**
1. Go to your repository on GitHub
2. Click **"Add file"** → **"Upload files"**
3. Upload your `logo.png` file
4. Make sure it's in the **main folder** (same place as index.html)
5. Click **"Commit changes"**

### **If your logo has a different name:**
- You can name it anything (e.g., `belmun-logo.png`)
- Then open ALL HTML files and change this line:
  ```html
  <img src="logo.png"
  ```
  to:
  ```html
  <img src="belmun-logo.png"
  ```

---

## 🌍 2. ADDING UN BACKGROUND IMAGES (Homepage Slideshow)

These are the 3 rotating background images on your homepage.

### **Step 1: Create an 'images' Folder**
1. Go to your repository
2. Click **"Add file"** → **"Create new file"**
3. Type: `images/placeholder.txt`
4. Add any text in the file
5. Click **"Commit"** (this creates the folder)

### **Step 2: Find UN Images**
You need 3 images of:
- UN General Assembly
- UN building
- Diplomatic meetings
- Or any professional conference/UN-related images

**Where to find them:**
- Google Images: Search "UN General Assembly" (use images labeled for reuse)
- Unsplash.com (free professional photos)
- Pexels.com (free stock photos)
- Or take your own photos!

### **Step 3: Prepare Your Images**
- Name them exactly:
  - `un-background-1.jpg`
  - `un-background-2.jpg`
  - `un-background-3.jpg`
- Recommended size: 1920x1080 pixels (landscape)
- Keep file size under 1MB each

### **Step 4: Upload to GitHub**
1. Go to the `images` folder you created
2. Click **"Add file"** → **"Upload files"**
3. Upload all 3 images
4. Click **"Commit changes"**

### **DONE!** The slideshow will automatically work!

---

## 🏢 3. ADDING COMMITTEE LOGOS

You need 8 committee logos.

### **Step 1: Create 'committee-logos' Folder**
1. Go to your repository
2. Click **"Add file"** → **"Create new file"**
3. Type: `committee-logos/placeholder.txt`
4. Add any text
5. Click **"Commit"**

### **Step 2: Find or Create Logos**

**Option A: Find Official Logos**
- Google search: "WHO logo", "FIFA logo", etc.
- Download official logos from organization websites
- Make sure they're high quality PNG files

**Option B: Create Simple Text Logos**
- Use Canva.com (free)
- Create 200x200px squares
- Add committee name (e.g., "WHO")
- Use your brand colors
- Export as PNG

**Option C: Use Icons**
- Find icons that represent each committee
- Medical icon for WHO
- Soccer ball for FIFA
- Gavel for ICJ
- etc.

### **Step 3: Name Your Files Exactly**
Must be named exactly like this (all lowercase):
- `who.png`
- `undp.png`
- `fifa.png`
- `ipc.png`
- `icj.png`
- `f1.png`
- `uss.png`
- `interpol.png`

### **Step 4: Upload to GitHub**
1. Go to `committee-logos` folder
2. Click **"Add file"** → **"Upload files"**
3. Upload all 8 logos
4. Make sure names match exactly (all lowercase, no spaces)
5. Click **"Commit changes"**

---

## ✅ QUICK CHECKLIST

- [ ] Logo uploaded as `logo.png` in main folder
- [ ] Created `images` folder
- [ ] Uploaded 3 UN background images to `images` folder
- [ ] Created `committee-logos` folder
- [ ] Uploaded all 8 committee logos to `committee-logos` folder
- [ ] All file names match exactly (case-sensitive!)
- [ ] Waited 2-3 minutes and refreshed website

---

## 🎨 IMAGE TIPS

**For Best Quality:**
- Use PNG for logos (transparent background)
- Use JPG for photos (smaller file size)
- Keep images under 1MB each
- Use consistent aspect ratios

**Color Matching:**
- Edit images to match your brand colors:
  - Dark Red: #11151C
  - Dark Blue: #212D40
  - Slate Gray: #364156
  - Muted Purple: #7D4E57

---

## 🔧 TROUBLESHOOTING

**Logo not showing?**
- Check file is named exactly `logo.png`
- Check it's in the main folder (not in a subfolder)
- Clear browser cache and refresh

**Background images not changing?**
- Check all 3 images are in the `images` folder
- Check names are exactly: `un-background-1.jpg`, `un-background-2.jpg`, `un-background-3.jpg`
- Wait for slideshow (changes every 5 seconds)
- Check browser console (F12) for errors

**Committee logos not showing?**
- Check `committee-logos` folder exists
- Check all 8 files are there
- Check names match exactly (all lowercase)
- Check files are PNG format

**Images too big/slow?**
- Compress images at tinypng.com
- Resize to recommended dimensions
- Keep under 1MB each

---

## 📧 Need Help?

If images still aren't working:
1. Check browser console for errors (F12 → Console tab)
2. Make sure file paths match exactly
3. Contact: belmun26@gmail.com

---

## 🚀 FOLDER STRUCTURE

Your repository should look like this:
```
belmun2026/
├── index.html
├── about.html
├── committees.html
├── register.html
├── contact.html
├── styles.css
├── script.js
├── logo.png                    ← Your logo here
├── images/
│   ├── un-background-1.jpg     ← UN images here
│   ├── un-background-2.jpg
│   └── un-background-3.jpg
└── committee-logos/
    ├── who.png                 ← Committee logos here
    ├── undp.png
    ├── fifa.png
    ├── ipc.png
    ├── icj.png
    ├── f1.png
    ├── uss.png
    └── interpol.png
```
