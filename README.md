# Rohit Kumar - Portfolio Website

## Updates Made

### 1. About Me Section
- Added "Know More" button on both cards
- Clicking the button expands/collapses additional content
- Smooth animation for content reveal
- Icon rotates when expanded

### 2. Research Section
- Added "Download PDF" button to research papers
- Button includes download icon
- Ready for PDF links to be added

### 3. New Experience Section
- Created a new "Professional Experience" section
- Card-based layout with company icons
- Shows position, company, duration, description
- Skill tags for each experience
- Fully responsive with slider functionality

### 4. Dark Mode Fix
- Hero section now properly changes with dark mode
- Background overlay added in dark mode for better text visibility
- Hero text color changes from blue to white in dark mode
- Profile photo border color adapts to theme
- All theme transitions are smooth

### 5. Project Structure
```
portfolio/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
├── images/
│   ├── profile.png
│   ├── background.jpg
│   ├── brain.jpeg
│   ├── eye.jpeg
│   └── hotel.jpeg
└── files/
    └── (add resume PDF here)
```

## How to Use

1. Extract the portfolio.zip file
2. Open index.html in your browser
3. To add your resume: Place it in the `files/` folder and name it `Rohit_Kumar_Resume.pdf`
4. To add research PDFs: Update the `pdfLink` in the `portfolioData.research` array in `js/script.js`

## Customization

### To Edit Content
Open `js/script.js` and modify the `portfolioData` object:
- Update `about` array to change About Me content
- Update `experiences` array to add/modify work experience
- Update `research` array to add research papers
- Update contact information

### To Change Colors
Open `css/style.css` and modify the CSS variables at the top:
- Light mode: `:root` section
- Dark mode: `[data-theme="dark"]` section

## Features
- ✅ Fully responsive design
- ✅ Dark/Light mode toggle
- ✅ Smooth animations
- ✅ Touch-friendly sliders
- ✅ Professional card layouts
- ✅ Expandable content sections
- ✅ Download buttons for research papers

## Browser Compatibility
Works on all modern browsers:
- Chrome, Firefox, Safari, Edge
- Mobile browsers (iOS Safari, Chrome Mobile)

---
Created with ❤️ for Innovation
