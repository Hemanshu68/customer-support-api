import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, Length } from 'class-validator';
import { IssueType } from 'src/modules/ticket/ticket.entity';

export class CreateTicketDto {
    @ApiProperty({
        description: 'Name of Customer.',
        example: 'John Doe',
    })
    @IsNotEmpty()
    @Length(3, 255)
    name: string;

    @ApiProperty({
        description: 'Email of Customer.',
        example: 'johndoe@gmail.com',
    })
    @IsNotEmpty()
    @IsEmail()
    email: string;

    @ApiProperty({
        description: 'Complain type',
        enum: IssueType,
        example: IssueType.OTHER,
    })
    @IsNotEmpty()
    issueType: IssueType;

    @ApiProperty({
        description: 'Detail description of complain',
        example: 'Product was broken when arrived/',
    })
    @IsNotEmpty()
    description: string;
}
