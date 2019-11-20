declare module 'egg' {
  // extend app
 
  interface Application {
    qiniu?: any;
    cos?: any;
  }

}