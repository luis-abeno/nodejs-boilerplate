import { ApiError } from "../../../commons/dtos/api_error.dto";
import { Get, Route, Tags, Post, Body, Path, Security, Query, Put } from "tsoa";
import { ApiResponse } from "../../../commons/dtos/api_response.dto";
import { UserDto } from "../dtos/user.dto";

import UserService from "../services/user.service";
import { HttpStatusCode } from "../../../commons/enums/http_status_code.enum";

@Route("user")
@Tags("User")
export default class UserController {
  /**
   * Get all users
   */
  @Get("/")
  public async getUsers(): Promise<ApiResponse<UserDto[]>> {
    try {
      const _userService = new UserService();

      const users = await _userService.getUsers();

      return {
        code: 200,
        body: users,
      };
    } catch (e: any) {
      return e;
    }
  }

  /**
   * Get user by id
   * @param id User id
   */
  @Get("/:id")
  public async getUserById(@Path() id: string): Promise<ApiResponse<UserDto>> {
    try {
      const _userService = new UserService();

      if (!id) {
        throw new ApiError(HttpStatusCode.BAD_REQUEST, "Bad Request");
      }

      const user = await _userService.getUserById(id);

      return {
        code: 200,
        body: user,
      };
    } catch (e: any) {
      return e;
    }
  }
}
