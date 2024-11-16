import { Prisma } from '@prisma/client';
import { Injectable } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { PrismaService } from 'src/prisma.service';
import { Book } from './entities/book.entity';

@Injectable()
export class BookService {

  constructor(private prisma: PrismaService) {}
  
  create(createBookDto: Book) {
    return this.prisma.book.create({data: createBookDto});
  }

  findAll() {
    return this.prisma.book.findMany();
  }

  findOne(id: number) {
    return this.prisma.book.findUnique({ where: { id } });
  }

  update(id: number, updateBookDto: UpdateBookDto) {
    return this.prisma.book.update({
      where: { id },
      data: updateBookDto,
    });
  }

  remove(id: number) {
    return this.prisma.book.delete({ where: { id } });
  }
}
