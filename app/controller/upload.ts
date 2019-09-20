const path = require('path');
const Controller = require('egg').Controller;

class UploadController extends Controller {
  constructor(ctx) {
    super(ctx);
  }

  // 上传单个文件
  async create() {
    
    const { ctx, app } = this;
    // 上传七牛
    const stream = await ctx.getFileStream();
    const filename = path.basename(stream.filename); // 文件名称
    const payload = ctx.request.body || {};
    const dir = `/igola-link/flow/`;
    const res = await app.qiniu.put(payload.file, { filename, dir , uuid: true })
    console.dir(res)
    // 设置响应内容和响应状态码
    ctx.helper.success({ res });
  }
}


module.exports = UploadController;