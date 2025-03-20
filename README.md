# Extra-Vagance Hair Studio Website

This project is a **modern, elegant website** for Extra-Vagance Hair Studio, a professional hair styling salon. The website showcases the salon's services, stylist profiles, and portfolio of work through an aesthetically pleasing design with smooth animations and interactive elements. It features a sophisticated color palette that aligns with the salon's brand identity, complemented by elegant typography and visual effects.

## Project Description

The **Extra-Vagance Hair Studio Website** serves as a digital storefront for the salon, allowing potential clients to learn about the services offered, view previous work, meet the stylists, and make contact. The design emphasizes elegance and professionalism while providing an intuitive user experience.

### Key Features:
- **Animated Loading Screen:** Custom loader with salon branding for a polished first impression.
- **Smooth Navigation:** Fixed navigation bar with smooth scrolling to different sections.
- **Dynamic Hero Section:** Visually striking hero section with customizable background.
- **Interactive Service Cards:** Services presented in visually appealing cards with hover effects.
- **Portfolio Gallery:** Showcase of hairstyling work with elegant image display and hover effects.
- **Stylist Profiles:** Section highlighting the salon's professional stylists and their specialties.
- **Contact Form:** User-friendly contact form with validation for client inquiries.
- **Responsive Design:** Fully responsive layout that adapts seamlessly to all device sizes.
- **Book Now Feature:** Call-to-action for appointment booking with prominent placement.

## Technologies Used:
- **HTML5:** Semantic markup for the website structure.
- **CSS3:** Advanced styling with custom properties, flexbox, grid, and animations.
- **JavaScript:** Interactive elements, smooth scrolling, form validation, and dynamic content loading.
- **Google Fonts:** Playfair Display and Poppins fonts for elegant typography.
- **CSS Custom Properties:** Variables for consistent color scheme and styling.
- **CSS Animations:** Smooth transitions and loading animations.

## How to Install and Run the Project

### Prerequisites
- Web browser (Chrome, Firefox, Safari, or Edge recommended)
- Basic web server for local development (optional)

### Steps
1. Clone the Repository:
   ```bash
   git clone https://github.com/yourusername/extra-vagance-website.git
   cd extra-vagance-website
   ```

2. Open the website:
   - **Simple method:** Double-click the `index.html` file to open in your default browser
   - **Using a local server:** If you have a local development server (like Live Server in VS Code):
     ```bash
     # If using npm and live-server
     npm install -g live-server
     live-server
     ```

3. For development:
   - Edit the HTML, CSS, and JavaScript files as needed
   - Refresh your browser to see changes (or use a tool with hot reloading)

## Project Structure

```
extra-vagance-website/
│
├── index.html              # Main HTML document
│
├── css/                    # CSS stylesheets
│   └── style.css           # Main stylesheet with all styles
│
├── js/                     # JavaScript files
│   └── simple.js           # Core functionality script
│
├── images/                 # Image assets
│   ├── Portrait.jpg        # Stylist portrait
│   ├── Styling.jpg         # Portfolio image
│   ├── Coloring.png        # Portfolio image
│   ├── Highlights.jpg      # Portfolio image
│   ├── trim-hair-cut.webp  # Portfolio image
│   └── frenchtwist_recirc-4957fbd132c447a982e984378e9bdd49.jpg  # Portfolio image
│
└── README.md               # Project documentation
```

## Section Descriptions

### `index.html`
- **Contains the full website structure** with all sections and content.
- **Sections:**
  - **Loading Screen:** Initial loading animation with salon name.
  - **Navigation:** Fixed navigation bar with links to all sections.
  - **Hero Section:** Main showcase area with background image and call-to-action.
  - **About Section:** Information about the lead stylist with portrait.
  - **Services Section:** Cards displaying different salon services.
  - **Portfolio Gallery:** Image gallery of hair styling examples.
  - **Stylists Section:** Information about the salon's professional stylists.
  - **Contact Section:** Contact information and inquiry form.
  - **Booking Section:** Call-to-action for appointment booking.
  - **Footer:** Site navigation, social links, and copyright information.
