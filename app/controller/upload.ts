import { Controller } from 'egg';
class UploadController extends Controller {
  constructor(ctx) {
    super(ctx);
  }

  // 上传单个文件
  async create() {
    const { ctx, app } = this;
    // 上传腾讯云
    const stream = await ctx.getFileStream();
    const res = await app.cos.putFile({dir: 'upload/images/', stream, uuid: true})
    ctx.helper.success({ res: `https://${res}` });
  }
}


module.exports = UploadController;