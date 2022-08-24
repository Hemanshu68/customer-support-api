import { User } from 'src/modules/user/user.entity';
import { MongoRepository } from 'typeorm';

export class UserRepository extends MongoRepository<User> {}
