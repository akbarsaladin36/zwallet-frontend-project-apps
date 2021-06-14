module.exports = {
  env: {
    BASE_URL: "http://localhost:5000/backend4/api/v1",
    BASE_IMAGE_URL: "http://localhost:5000/backend4/api",
  },
  async rewrites() {
    return [
      {
        source: "/login",
        destination: "/auth/login",
      },
      {
        source: "/register",
        destination: "/auth/register",
      },
    ];
  },
};
