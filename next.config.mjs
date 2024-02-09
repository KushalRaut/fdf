import withPWA from "next-pwa";

const nextConfig = {
  output: "standalone",

  //   async redirects() {
  //     return [
  //       {
  //         source: "/",

  //         destination: "/home",

  //         permanent: false,
  //       },
  //     ];
  //   },

  ...withPWA({
    dest: "public",

    register: true,

    skipWaiting: true,

    // disable: process.env.NODE_ENV === "development",
  }),
};

export default nextConfig;
