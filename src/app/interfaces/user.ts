export interface User {
    name: {
      first: string,
      last: string
    };
    picture: {
      large: string,
      thumbnail: string
    };
    login: {
      username: string
    };
    location: {
      country: string,
      city: string
    };
    phone: string;
    gender: string;
    email: string;
  }
