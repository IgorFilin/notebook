import {
  DataSource,
  EntitySubscriberInterface,
  EventSubscriber,
  UpdateEvent,
} from "typeorm";
import { User } from "../users/entities/user.entity";

// Слушатель изменения БД
@EventSubscriber()
export class UserSubscriber implements EntitySubscriberInterface<User> {
  constructor(dataSource: DataSource) {
    dataSource.subscribers.push(this);
  }

  listenTo() {
    return User;
  }

  // После обновления чего то в БД, получаем обновлённую сущность
  beforeUpdate(event: UpdateEvent<any>) {}
}
