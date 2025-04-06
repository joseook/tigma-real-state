# Tigma Real Estate

![Tigma Real Estate Logo](public/logo.png)

A modern real estate platform built with Next.js and Chakra UI that allows users to browse, search, and filter properties for sale and rent. This application provides an intuitive user interface for exploring real estate listings with detailed property information.

## ✨ Features

- **Property Listings**: Browse comprehensive listings of properties for sale and rent
- **Detailed Property Views**: View high-quality images and detailed information about each property
- **Advanced Search & Filtering**: Filter properties by price, location, property type, and more
- **Responsive Design**: Optimized for all devices from mobile to desktop
- **Modern UI/UX**: Clean, intuitive interface with smooth animations and transitions
- **SEO Optimized**: Built with SEO best practices for better visibility
- **Performance Optimized**: Fast loading times and optimized asset delivery
- **Agency Information**: View details about the real estate agencies listing properties

## 🛠️ Technologies Used

- **Frontend Framework**: [Next.js](https://nextjs.org/)
- **UI Component Library**: [Chakra UI](https://chakra-ui.com/)
- **Styling**: CSS Modules & Chakra UI theming
- **State Management**: React Hooks
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Data Fetching**: Axios & Next.js API routes
- **Icons**: React Icons
- **Deployment**: Vercel (recommended)
- **External API Integration**: Real Estate API for property data

## 📋 Prerequisites

- Node.js 14.x or higher
- npm or yarn package manager
- API key for property data (instructions in .env.example)

## 🚀 Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/tigma-real-estate.git
   cd tigma-real-estate
   ```

2. Install dependencies:
   ```bash
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
- Contact information for the listing agency is provided

### For Developers

- Customize the theme in `styles/theme.js`
- Add new components in the `components` directory
- Create new pages in the `pages` directory following Next.js convention

## 📷 Screenshots

### Home Page
![Home Page](screenshots/home.png)
*Screenshot of the home page showing featured properties*

### Property Details
![Property Details](screenshots/property.png)
*Screenshot of a property details page*

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

## 📞 Contact

Tigma Real Estate - [info@tigma-real-estate.com](mailto:info@tigma-real-estate.com)

Project Link: [https://github.com/yourusername/tigma-real-estate](https://github.com/yourusername/tigma-real-estate)

---

<p align="center">Made with ❤️ by Tigma Real Estate Team</p>

# Real Estate Platform

A modern real estate application built with Next.js and Chakra UI, providing a seamless experience for browsing and searching properties.

![Real Estate](https://i.ibb.co/jTW4bFC/image.png)

## Features

- Modern and responsive UI with Chakra UI
- Property search and filtering
- Detailed property views
- Horizontal scrolling property lists
- Property statistics with millify
- Dynamic routing with Next.js
- Loading progress indicators
- Responsive icons and animations

## Tech Stack

- **Frontend Framework:** Next.js 11.1.2
- **UI Library:** Chakra UI 1.6.8
- **Styling:** Emotion (react & styled)
- **HTTP Client:** Axios
- **Animation:** Framer Motion
- **Icons:** React Icons
- **Additional Libraries:**
  - millify (number formatting)
  - nprogress (loading indicators)
  - react-horizontal-scrolling-menu

## Getting Started

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Run the development server**
   ```bash
   pnpm dev
   ```

4. **Build for production**
   ```bash
   pnpm build
   ```

5. **Start production server**
   ```bash
   pnpm start
   ```

## Project Structure

- `/pages` - Next.js pages and routing
- `/components` - Reusable React components
- `/styles` - Global styles and theme configuration
- `/utils` - Utility functions and helpers
- `/public` - Static assets

## Development

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint

## Author

Joseok

## License

This project is private and not licensed for public use.
