import _ from '@lodash';

class YbookUtils {
    static setRoutes(config: any) {
        let routes = [...config.routes];
    
        routes = routes.map((route: any) => {
          const settings = _.merge({}, config.settings, route.settings);
    
          return {
            ...route,
            settings,
          };
        });
    
        return [...routes];
      }

  static generateRoutesFromConfigs(configs: any) {
    let allRoutes : any[] = [];
    configs.forEach((config: any) => {
      allRoutes = [...allRoutes, ...this.setRoutes(config)];
    });
    return allRoutes;
  }
}

export default YbookUtils;
