/*
 * @Author: abbott
 * @Date: 2022-06-06 09:23:17
 * @LastEditors: abbott
 * @LastEditTime: 2023-08-17 15:13:21
 * @Description:
 */
const { arrayToTree } = require('../require')

const data = [
  {
    id: 1,
    label: '新闻中心',
    value: '',
    code: 'newsType',
    sort: 0,
    parentId: 0,
    created: 1726194848,
    updated: 1726194848,
    '@pid:=0': 0,
    isChild: '0,1'
  },
  {
    id: 2,
    label: '行业动态',
    value: 'hy',
    code: '',
    sort: 0,
    parentId: 1,
    created: 1726197164,
    updated: 1726197164,
    '@pid:=0': 0,
    isChild: '0,1,2'
  },
  {
    id: 3,
    label: '政府政策',
    value: 'zc',
    code: null,
    sort: 0,
    parentId: 1,
    created: 0,
    updated: 0,
    '@pid:=0': 0,
    isChild: '0,1,2,3'
  },
  {
    id: 4,
    label: '公司动态',
    value: 'dt',
    code: null,
    sort: 0,
    parentId: 1,
    created: 0,
    updated: 0,
    '@pid:=0': 0,
    isChild: '0,1,2,3,4'
  },
  {
    id: 5,
    label: '技术部分',
    value: 'js',
    code: null,
    sort: 0,
    parentId: 4,
    created: 0,
    updated: 0,
    '@pid:=0': 0,
    isChild: '0,1,2,3,4,5'
  }
]

test('测试toBe', async () => {
  console.log(JSON.stringify(arrayToTree(data, 0)))
})
