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
}