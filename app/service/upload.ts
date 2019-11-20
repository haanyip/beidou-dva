import { Service } from 'egg';
const COS  =  require('cos-nodejs-sdk-v5');
class UploadService extends Service {
  constructor(props) {
    super(props);
    this.cos = new COS({
      SecretId: 'AKID81e7j5L0ZrXJ1dwC9xfbJo8E7k9Ju1Z0',
      SecretKey: 'LjvvgEYfbKoFUVN2TcWAbnkU0O2YyHLK'
    })
  }
  async putFile(){
    const stream = await this.ctx.getFileStream();
    const filename = path.basename(stream.filename); // 文件名称
    const payload = this.ctx.request.body || {};
    this.cos.putObject({
      Bucket: 'hdl-1257626720' ,
      Region: 'ap-beijing',
      Key: `test/${filename}`,  // 这里传入前缀
      Body: payload,
    }, function (err, data) {
        console.log(err || data);
    });
  }

}
module.exports = UploadService;