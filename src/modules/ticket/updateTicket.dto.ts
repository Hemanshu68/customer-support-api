import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class UpdateTicketDto {
    @ApiProperty({
        description: 'New Remark to add',
        example: 'New Reamark',
    })
    @IsNotEmpty()
    remark: string;

    @ApiProperty({
        description: 'Date added',
        example: new Date(),
    })
    date?: string;
}
