var fs = require("fs");
module.exports = {
  /**
   * 获取 文件夹下所有文件
   * @param path 路径
   */
  async readFileList(path) {
    const filesList = []
    var files = fs.readdirSync(path);
    files.forEach((itm, index) => {
      var stat = fs.statSync(path + itm);
      if (stat.isDirectory()) {
        //递归读取文件
        this.readFileList(path + itm + "/", filesList);
      } else {
        var obj: any = {}; //定义一个对象存放文件的路径和名字
        obj.path = path; //路径
        obj.filename = itm; //名字
        filesList.push(obj);
      }
    });
    return filesList;
  }
};
