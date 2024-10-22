import withPWAInit from "@ducanh2912/next-pwa";

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true, // Enable React strict mode for improved error handling
    swcMinify: true,      // Enable SWC minification for improved performance
    compiler: {
        removeConsole: process.env.NODE_ENV !== "development", // Remove console.log in production
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'eu-central-1-shared-euc1-02.graphassets.com',
            },
        ],
    }
};

// Configuration object tells the next-pwa plugin
const withPWA = withPWAInit({
    dest: "public", // Destination directory for the PWA files
    disable: process.env.NODE_ENV === "development", // Disable PWA in development mode
    register: true, // Register the PWA service worker
    skipWaiting: true, // Skip waiting for service worker activation
});

// Export the combined configuration for Next.js with PWA support
export default withPWA(nextConfig);