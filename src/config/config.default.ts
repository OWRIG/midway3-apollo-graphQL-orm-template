import { MidwayConfig } from '@midwayjs/core';
import { SampleResolver } from '../resolvers/sample.resolver';
import { CreateGraphQLMiddlewareOption } from 'apollo-server-midway3';
// eslint-disable-next-line node/no-extraneous-import
import { ServerRegistration } from 'apollo-server-koa';

export default {
  // use for cookie sign key, should change to your own and keep security
  keys: '1644730611884_1067',
  koa: {
    port: 7001,
  },
  graphql: <CreateGraphQLMiddlewareOption>{
    schema: {
      resolvers: [SampleResolver],
    },
    path: '/graphql',
  },
  apollo: <ServerRegistration>{
    path: '/graphql',
  },
  orm: {
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'root',
    database: 'teachdb',
    synchronize: true, // 如果第一次使用，不存在表，有同步的需求可以写 true
    logging: false,
  },
} as MidwayConfig;
