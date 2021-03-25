import { EntitySchema } from 'typeorm' // import {EntitySchema} from "typeorm";

import { User } from '../model/User'

export default new EntitySchema({
  name: 'User',
  target: User,
  columns: {
    id: {
      primary: true,
      type: 'uuid',
      generationStrategy: 'uuid',
      default: 'uuid_generate_v4()'
    },
    name: {
      type: 'varchar'
    },
    email: {
      type: 'varchar'
    },
    password: {
      type: 'varchar'
    },
    created_At: {
      type: 'timestamp',
      default: 'now()'
    },
    updated_At: {
      type: 'timestamp',
      default: 'now()'
    }
  }

})
