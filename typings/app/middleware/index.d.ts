// This file is created by egg-ts-helper@1.25.8
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportUuid from '../../../app/middleware/uuid';

declare module 'egg' {
  interface IMiddleware {
    uuid: typeof ExportUuid;
  }
}
