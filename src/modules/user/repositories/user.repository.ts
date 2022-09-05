import { UserDto } from "../dtos/user.dto";
import { GenderEnum } from "../enums/gender.enum";
import { UserColorsEnum } from "../enums/user_colors.enum";

export default class UserRepository {
  public async getUsers(): Promise<UserDto[]> {
    return [
      {
        name: "Luís",
        birthday: new Date(),
        favoriteColor: UserColorsEnum.GREEN,
        gender: GenderEnum.MALE,
        isAdmin: false,
        hasChildreen: true,
        howManyChildreen: 2,
      },
    ];
  }

  public async getUserById(id: string): Promise<UserDto> {
    return {
      name: "Luís",
      birthday: new Date(),
      favoriteColor: UserColorsEnum.GREEN,
      gender: GenderEnum.MALE,
      isAdmin: false,
      hasChildreen: true,
      howManyChildreen: 2,
    };
  }
}
