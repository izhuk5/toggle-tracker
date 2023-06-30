import {Controller, Get, Param} from '@nestjs/common';

@Controller('users')
export class UsersController {
	@Get(':id')
	findsById(@Param('id') id: string) {
		return id
	}
}