- **Features:**
  - Semantic HTML5 structure
  - Properly organized content hierarchy
  - Accessibility considerations
  - Integration points for JavaScript functionality

### `style.css`
- **Complete styling for the entire website** with a sophisticated design system.
- **Key Features:**
  - Custom CSS variables for consistent color palette
  - Responsive design with media queries
  - Flexbox and Grid layouts
  - Custom animations and transitions
  - Professional typography with Google Fonts
  - Interactive hover effects
  - Form styling with validation indicators
- **Color Scheme:**
  - Primary: #415441 (muted green)
  - Secondary: #DACBAE (warm beige)
  - Accent: #3d3d33 (dark olive)
  - Light: #92a885 (light sage)
  - Dark: #1F1F1F (soft black)
- **Typography:**
  - Headings: Playfair Display (elegant serif)
  - Body: Poppins (clean sans-serif)

### `simple.js`
- **Core JavaScript functionality** for the website's interactive features.
- **Key Functions:**
  - `initServices()`: Dynamically creates service cards with data.
  - `initPortfolio()`: Populates the portfolio gallery with images and descriptions.
  - **Event Handlers:**
    - Loading screen animation
    - Smooth scrolling navigation
    - Service card hover effects
    - Portfolio item interactions
    - Form validation for the contact form
  - **Helper Functions:**
    - Email validation
    - Dynamic element creation

## Key Design Elements

### Visual Design
- **Elegant Color Palette:** Using soft, muted colors that evoke sophistication and tranquility.
- **Typography Contrast:** Pairing an elegant serif font (Playfair Display) for headings with a clean sans-serif (Poppins) for body text.
- **Ample White Space:** Using generous spacing to create an uncluttered, high-end feel.
- **Consistent Visual Language:** Curved elements, subtle shadows, and consistent border-radius values throughout.
- **Subtle Animations:** Smooth transitions and hover effects that enhance without distracting.

### User Experience
- **Intuitive Navigation:** Clear, fixed navigation that's always accessible.
- **Visual Feedback:** Interactive elements provide visual feedback on hover and click.
- **Progressive Disclosure:** Information is organized in a logical flow from general to specific.
- **Call-to-Action Emphasis:** "Book Now" button is visually distinct and easily accessible.
- **Mobile-Optimized:** Layout adjusts appropriately for different screen sizes with no loss of functionality.

### Performance Considerations
- **Optimized Images:** Images should be properly sized and compressed.
- **Progressive Enhancement:** Core functionality works without JavaScript, enhanced with JS.
- **CSS Efficiency:** Using CSS custom properties and reusable classes.
- **Deferred Loading:** Non-critical elements load after initial page render.
- **Responsive Images:** Different image sizes for different devices.

## Responsive Design Implementation

### Desktop (992px and above)
- Full navigation menu
- Multi-column layouts for services, portfolio, and stylists
- Larger font sizes and spacing
- Enhanced animations and effects

### Tablet (768px - 991px)
- Maintained navigation with slightly reduced padding
- Adjusted grid layouts with fewer columns
- Optimized image sizes
- Adapted spacing and typography

### Mobile (below 768px)
- Simplified navigation (potentially with hamburger menu)
- Single-column layouts for all content sections
- Reduced padding and margins
- Prioritized content for smaller screens
- Touch-friendly interactive elements
- Adjusted font sizes for readability

## Future Enhancements
- **Online Booking System:** Integration with a scheduling system for real-time appointment booking.
- **Product Showcase:** Section featuring hair products available at the salon.
- **Client Testimonials:** Carousel of client reviews and feedback.
- **Gallery Filtering:** Ability to filter portfolio by hair type, service, or style.
- **Multilingual Support:** Option to switch between languages for diverse clientele.
- **Dark Mode:** Alternative color scheme for reduced eye strain.
- **Newsletter Signup:** Email subscription for promotions and updates.
