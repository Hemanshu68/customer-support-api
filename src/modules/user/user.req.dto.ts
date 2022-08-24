import { IsEmail, IsNotEmpty, Length, Matches } from 'class-validator';
import { UserRole } from 'src/modules/user/user.entity';
import { MESSAGES, REGEX } from 'src/app.utils';

export class UserRegistrationDto {
    @IsNotEmpty()
    @Length(3, 255)
    name: string;

    @IsNotEmpty()
    @IsEmail({ unique: true })
    email: string;

    @IsNotEmpty()
    @Length(8, 24)
    @Matches(REGEX.PASSWORD_RULE, {
        message: MESSAGES.PASSWORD_RULE_MESSAGE,
    })
    password: string;

    @Length(8, 24)
    @IsNotEmpty()
    @Matches(REGEX.PASSWORD_RULE, {
        message: MESSAGES.PASSWORD_RULE_MESSAGE,
    })
    confirm: string;

    role: UserRole;
}
