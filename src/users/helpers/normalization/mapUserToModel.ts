interface UserModel {
  firstName: string;
  middleName: string;
  lastName: string;
  phone: string;
  email: string;
  password: string;
  image: string;
  alt: string;
  address: {
    state: string;
    country: string;
    city: string;
    street: string;
    houseNumber: number;
    zip?: number;
  };
}

const mapUserToModel = (user: UserModel) => {
  return {
    first: user.firstName,
    middle: user.middleName,
    last: user.lastName,
    phone: user.phone,
    email: user.email,
    password: user.password,
    url: user.image,
    alt: user.alt,
    state: user.address.state,
    country: user.address.country,
    city: user.address.city,
    street: user.address.street,
    houseNumber: user.address.houseNumber,
    zip: user.address.zip,
  };
};

export default mapUserToModel;
