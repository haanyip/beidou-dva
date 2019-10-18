import { Controller } from 'egg';
import path from 'path';
import webpack from 'webpack';
import moment from 'moment';
const tsImportPluginFactory = require('ts-import-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const autoprefixer = require('autoprefixer');
const pxtorem = require('postcss-pxtorem');
class PreviewController extends Controller {
  constructor(ctx) {
    super(ctx);
  }

  async index() {
    const { ctx, service } = this;
    const { mobile } = ctx.request.body;
    if(mobile) {
      service.preview.previewMobile()
    }else{
      service.preview.previewPc()
    }
    ctx.body ={
      code: 200
    }
  }
}


module.exports = PreviewController;