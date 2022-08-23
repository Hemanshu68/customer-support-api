import { IsEmail, isNotEmpty, IsNotEmpty, Length } from 'class-validator';
import { IssueType } from 'src/entities/ticket.entity';

export class CreateTicketDto {
    @IsNotEmpty()
    @Length(3, 255)
    name: string;

    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsNotEmpty()
    issueType: IssueType;

    @IsNotEmpty()
    description: string;
}
