import { Controller, Get, Post } from '@nestjs/common';

@Controller('messages')
export class MessagesController {
  @Get()
  listMessages() {
    console.log('list');
  }

  @Post()
  createMessage() {
    console.log('create');
  }

  @Get('/:id')
  getMessage() {
    console.log('get');
  }
}
