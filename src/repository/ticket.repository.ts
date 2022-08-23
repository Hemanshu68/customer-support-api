import { Ticket } from 'src/entities/ticket.entity';
import { MongoRepository } from 'typeorm';

export class TicketRepository extends MongoRepository<Ticket> {}
