export interface IComponentDataJson{
  description: string;
  properties: any;
  type: string;
}
export interface IComponentData {
  data: any;
  json: IComponentDataJson
}
export interface IComponent {
  componentId: string| number;
  title: string;
  comp: string;
  data: IComponentData
}
export interface INavBanner {
  title: string;
  components: IComponent[]
}