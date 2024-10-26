import { Injectable } from '@nestjs/common'; // Decorador Injectable para permitir que la clase sea inyectable como un servicio
import { CreateUserDto } from './dto/create-user.dto'; // Importación del DTO para crear un usuario
import { UpdateUserDto } from './dto/update-user.dto'; // Importación del DTO para actualizar un usuario
import { InjectRepository } from '@nestjs/typeorm'; // Decorador para inyectar el repositorio de TypeORM
import { User } from './entities/user.entity'; // Entidad User para realizar operaciones en la tabla de usuarios
import { Repository } from 'typeorm'; // Importación del tipo Repository de TypeORM para acceder a las operaciones de la base de datos

@Injectable()
export class UsersService {

  // Constructor que inyecta el repositorio de la entidad User
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>) {
  }

  // Método para crear un nuevo usuario usando el repositorio
  create(createUserDto: CreateUserDto) {
    return this.userRepository.save(createUserDto);
  }

  // Método asincrónico para buscar un usuario por email
  async findOneByEmail(email: string): Promise<User | undefined> {
    return this.userRepository.findOne({
      where: { email },
      select: ['id', 'name', 'email', 'password'], // Incluye el campo password en la respuesta
    });
  }

  // Método para obtener todos los usuarios
  findAll() {
    return this.userRepository.find();
  }

  // Método para obtener un usuario específico por su ID
  findOne(id: number) {
    return this.userRepository.findOneBy({ id });
  }

  // Método para actualizar un usuario por su ID
  update(id: number, updateUserDto: UpdateUserDto) {
    return this.userRepository.update(id, updateUserDto);
  }

  // Método para eliminar un usuario por su ID
  remove(id: number) {
    return this.userRepository.delete(id);
  }

}
