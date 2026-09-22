# Dhebemama Goat Farm — Website

Premium goat farming business website for **Dhebemama Goat Farm**, located in Turchi, Tasgaon, Sangli, Maharashtra, India.

Built with **React + Vite** | Vanilla CSS Design System | SEO Optimized

---

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v18 or later)
- npm (comes with Node.js)

### Install & Run Locally
```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

The site will be available at `http://localhost:5173`

### Build for Production
```bash
npm run build
```

The production-ready files will be in the `dist/` folder.

### Preview Production Build
```bash
npm run preview
```

---

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── Navbar.jsx       # Sticky responsive navigation
│   ├── Hero.jsx         # Full-width hero section
│   ├── About.jsx        # About the farm
│   ├── GoatStock.jsx    # Available goat listings
│   ├── GoatBreeds.jsx   # Breed information cards
│   ├── FarmFeatures.jsx # Farm facility features
│   ├── WhyChooseUs.jsx  # Trust-building section
│   ├── Gallery.jsx      # Photo gallery with filters
│   ├── Lightbox.jsx     # Full-screen image viewer
│   ├── CustomerEnquiry.jsx  # CTA section
│   ├── Contact.jsx      # Contact info & Google Maps
│   ├── InstagramSection.jsx # Instagram follow CTA
│   ├── Footer.jsx       # Professional footer
│   └── FloatingButtons.jsx  # Fixed WhatsApp/Call buttons
├── data/
│   ├── config.js        # ⭐ Business details (phone, links, etc.)
│   ├── goats.js         # ⭐ Goat stock listings
│   ├── breeds.js        # Breed information
│   └── gallery.js       # Gallery images
├── styles/
│   └── index.css        # Complete design system & styles
├── App.jsx              # Main app assembly
└── main.jsx             # Entry point
public/
├── images/              # Farm & goat photographs
├── sitemap.xml          # SEO sitemap
├── robots.txt           # Search engine directives
└── favicon.svg          # Site favicon
```

---

## ⭐ How to Update Business Information

### Update Phone / WhatsApp Number
Edit `src/data/config.js`:
```js
phone: "YOUR_NUMBER_HERE",
whatsapp: "91YOUR_NUMBER_HERE",  // Include country code 91
```

### Update Instagram
Edit `src/data/config.js`:
```js
instagram: "https://www.instagram.com/YOUR_HANDLE",
instagramHandle: "@YOUR_HANDLE",
```

### Update Google Maps Location
Edit `src/data/config.js`:
```js
googleMaps: "YOUR_GOOGLE_MAPS_SHARE_LINK",
googleMapsEmbed: "YOUR_GOOGLE_MAPS_EMBED_URL",
```
To get the embed URL: Go to Google Maps → Click "Share" → "Embed a map" → Copy the `src` URL from the iframe code.

### Update Farm Address
Edit `src/data/config.js` — update the `address` object.

---

## 🐐 How to Update Goat Stock

Edit `src/data/goats.js`. Each goat entry looks like:

```js
{
  id: 1,               // Unique number
  name: "Sultan",       // Goat's name
  breed: "Osmanabadi",  // Breed name
  age: "10 Months",     // Age
  gender: "Male",       // Male or Female
  weight: "35 KG",      // Weight
  price: "Contact for Price",  // Price or "Contact for Price"
  status: "Available",  // "Available" or "Sold"
  image: "/images/goat-osmanabadi.jpg",  // Image path
  description: "...",   // Short description
  healthStatus: "Vaccinated & Healthy",
}
```

**To add a new goat:** Copy an existing entry, change the `id` to a new unique number, and update the details.

**To mark as sold:** Change `status: "Available"` to `status: "Sold"`.

**To remove a goat:** Delete the entire object from the array.

---

## 📸 How to Replace Farm Photos

1. Add your new photos to the `public/images/` folder
2. Use descriptive filenames like `goat-osmanabadi-1.jpg`, `farm-view.jpg`
3. Update image paths in:
   - `src/data/goats.js` — for goat stock images
   - `src/data/breeds.js` — for breed images
   - `src/data/gallery.js` — for gallery images
4. Update the hero background in `src/components/Hero.jsx`
5. Update the about image in `src/components/About.jsx`

**Tip:** Use JPEG format and keep images under 500KB for fast loading.

---

## 🌐 Deployment

### Deploy to Netlify (Recommended — Free)

1. Go to [netlify.com](https://www.netlify.com/) and sign up
2. Click "Add new site" → "Import an existing project"
3. Connect your GitHub repository
4. Set build settings:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
5. Click "Deploy site"

### Deploy to Vercel (Free)

1. Go to [vercel.com](https://vercel.com/) and sign up
2. Click "Add New" → "Project"
3. Import your GitHub repository
4. Vercel auto-detects Vite — just click "Deploy"

### Deploy to GitHub Pages

1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to `package.json` scripts: `"deploy": "gh-pages -d dist"`
3. Run: `npm run build && npm run deploy`

---

## 🔗 Connect a Custom Domain

### On Netlify:
1. Go to Site settings → Domain management
2. Click "Add custom domain"
3. Enter your domain (e.g., `dhebemamagoatfarm.com`)
4. Update your domain's DNS records as instructed by Netlify
5. Enable HTTPS (auto-enabled)

### On Vercel:
1. Go to Project settings → Domains
2. Add your domain
3. Update DNS records as instructed
4. HTTPS is auto-enabled

---

## 📊 Google Search Console Setup

### Step 1: Verify Your Website
1. Go to [Google Search Console](https://search.google.com/search-console)
2. Click "Add property"
3. Enter your website URL (e.g., `https://dhebemamagoatfarm.com`)
4. Choose verification method:
   - **Recommended:** DNS verification through your domain registrar
   - **Alternative:** HTML tag verification — add the meta tag to `index.html`

### Step 2: Submit Sitemap
1. In Search Console, go to "Sitemaps" in the left menu
2. Enter `sitemap.xml` in the input field
3. Click "Submit"

### Step 3: Request Indexing
1. Go to "URL Inspection" in the left menu
2. Enter your website URL
3. Click "Request Indexing"

### Important Notes:
- Google indexing can take a few days to several weeks
- Rankings depend on many SEO factors — there are no guarantees for specific positions
- Keep your content updated regularly for better SEO results
- Consider creating a Google Business Profile for local search visibility

---

## 🔍 SEO Features Included

- ✅ Semantic HTML5 structure
- ✅ Proper heading hierarchy (H1, H2, H3)
- ✅ Meta description & keywords
- ✅ Open Graph metadata (Facebook)
- ✅ Twitter Card metadata
- ✅ Canonical URL
- ✅ Robots meta tag
- ✅ sitemap.xml
- ✅ robots.txt
- ✅ Schema.org LocalBusiness structured data
- ✅ Descriptive image ALT text
- ✅ Lazy loading images
- ✅ Mobile responsive design
- ✅ Fast page load times
- ✅ Geo meta tags for local SEO
- ✅ Local keyword optimization

---

## 📱 Technology Stack

- **React** — UI framework
- **Vite** — Build tool & dev server
- **Lucide React** — Lightweight icon library
- **Vanilla CSS** — Custom design system with CSS custom properties

---

## 📄 License

© 2026 Dhebemama Goat Farm. All Rights Reserved.
