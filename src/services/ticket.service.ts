import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TicketRepository } from 'src/repository/ticket.repository';
import { Ticket } from '../entities/ticket.entity';

@Injectable()
export class TicketService {
    constructor(
        @InjectRepository(Ticket)
        private ticketRepository: TicketRepository,
    ) {}

    async create(createTickitDto: Ticket): Promise<Ticket> {
        return await this.ticketRepository.save(createTickitDto);
    }

    async getAll() {
        return await this.ticketRepository.findAndCount();
    }
}
