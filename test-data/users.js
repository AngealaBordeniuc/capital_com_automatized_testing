export const users = {
  authorized: {
    email: process.env.TEST_EMAIL,
    registered: true,
  },

  unauthorized: {
    email: process.env.TEST_EMAIL,
    registered: true,
  },

  unregistered: {
    email: `new${Date.now()}@gmail.com`,
    registered: false,
  },
};
