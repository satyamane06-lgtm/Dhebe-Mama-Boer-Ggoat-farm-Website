// ============================================
// BUSINESS CONFIGURATION
// Update these details to change business info
// across the entire website.
// ============================================

export const BUSINESS = {
  name: "Dhebe Mama Agro Pvt. Ltd.",
  nameMarathi: "ढेबेमामा ॲग्रो प्रा.लि",
  subtitle: "African Boer Goat Farm",
  tagline: "Premium African Boer Goat Farm – तुरची",

  // Contact Details
  phone: "7972885222",
  whatsapp: "917972885222",
  email: "",

  // Social Media
  instagram: "https://www.instagram.com/dhebe.mama__boer_goat_farm",
  instagramHandle: "@dhebe.mama__boer_goat_farm",

  // Logo
  // Using BASE_URL so the image works correctly on GitHub Pages
  logoImage: `${import.meta.env.BASE_URL}images/dhebe-mama-logo.jpg`,

  // Google Maps
  googleMaps: "https://maps.app.goo.gl/xFwezzuB1UZBkTUk6",

  googleMapsEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3821.0!2d74.6!3d17.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sTurchi%2C%20Tasgaon%2C%20Sangli!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",

  // Address
  address: {
    village: "Turchi",
    taluka: "Tasgaon",
    district: "Sangli",
    state: "Maharashtra",
    country: "India",
    full: "Turchi, Tasgaon, Sangli, Maharashtra, India",
  },

  // Website
  website: "https://dhebemamagoatfarm.com",

  // Copyright
  copyright: `© ${new Date().getFullYear()} Dhebe Mama Agro Pvt. Ltd. (ढेबेमामा ॲग्रो प्रा.लि) – African Boer Goat Farm. All Rights Reserved.`,
};


// ============================================
// WHATSAPP LINK GENERATOR
// ============================================

export const getWhatsAppLink = (message = "") => {
  const encodedMessage = encodeURIComponent(
    message ||
      "Hello! I'm interested in your goats. Please share available stock details."
  );

  return `https://wa.me/${BUSINESS.whatsapp}?text=${encodedMessage}`;
};


// ============================================
// PHONE LINK
// ============================================

export const getPhoneLink = () => {
  return `tel:+${BUSINESS.whatsapp}`;
};