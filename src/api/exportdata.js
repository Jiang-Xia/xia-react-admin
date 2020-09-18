import config from '@/api/config'
import $axios from '@/utils/request.js'

// 获取项目、科室、病种权限信息
export async function searchKeywords(data) {
    return $axios({
        url: config.smaidatasearch_service_base_url + '/api/v1/data_search/quick_search',
        method: 'post',
        data: data
    })
}

// 获取keywordList
export async function keywordList(params) {
    return $axios({
        url: config.smaidatasearch_service_base_url + '/api/v1/data_search/keywords_template',
        method: 'get',
        params: params
    })
}

// 导出任务
export async function exportTask(data, method) {
    if (method === 'get' || method === 'delete') {
        return $axios({
            url: config.smaiexport_service_base_url + '/api/v2/export/task',
            method: method,
            params: data
        })
    } else {
        return $axios({
            url: config.smaiexport_service_base_url + '/api/v2/export/task',
            method: method,
            data: data
        })
    }
}

// 获取任务列表
export async function taskList(data) {
    return $axios({
        url: config.smaiexport_service_base_url + '/api/v2/export/task_list',
        method: 'post',
        data: data
    })
}

// 导出字段联想
export async function associationAsync(data) {
    return $axios({
        url: config.smaidatasearch_service_base_url + '/api/v1/data_search/associate_search',
        method: 'post',
        data: data
    })
}
// 获取结构化数据字段模板 科研个病种
export async function getDetailTemplate(params) {
    let url = config.smaifdef_service_base_url + '/api/v1/disease/meta_template'
    if (params.research_id) {
        url = config.smaifdef_service_base_url + '/api/v1/research/meta_template'
    }
    return $axios({
        method: 'get',
        url: url,
        params: params
    })
}
