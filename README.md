# Tigma Real Estate

![Tigma Real Estate Logo](public/logo.png)

A modern real estate platform built with Next.js and Chakra UI that allows users to browse, search, and filter properties for sale and rent. This application provides an intuitive user interface for exploring real estate listings with detailed property information.

![Real Estate](https://i.ibb.co/jTW4bFC/image.png)

## ✨ Features

- **Property Listings**: Browse comprehensive listings of properties for sale and rent
- **Detailed Property Views**: View high-quality images and detailed information about each property
- **Advanced Search & Filtering**: Filter properties by price, location, property type, and more
- **Responsive Design**: Optimized for all devices from mobile to desktop
- **Modern UI/UX**: Clean, intuitive interface with smooth animations and transitions
- **SEO Optimized**: Built with SEO best practices for better visibility
- **Performance Optimized**: Fast loading times and optimized asset delivery
- **HTML Content Sanitization**: Securely render HTML property descriptions with DOMPurify
- **Contact Features**: Direct phone and WhatsApp integration for property inquiries
- **Improved Loading States**: Skeleton loaders and error boundaries for better UX
- **Agency Information**: View details about the real estate agencies listing properties

## 🛠️ Technologies Used

- **Frontend Framework**: [Next.js](https://nextjs.org/) 15.2.4
- **UI Component Library**: [Chakra UI](https://chakra-ui.com/) 1.8.9
- **React**: 18.3.1
- **Styling**: Emotion (react & styled) with Chakra UI theming
- **State Management**: React Hooks
- **Content Security**: isomorphic-dompurify for HTML sanitization
- **Data Fetching**: Axios & Next.js API routes
- **Icons**: React Icons
- **Deployment**: Vercel (recommended)
- **External API Integration**: Real Estate API for property data
- **Additional Libraries**:
  - millify (number formatting)
  - nprogress (loading indicators)
  - react-horizontal-scrolling-menu

## 🚀 Recent Optimizations

- **Modern Image Handling**: Upgraded to Next.js 13+ Image component API
- **Reduced Bundle Size**: Optimized imports and removed unused dependencies
- **Faster Build Times**: Migrated from Babel to SWC compiler
- **Improved Data Fetching**: Streamlined API requests with field selection
- **Enhanced Property Details**: Proper HTML content sanitization
- **Better Error Handling**: Added error boundaries and loading states
- **Performance Improvements**: Reduced JavaScript payload size
- **Security Enhancements**: HTML content sanitization with DOMPurify

## 📋 Prerequisites

- Node.js 16.x or higher
- pnpm (recommended), npm, or yarn package manager
- API key for property data (instructions in .env.example)

## 🚀 Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/tigma-real-estate.git
   cd tigma-real-estate
   ```

2. Install dependencies:
   ```bash
   pnpm install
   # or
   npm install
   # or
   yarn install
   ```

3. Create a `.env` file in the root directory using `.env.example` as a template:
   ```
   API_KEY=your_api_key_here
   ```

4. Start the development server:
   ```bash
   pnpm dev
   # or
   npm run dev
   # or
   yarn dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 💻 Usage

### Browsing Properties

- Navigate to the homepage to see featured properties
- Use the search bar to find properties by location
- Apply filters to narrow down your search results

### Viewing Property Details

- Click on any property card to view detailed information
- Gallery images, floor plans, and property features are displayed on the details page
- Contact information with direct call or WhatsApp messaging is provided
- Property descriptions are safely rendered with HTML support

### For Developers

- Customize the theme in `styles/theme.js`
- Add new components in the `components` directory
- Create new pages in the `pages` directory following Next.js convention

## 🛠️ Building for Production

```bash
# Generate an optimized production build
pnpm build

# Start the production server
pnpm start
```

## 📁 Project Structure

- `/pages` - Next.js pages and routing
  - `_app.js` - Custom App component with Chakra UI provider
  - `_document.js` - Custom Document for global styles and meta tags
  - `index.js` - Home page with featured properties
  - `/property/[id].js` - Dynamic property details page
  - `/search.js` - Property search page with filters
- `/components` - Reusable React components
  - `ImageScrollbar.jsx` - Image gallery with horizontal scrolling
  - `Property.jsx` - Property card component
  - `SearchFilters.jsx` - Search filters component
- `/utils` - Utility functions and helpers
  - `fetchApi.js` - API fetching utilities
- `/public` - Static assets and images

## 📷 Screenshots

### Home Page
![Home Page](screenshots/home.png)
*Screenshot of the home page showing featured properties*

### Property Details
![Property Details](screenshots/property.png)
*Screenshot of a property details page with sanitized HTML descriptions*

### Search Results
![Search Results](screenshots/search.png)
*Screenshot of search results with filters applied*

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

Please make sure to update tests as appropriate and follow the code style of the project.

## 🔧 Recent Improvements

### April 2025 Updates

- **React 18 Upgrade**: Migrated from React 17 to React 18 for improved performance and Concurrent features
- **HTML Sanitization**: Added DOMPurify for safe rendering of HTML content in property descriptions
- **Error Handling**: Implemented better error boundaries and fallback UI
- **Loading States**: Added skeleton loaders for better UX during data fetching
- **Contact Integration**: Enhanced property details page with direct call and WhatsApp messaging
- **Code Optimization**: Reduced bundle size and improved performance
- **Development Workflow**: Migrated from npm to pnpm for faster and more reliable dependency management

## 📄 License

This project is licensed under the MIT License - see below for details:

```
MIT License

Copyright (c) 2025 Tigma Real Estate

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

## 🙏 Acknowledgments

- [Chakra UI](https://chakra-ui.com/) for the component library
- [Next.js](https://nextjs.org/) for the React framework
- [RapidAPI](https://rapidapi.com/) for property data API access
- [DOMPurify](https://github.com/cure53/DOMPurify) for HTML sanitization
- [React Icons](https://react-icons.github.io/react-icons/) for icon components

## 📞 Contact

Tigma Real Estate - [info@tigma-real-estate.com](mailto:info@tigma-real-estate.com)

Project Link: [https://github.com/yourusername/tigma-real-estate](https://github.com/yourusername/tigma-real-estate)

---

<p align="center">Made with ❤️ by Tigma Real Estate Team</p>
