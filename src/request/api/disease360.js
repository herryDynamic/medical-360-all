import { get, post, getBlob } from '../http'
const diease360 = {
  apiAddress: p => get('/testing/restful', p),
  apiShopList: p => post('/v1/users/my_list/shop', p),
  // apiGetDiseaseInfoSelectHC: p => get('./mockNew.json'),
  apiGetCards: p => get('./card.json'),
  apiGetDepartmentToolsSelect: p => post('/v1/departmentToolsSelect', p),
  // apiGet360Detaol: p => get('./360detail.json'),
  // apiGet360Detaol: p => post('/v1/diseaseInfoSelect', p),
  apiUpdateDiseaseInfo: p => post('/v1/updateDiseaseInfo', p),
  apiGetDiseaseInfoSelectHC: p => post('/v1/diseaseInfoSelect', p),
  // similarityCase: p => post('/v1/similarityCase', p),
  similarityCase: p =>
    post(`/v1/similarityCase?pageIndex=${p.pageIndex}&pageSize=${p.pageSize}`, p),
  // getSimilarityEntity: p => get(`/v1/getSimilarityEntity/${p}`),
  getSimilarityEntity: p => post('/v1/getSimilarityEntity', p),
  exportDataModel: p => getBlob(`/v1/exportDataModel/${p.disease_name}`), // 生成导入模板
  importData: p => post('/v1/importData', p), // 导入Excel数据
  similarityCaseSearh: p => post('/v1/similarityCaseSearh', p) // 查树状结构
}

export default diease360
