export interface HeroData {
  title: string;
  roles: string;
  location: string;
  description: string;
  buttonText: string;
  buttonEmoji: string;
}

export interface LandingData {
  hero: HeroData;
}
