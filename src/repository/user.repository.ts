import { User } from 'src/entities/user.entity';
import { MongoRepository } from 'typeorm';

export class UserRepository extends MongoRepository<User> {}
