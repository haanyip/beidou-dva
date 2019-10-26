import { Controller } from 'egg';
class PreviewController extends Controller {
  constructor(ctx) {
    super(ctx);
  }

  async index() {
    const { ctx, service } = this;
    const { mobile, previewData } = ctx.request.body;
    if(mobile) {
      service.preview.previewMobile(previewData)
    }else{
      service.preview.previewPc(previewData)
    }
    ctx.body ={
      code: 200
    }
  }
}


module.exports = PreviewController;