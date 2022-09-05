import { GenderEnum } from "../enums/gender.enum";
import { UserColorsEnum } from "../enums/user_colors.enum";

export interface UserDto {
  name: string;
  birthday: Date;
  favoriteColor: UserColorsEnum;
  gender: GenderEnum;
  isAdmin: boolean;
  hasChildreen: boolean;
  howManyChildreen?: number;
}
