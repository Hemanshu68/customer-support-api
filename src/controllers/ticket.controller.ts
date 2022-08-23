import {
    Body,
    Controller,
    Get,
    Post,
    UsePipes,
    ValidationPipe,
} from '@nestjs/common';
import { CreateTicketDto } from '../dto/create-ticket.dto';
import { Ticket } from '../entities/ticket.entity';
import { TicketService } from '../services/ticket.service';

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
        return await this.ticketService.create(ticket);
    }

    @Get('/all')
    async getAll() {
        return await this.ticketService.getAll();
    }
}
