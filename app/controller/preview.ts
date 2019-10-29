import { Controller } from 'egg';
class PreviewController extends Controller {
  constructor(ctx) {
    super(ctx);
  }

  async index() {
    const { ctx, service } = this;
    const { mobile, previewData } = ctx.request.body;
    let res: any[] = [];
    if(mobile) {
      res = await service.preview.previewMobile(previewData)
    }else{
      res = await service.preview.previewPc(previewData)
    }
    const data = res.find(item=>item.url.includes('index.html'))
    ctx.body ={
      code: 200,
      data: data.url
    }
  }
}


module.exports = PreviewController;