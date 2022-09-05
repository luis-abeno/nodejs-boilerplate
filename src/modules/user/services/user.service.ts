import { UserDto } from "../dtos/user.dto";
import { ApiError } from "../../../commons/dtos/api_error.dto";
import { HttpStatusCode } from "../../../commons/enums/http_status_code.enum";
import UserRepository from "../repositories/user.repository";

export default class UserService {
  public async getUsers(): Promise<UserDto[]> {
    const _userRepository = new UserRepository();

    const users = await _userRepository.getUsers();

    if (users) {
      return users;
    }

    throw new ApiError(HttpStatusCode.NOT_FOUND, "Not found");
  }

  public async getUserById(id: string): Promise<UserDto> {
    const _userRepository = new UserRepository();

    const user = await _userRepository.getUserById(id);

    if (user) {
      return user;
    }

    throw new ApiError(HttpStatusCode.NOT_FOUND, "Not found");
  }
}
