interface BackendUser {
  address: {
    city: string;
    country: string;
    houseNumber: number;
    state: string;
    street: string;
    zip?: number;
  };
  image: {
    alt: string;
    url: string;
  };
  user_id: number;
  isAdmin: boolean;

  name: {
    first: string;
    last: string;
  };
  phone: string;
}

interface ClientUser {
  address: {
    city: string;
    country: string;
    houseNumber: number;
    state: string;
    street: string;
    zip?: number;
  };
  alt: string;
  id: number;
  image: string;
  isAdmin: boolean;

  firstName: string;
  lastName: string;
  phone: string;
}

export default function userBackendToClient(user: BackendUser): ClientUser {
  return {
    address: {
      city: user.address.city,
      country: user.address.country,
      houseNumber: user.address.houseNumber,
      state: user.address.state,
      street: user.address.street,
      zip: user.address.zip,
    },
    alt: user.image.alt,
    id: user.user_id,
    image: user.image.url,
    isAdmin: user.isAdmin,

    firstName: user.name.first,
    lastName: user.name.last,
    phone: user.phone,
  };
}
