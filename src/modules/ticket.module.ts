import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TicketController } from '../controllers/ticket.controller';
import { Ticket } from '../entities/ticket.entity';
import { TicketService } from '../services/ticket.service';

@Module({
    imports: [TypeOrmModule.forFeature([Ticket])],
    controllers: [TicketController],
    providers: [TicketService],
})
export class TicketModule {}
