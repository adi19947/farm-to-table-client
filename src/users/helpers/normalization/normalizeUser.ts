interface User {
  first: string;
  middle: string;
  last: string;
  phone: string;
  email: string;
  password: string;
  state: string;
  country: string;
  city: string;
  street: string;
  zip?: number;
  houseNumber: number;
  url?: string;
  alt?: string;
  isAdmin: boolean;
  user_id: string;
}

const normalizeUser = (user: User) => ({
  name: {
    first: user.first,
    middle: user.middle,
    last: user.last,
  },
  phone: user.phone,
  email: user.email,
  password: user.password,
  address: {
    state: user.state,
    country: user.country,
    city: user.city,
    street: user.street,
    zip: user.zip,
    houseNumber: user.houseNumber,
  },
  image: {
    url: user.url,
    alt: user.alt,
  },

  isAdmin: user.isAdmin,
  user_id: user.user_id,
});

export default normalizeUser;
