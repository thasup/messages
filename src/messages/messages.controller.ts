import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('messages')
export class MessagesController {
  @Get()
  listMessages() {
    console.log('list');
  }

  @Post()
  createMessage(@Body() body: any) {
    console.log('create / body', body);
  }

  @Get('/:id')
  getMessage(@Param('id') id: string) {
    console.log('get / id', id);
  }
}
