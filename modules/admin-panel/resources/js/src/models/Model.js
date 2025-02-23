import {Model as BaseModel} from 'vue-api-query'

export default class Model extends BaseModel {

    // Define a base url for a REST API
    baseURL() {
        return 'api'
        // return window.datarr.env.APP_URL + '/api'
    }

    // Implement a default request method
    request(config) {
        return this.$http.request(config)
    }

    getFromCacheFirstLoadPage() {
        let pathData = '/' + this.baseURL() + '/' + this.resource() + this._builder.query();
        // let pathData = this.baseURL() + this.resource() + this._builder.query();
        // console.log(pathData)
        if (window.datarr[pathData]) {
            return JSON.parse(window.datarr[pathData]).data;
        } else {
            return this.get();
        }
    }

    static async cacheFromDynamic(pathData) {

        if (window.datarr[pathData]) {

            return JSON.parse(window.datarr[pathData]).data;

        } else {

            let f = []

            try {
                var t = await this.custom(pathData).get();
                f = t.data
            } catch (error) {}

            return f
        }
    }

    static async manageDatass(items) {


        const resolve = function (path, obj = self, separator = '.') {
            var properties = Array.isArray(path) ? path : path.split(separator)
            return properties.reduce((prev, curr) => prev?.[curr], obj)
        }

        var list = [];

        for (const item of items) {

            let newList = [];

            if (item['type'].startsWith('static')) {
                item['data']['static'].forEach((value , index, arr) => {
                    value['type'] = item['type'];
                    newList.push(value) ;
                });
            }else if (item['type'].startsWith('dynamic')) {
                let any = await this.cacheFromDynamic(item['data']['dynamic']);

                any.forEach((value, index, array) => {
                    let newValue = []
                    newValue['type'] = item['type'];

                    Object.keys(item['data']).forEach((key, index, arr) => {
                        if (key !== 'dynamic' && typeof item['data'][key] === 'string' && !key.startsWith('mediaCollectionName')) {
                            newValue[key] = resolve(item['data'][key], value)
                        } else if (key !== 'dynamic' && key.startsWith('media') && !key.startsWith('mediaAlt')) {
                            newValue[key] = item['data'][key];
                        }
                    });
                    newList.push(newValue)
                })
            }else if (item['type'].startsWith('default')) {
                newList = await this.cacheFromDynamic(item['data']['path']);
            }

            list = [...list, ...newList];
        }

        return list;
    }
}
