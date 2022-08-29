import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TicketRepository } from 'src/modules/ticket/ticket.repository';
import { Ticket } from './ticket.entity';

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

    async getTicketById(ticketId: number) {
        return await this.ticketRepository.findOneBy({ where: { ticketId } });
    }

    async count() {
        return await this.ticketRepository.count();
    }
}
