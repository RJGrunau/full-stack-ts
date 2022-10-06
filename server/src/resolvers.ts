import Db from './db';
import {Resolvers} from './resolvers-types.generated';
import Query from "./resolvers/Query"

export interface TwitterResolverContext {
  db: Db
}

const resolvers: Resolvers<TwitterResolverContext> = {
  Query,
}


export default resolvers