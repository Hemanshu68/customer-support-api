import { IsEmail, IsNotEmpty, Length, Matches } from 'class-validator';
import { UserRole } from 'src/modules/user/user.entity';
import { MESSAGES, REGEX } from 'src/app.utils';
import { ApiProperty } from '@nestjs/swagger';

export class UserRegistrationDto {
    @ApiProperty({
        description: 'Name of Employee.',
        example: 'John Doe',
    })
    @IsNotEmpty()
    @Length(3, 255)
    name: string;

    @ApiProperty({
        description: 'Email of Employee.',
        example: 'johndoe@gmail.com',
    })
    @IsNotEmpty()
    @IsEmail({ unique: true })
    email: string;

    @ApiProperty({
        description: 'Password for Employee Account.',
        example: 'Password@123',
    })
    @IsNotEmpty()
    @Length(8, 24)
    @Matches(REGEX.PASSWORD_RULE, {
        message: MESSAGES.PASSWORD_RULE_MESSAGE,
    })
    password: string;

    @ApiProperty({
        description: 'Same as Password.',
        example: 'Password@123',
    })
    @Length(8, 24)
    @IsNotEmpty()
    @Matches(REGEX.PASSWORD_RULE, {
        message: MESSAGES.PASSWORD_RULE_MESSAGE,
    })
    confirm: string;

    @ApiProperty({
        description: 'Role Type.',
        enum: UserRole,
        required: false,
        default: UserRole.MEMBER,
        example: UserRole.MEMBER,
    })
    role?: UserRole;
}
