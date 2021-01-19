export type User = {
  id: string,
  slug: string,
  name: string,
  hasProfileImage: boolean,
  profileImage: ProfileImage,
  hasCoverImage: boolean,
  coverImage: CoverImage,
  twitter: string,
  birthDate: string
};

export type ProfileImage = {
  imageUrl: string;
  width: number;
  height: number;
};

export type CoverImage = {
  imageUrl: string;
  width: number;
  height: number;
};