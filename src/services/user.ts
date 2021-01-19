import { ContentfulClientApi, createClient } from "contentful";
import { User, ProfileImage, CoverImage } from "./user.types";

export class UserApi {
  client: ContentfulClientApi;

  constructor() {
    this.client = createClient({
      space: process.env.CONTENTFUL_SPACE_ID,
      accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
    })
  }

  convertProfileImage = (rawImage): ProfileImage => {
    return {
      imageUrl: 'https:' + rawImage.fields.file.url,
      width: rawImage.fields.file.details.image.width,
      height: rawImage.fields.file.details.image.height
    }
  };

  convertCoverImage = (rawImage): CoverImage => {
    return {
      imageUrl: 'https:' + rawImage.fields.file.url,
      width: rawImage.fields.file.details.image.width,
      height: rawImage.fields.file.details.image.height
    }
  };

  convertUser = (rawData): User => {
    const rawUser = rawData.fields
    const defaultProfileImage = {
      imageUrl: "/android-chrome-192x192.png",
      width: 192,
      height: 192
    }
    const defaultCoverImage = {
      imageUrl: "/android-chrome-512x512.png",
      width: 512,
      height: 512
    }
    return {
      id: rawData.sys.id ?? 1,
      slug: rawUser.slug,
      name: rawUser.name,
      twitter: rawUser.twitter ?? 'TwitterのID',
      birthDate: rawUser.birthDate ?? '誕生日',
      hasProfileImage: rawUser.profileImage !== undefined ? true : false,
      profileImage: rawUser.profileImage ? this.convertProfileImage(rawUser.profileImage) : null,
      hasCoverImage: rawUser.coverImage !== undefined ? true : false,
      coverImage: rawUser.coverImage ? this.convertCoverImage(rawUser.coverImage) : null,
    };
  };

  async fetchUserEntries(): Promise<User[]> {
    return await this.client
      .getEntries({
        content_type: "user",
        order: "sys.createdAt"
      })
      .then(entries => {
        if (entries && entries.items && entries.items.length > 0) {
          const users = entries.items.map(entry => this.convertUser(entry));
          return users;
        }
        return [];
      });
  }
}