// auth/auth.controller.ts
// import { Controller, Post, Request, UseGuards } from '@nestjs/common';
import { Controller, Post, Request } from '@nestjs/common';
import { AuthService } from './auth.service';
// import { LocalAuthGuard } from './guards/local-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  // @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Request() req) {
    console.log(req);
    const { id, username } = req.body;
    // return this.authService.createToken(req.user.id, req.user.username);
    return this.authService.createToken(id, username);
  }
}
