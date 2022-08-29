import {
    BadRequestException,
    Body,
    Controller,
    Get,
    Param,
    ParseIntPipe,
    Post,
    UseGuards,
    UsePipes,
    ValidationPipe,
} from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { CreateTicketDto } from './create-ticket.dto';
import { Ticket } from './ticket.entity';
import { TicketService } from './ticket.service';

@ApiTags('Ticket')
@Controller('ticket')
export class TicketController {
    constructor(private ticketService: TicketService) {}

    @Post('/create')
    @UsePipes(ValidationPipe)
    async createTicket(@Body() ticketData: CreateTicketDto): Promise<Ticket> {
        const ticket = new Ticket();
        ticket.issueType = ticketData.issueType;
        ticket.description = ticketData.description;
        ticket.email = ticketData.email;
        ticket.name = ticketData.name;
        ticket.ticketId = 1 + (await this.ticketService.count());

        await this.ticketService.create(ticket);
        return ticket;
    }

    @UseGuards(JwtAuthGuard)
    @ApiBearerAuth()
    @Get('/all')
    async getAll() {
        return await this.ticketService.getAll();
    }

    @Get('/:id')
    async getTicketById(@Param('id', ParseIntPipe) ticketId: number) {
        const res = await this.ticketService.getTicketById(ticketId);
        if (!res) throw new BadRequestException('Invadlid ticket id');
        return res;
    }
}
