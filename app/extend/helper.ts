module.exports = {
  assetWithHash(asset) {
    // 读取配置中的manifest
    const manifest = this.app.config.manifest || {};
    // 映射文件名
    let filename = asset;
    
    if (manifest[asset]) {
      filename = manifest[asset];
    }
    
    return this.asset(filename);
  },
  success({ res = null, msg = '请求成功', status= 200 }) {
    this.ctx.logger.info(msg, res);
    this.ctx.body = {
      code: 0,
      data: res,
      msg,
    };
    this
  }
}

// 处理成功响应
exports.success = ({ ctx, res = null, msg = '请求成功', status= 200 }) => {
  ctx.logger.info(msg, res);
  ctx.body = {
    code: 0,
    data: res,
    msg,
  };
  ctx.status = status
};