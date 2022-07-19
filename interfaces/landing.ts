import { ColorVariant } from 'styled-components';

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

export interface WorkTag {
  name: string;
  color: ColorVariant;
  shadow_color: ColorVariant;
}

export interface WorkItem {
  title: string;
  subtitle: string;
  description: string;
  thumbnail: string;
  creation_date: string;
  image_list: string[];
  tags: WorkTag[];
}

export interface WorkData {
  work_list: WorkItem[];
}
