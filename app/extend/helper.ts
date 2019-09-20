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
    this.ctx.status = status
  }
}
