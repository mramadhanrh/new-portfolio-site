export interface Hero {
  title: string;
  roles: string;
  location: string;
  description: string;
  buttonText: string;
  buttonEmoji: string;
}

export interface LandingData {
  hero: Hero;
}
