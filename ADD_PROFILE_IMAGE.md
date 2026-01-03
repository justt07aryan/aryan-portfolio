# How to Add Your Profile Image

## Quick Method (Using the Script)

### Step 1: Install Python Image Library (if not already installed)
Open PowerShell or Command Prompt and run:
```bash
pip install Pillow
```

### Step 2: Run the Image Processing Script
1. Place your image file somewhere accessible (Desktop, Downloads, etc.)
2. Open PowerShell in this project folder
3. Run the script:
```bash
python prepare_profile_image.py "C:\path\to\your\image.jpg"
```

**Example:**
```bash
python prepare_profile_image.py "C:\Users\aryan\Downloads\myphoto.jpg"
```

The script will:
- ✅ Crop your image to a perfect square (centered)
- ✅ Resize it to professional dimensions (800x800)
- ✅ Optimize it for web use (400x400 version)
- ✅ Save it as `images/profile.jpg`
- ✅ Automatically make it display on your website

---

## Manual Method (Using Free Online Tools)

### Option 1: Using Canva (Recommended - Free)
1. Go to [canva.com](https://www.canva.com) and create a free account
2. Click "Create a design" → "Custom size"
3. Set dimensions to **800 x 800 pixels**
4. Upload your image
5. Crop and position your image to fit the square
6. Download as JPG (high quality)
7. Save it as `profile.jpg` in the `images/` folder

### Option 2: Using Photopea (Free Photoshop Alternative)
1. Go to [photopea.com](https://www.photopea.com)
2. Open your image: File → Open
3. Go to Image → Crop → Set to "1:1" ratio
4. Position and crop your image
5. Go to Image → Image Size → Set to 800 x 800 pixels
6. File → Export As → JPG (Quality: 90-95)
7. Save as `profile.jpg` in the `images/` folder

### Option 3: Using ResizeImage.net
1. Go to [resizeimage.net](https://resizeimage.net)
2. Upload your image
3. Select "Crop" tool
4. Set aspect ratio to "1:1" (square)
5. Position and crop
6. Resize to 800 x 800 pixels
7. Download and save as `profile.jpg` in the `images/` folder

---

## Image Requirements

### Specifications:
- **File Format**: JPG or PNG
- **File Name**: `profile.jpg` (must be exactly this)
- **Location**: `images/profile.jpg`
- **Size**: 800 x 800 pixels (square)
- **File Size**: Under 500KB (for fast loading)
- **Quality**: High resolution for professional look

### Cropping Guidelines:
- Crop to a **perfect square** (1:1 ratio)
- **Center your face** in the frame
- Leave some space around your head (don't crop too tight)
- Ensure good lighting and professional appearance
- Use a clean, uncluttered background if possible

---

## After Adding the Image

1. **Check the file location**:
   ```
   aryan-portfolio/
   └── images/
       └── profile.jpg  ← Should be here
   ```

2. **Preview your website**:
   - Open `index.html` in a browser
   - Or use Live Server in VS Code
   - Check the Home section and About section

3. **Verify it looks good**:
   - Image should appear in the hero section (top)
   - Image should also appear in the About section
   - Should be circular/rounded on the website
   - Should look professional and clear

---

## Troubleshooting

### Image Not Showing?
- ✅ Check file name is exactly `profile.jpg` (lowercase)
- ✅ Check file is in `images/` folder (not subfolder)
- ✅ Hard refresh browser: `Ctrl + F5`
- ✅ Check browser console (F12) for errors

### Image Looks Distorted?
- ✅ Make sure image is square (1:1 ratio)
- ✅ Use 800x800 pixels or higher
- ✅ Don't stretch the image manually

### Image File Too Large?
- ✅ Use the Python script (it optimizes automatically)
- ✅ Or compress at [TinyPNG.com](https://tinypng.com)
- ✅ Aim for under 500KB file size

### Need Different Image?
- ✅ Replace `images/profile.jpg` with new file
- ✅ Keep same name: `profile.jpg`
- ✅ Refresh browser to see changes

---

## Quick Test

Once you've added the image, you can quickly verify it's in the right place:

```powershell
# In PowerShell, run:
Test-Path "images\profile.jpg"
```

Should return: `True`

---

## Professional Tips

1. **Lighting**: Use natural or professional lighting
2. **Background**: Clean, simple background works best
3. **Expression**: Professional yet approachable smile
4. **Attire**: Professional clothing (you're wearing a nice shirt in your photo - perfect!)
5. **Composition**: Face centered, with space around head
6. **Quality**: Use the highest quality source image possible

Your photo description sounds great - just needs to be cropped to a square and optimized! 📸

---

**Need Help?** 
- Run the Python script for automatic processing
- Or use one of the free online tools mentioned above
- The website will automatically use the image once it's in the right location




