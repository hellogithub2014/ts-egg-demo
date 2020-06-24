import { Context, Application, EggAppConfig } from 'egg';

export default function uuidMiddleWare(options: EggAppConfig['uuid'], app: Application): any {
  return async (ctx: Context, next: () => Promise<any>) => {
    // name 就是 config.default.js 中 uuid 下的属性
    app.logger.info(options.name);
    ctx.logger.info('uuidMiddleWare');
    await next();
  };
}
