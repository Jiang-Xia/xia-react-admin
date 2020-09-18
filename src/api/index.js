import config from '@/api/config'
import $axios from '@/utils/request.js'
/*
  新版本api
*/

// 获取 首页统计 和图表
export async function statisticsInfo(params) {
    return $axios({
        url: config.smaidatasearch_service_base_url + '/api/v1/data_search/statistics_info',
        method: 'get',
        params: params
    })
}
