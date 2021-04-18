export type Route = {
    key: string,
    name: string
  }
  
export type State = {
  type: string,
  key: string,
  routeNames: Array<string>,
  routes: Array<Route>,
  index: number,
}
  
export type TabBar = {
  state: State,
  descriptors: any,
  navigation: any,
}

export default TabBar;