import $axios from '@/utils/requestForm.js'
import config from '@/api/config.js'
let formUrl
export default class request {
    // 获取新token
    static getToken() {
        return $axios.post(config.smaiformmanage_service_base_url + '/api/v1/token/get_proxy_token').then((res) => {
            formUrl = res.data.proxy_url
            console.log(formUrl)
            return res.data
        })
    }
    // 获取医院列表
    static getHospList() {
        return $axios.get(formUrl + `/api/v1/form_manage/hospital_data_list`).then((res) => res.data)
    }
    // 获取数据
    static getField(params) {
        return $axios.post(formUrl + `/api/v1/form_manage/data_list`, params).then((res) => res.data)
    }
    // 导出表格数据
    static exportExcel(params) {
        return $axios.post(formUrl + `/api/v1/form_manage/data_export`, params).then((res) => res.data)
    }
    // 获取详情
    static getDetail(pd_id, triage_id, hospital_id, template_id) {
        return $axios
            .get(
                formUrl +
                    `/api/v1/form_manage/data_info_and_meta_list?pd_id=${pd_id}&triage_id=${triage_id}&hospital_id=${hospital_id}&template_id=${template_id}`
            )
            .then((res) => res.data)
    }
    //   保存数据
    static saveData(params) {
        return $axios.patch(formUrl + `/api/v1/form_manage/data_info`, params).then((res) => res.data)
    }
}
