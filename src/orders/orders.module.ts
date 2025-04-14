import { Module } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { OrdersController } from './orders.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { envs, PRODUCT_SERVICE } from 'src/config';
import { NatsModule } from 'src/transports/nats.module';

@Module({
  controllers: [OrdersController],
  providers: [OrdersService],
  imports: [
    // ClientsModule.register([
    //   {
    //     name: PRODUCT_SERVICE,
    //     transport: Transport.TCP, // TCP transport
    //     options: {
    //       host: envs.productMicroserviceHost,
    //       port: envs.productMicroservicePort,
    //     },
    //   },
    // ]),
    NatsModule,
  ],
})
export class OrdersModule {}
