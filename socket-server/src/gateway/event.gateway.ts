import {
  ConnectedSocket,
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Socket, Server } from 'socket.io';

@WebSocketGateway({ cors: { origin: '*' } })
export class EventGateway {
  @WebSocketServer()
  server: Server;

  @SubscribeMessage('newMessage')
  handleMessage_server(@MessageBody() body: any) {
    this.server.emit('onMessage', {
      msg: 'new Message',
      content: body,
    });
  }
  @SubscribeMessage('newMessage')
  handleMessage(@MessageBody() body: any, @ConnectedSocket() client: Socket) {
    client.emit('onMessage');
    console.log(body);
  }
}
