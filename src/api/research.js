import config from '@/api/config'
import $axios from '@/utils/request.js'
/*
  新版本api
*/

// 获取科研列表
export async function researchList(params) {
    return $axios({
        url: config.smaiuac_service_base_url + '/api/v2/user_research/research_list',
        method: 'get',
        params: params
    })
}
// 获取科研库详情
export async function getResearch(params) {
    return $axios({
        url: config.smaiuac_service_base_url + '/api/v2/user_research/get_research',
        method: 'get',
        params: params
    })
}
// 添加科研库
export async function addResearch(data) {
    return $axios({
        url: config.smaiuac_service_base_url + '/api/v2/user_research/add_research',
        method: 'post',
        data: data
    })
}
// 修改科研库
export async function modifyResearch(data) {
    return $axios({
        url: config.smaiuac_service_base_url + '/api/v2/user_research/modify_research',
        method: 'post',
        data: data
    })
}

// 删除科研库详情
export async function delResearch(data) {
    return $axios({
        url: config.smaiuac_service_base_url + '/api/v2/user_research/delete_research',
        method: 'post',
        data: data
    })
}

// 上传excel
export async function uploadExcel(data) {
    return $axios({
        url: config.smaifdef_service_base_url + '/api/v1/research/import_metas',
        method: 'post',
        data: data
    })
}

// 手动入组 添加数据到科研项目
export async function addPatResearch(data) {
    return $axios({
        url: config.smaidatasearch_service_base_url + '/api/v1/research_manage/set_tags',
        method: 'patch',
        data: data
    })
}
// 手动入组 删除科研数据
export async function delPatResearch(data) {
    return $axios({
        url: config.smaidatasearch_service_base_url + '/api/v1/research_manage/unset_tags',
        method: 'patch',
        data: data
    })
}

// 自动入组条件 科研项目
export async function addConditionResearch(data) {
    return $axios({
        url: config.smaidatasearch_service_base_url + '/api/v1/research_manage/update_condition',
        method: 'patch',
        data: data
    })
}
// 获取自动入组条件 科研项目
export async function getConditionResearch(params) {
    return $axios({
        url: config.smaidatasearch_service_base_url + '/api/v1/research_manage/condition_info',
        method: 'get',
        params: params
    })
}
// 新增患者 科研项目
export async function addPaticent(params) {
    return $axios({
        url: config.smaidatasearch_service_base_url + '/api/v1/research_manage/condition_info',
        method: 'get',
        params: params
    })
}
