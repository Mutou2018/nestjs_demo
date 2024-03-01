import { Module } from '@nestjs/common';
import { PersonModule } from './person/person.module';
import { DemoModule } from './demo/demo.module';
import { DepartmentService } from './department/department.service';
import { OtherModule } from './other/other.module';
import { AppService } from './app.service';
import { AppController } from './app.controller';

@Module({
  imports: [PersonModule, DemoModule, OtherModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
