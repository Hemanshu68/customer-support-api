import { Ticket } from 'src/modules/ticket/ticket.entity';
import { MongoRepository } from 'typeorm';

export class TicketRepository extends MongoRepository<Ticket> {}
