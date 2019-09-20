
export interface Ueditor{
  getContent?: (args?:void)=> string;
  focus?: (args?:void)=> void;
  ready?: ({})=> void;
  setContent?:(args?:string)=> void;
  destroy?: ()=>void;
  addListener?:(name?:string, f?:()=>void )=>void;
  execCommand?: (cmd?:string,params?:{})=>void
}