import { createStore } from 'vuex'
import { StoreDataProps, ResponseType, UserInfoProp } from '@/schema/common'
import { TagsProps } from 'eforce-front/schema/common'
import $ajax from '@/utils/ajax'
import { IdeUser } from '@/views/home/components/index'
const GET_UNREAD_MESSAGE_COUNT = 'emsg/message/userMessages/unReadMessage/count' // 获取未读消息数量-webscoket
const GET_MESSAGE_LIST = 'emsg/message/userMessages/list' // 查询用户消息列表-webscoket
const GET_USERINFO = 'iam/user/self'
interface MessageDetail {
  id: string;
  messageSubject: string; // 消息主题
  messageContent: string; // 描述
  isRead: number; // 是否已读
  createTime: string; // 创建时间
}
interface DeviceRecords {
  records: MessageDetail[];
  total?: number;
}
interface MessageCount {
  count: number;
}
export interface SelfStoreDataProps extends StoreDataProps {
  activeTag: string;
  tagList: TagsProps[];
}
const store = createStore<SelfStoreDataProps>({
  state: {
    token: localStorage.getItem('token') || '',
    username: localStorage.getItem('username') || '',
    userId: localStorage.getItem('userId') || '',
    realName: localStorage.getItem('realName') || '',
    tenantId: localStorage.getItem('tenantId') || '',
    tenantName: localStorage.getItem('tenantName') || '',
    system: localStorage.getItem('system') || '',
    systemId: localStorage.getItem('systemId') || '',
    menuTitle: localStorage.getItem('menuTitle') || '',
    menuId: localStorage.getItem('menuId') || '',
    menuAll: JSON.parse(localStorage.getItem('menuAll') || '[]'),
    logoImg:
      localStorage.getItem('logoImg') || require('@/assets/img/Home_logo.png'), // 头部导航栏图片 Home_logo.png
    logoImgCopy: require('@/assets/img/Home_logo.png'),
    systemBackground:
      localStorage.getItem('systemBackground') ||
      require('@/assets/img/Home-page-background.png'),
    systemBackgroundCopy: require('@/assets/img/Home-page-background.png'),
    breadcrumb: JSON.parse(localStorage.getItem('breadcrumb') || '[]'), // 面包屑数组
    NoticePointNumber: 0, // header即时消息红点显示判断
    userInfo: {},
    showNotification: false, // header即时消息弹窗显示判断
    notificationDetail: {
      title: '',
      message: '',
      id: ''
    }, // header即时消息弹窗显示内容
    supplierId: localStorage.getItem('supplierId') || '', // 供应商id
    supplierBusinessName: localStorage.getItem('supplierId') || '', // 供应商企业名称
    menuList: JSON.parse(localStorage.getItem('menuList') || '[]'), // 左侧菜单数据
    currentRoleId: localStorage.getItem('currentRoleId') || '1',
    currentRoleName: localStorage.getItem('currentRoleName') || '',
    userHomePage: localStorage.getItem('userHomePage') || '',
    roleList: JSON.parse(localStorage.getItem('roleList') || '[]'),
    extend: JSON.parse(localStorage.getItem('extend') || '{}'),
    level: localStorage.getItem('level') || '',
    isInitUserInfo: true, // 用来控制切角色后初始化接口数据
    activeTag: localStorage.getItem('activeTag') || '',
    tagList: JSON.parse(localStorage.getItem('tagList') || '[]')
  },
  mutations: {
    setToken(state, token) {
      state.token = token
      localStorage.setItem('token', token)
    },
    setSystem(state, name) {
      state.system = name
      localStorage.setItem('system', name)
    },
    setSystemId(state, id) {
      state.systemId = id
      localStorage.setItem('systemId', id)
    },
    // todo
    setMenuTitle(state, title) {
      state.menuTitle = title
    },
    setBreadcrumb(state, val) {
      state.breadcrumb = val
      localStorage.setItem('breadcrumb', JSON.stringify(val))
    },
    setMenuId(state, id) {
      state.menuId = id
      localStorage.setItem('menuId', id || '')
    },
    setMenuAll(state, list) {
      state.menuAll = list
      localStorage.setItem('menuAll', JSON.stringify(list))
    },
    // 修改图片的方法
    setLogoImg(state, logoImg) {
      if (logoImg) {
        state.logoImg = logoImg
      } else {
        state.logoImg = state.logoImgCopy
      }
    },
    setSystemBackground(state, systemBackground) {
      if (systemBackground) {
        state.systemBackground = systemBackground
      } else {
        state.systemBackground = state.systemBackgroundCopy
      }
    },
    // 当前提示显示信息
    setNotificationDetail(state, val) {
      state.notificationDetail = val
    },
    // 当前提示是否显示
    setNotificationStatus(state, val) {
      state.showNotification = val
    },
    // 获取未读消息提示
    getNoticePointNumber(state, val) {
      state.NoticePointNumber = val
    },
    // 获取用户信息
    getUserInfo(state, val) {
      state.userInfo = val
    },

    // 获取供应商id
    setSupplierId(state, id) {
      state.supplierId = id
      localStorage.setItem('supplierId', id || '')
    },
    // 供应商企业名称
    setSupplierBusinessName(state, id) {
      state.supplierBusinessName = id
      localStorage.setItem('supplierBusinessName', id || '')
    },
    featchMenu(state, menuList) {
      state.menuList = menuList || []
      localStorage.setItem('menuList', JSON.stringify(menuList))
    },
    featchUserInfo(
      state: StoreDataProps,
      data: { userInfo: UserInfoProp; type: string }
    ) {
      state.username = data.userInfo.userName
      state.userId = data.userInfo.userId
      state.realName = data.userInfo.realName
      state.tenantId = data.userInfo.tenantId
      state.tenantName = data.userInfo.tenantName
      state.currentRoleId = data.userInfo.currentRoleId
      state.currentRoleName = data.userInfo.currentRoleName
      state.userHomePage = data.userInfo.userHomePage
      state.roleList = data.userInfo.roleList
      state.extend = data.userInfo.extend
      state.level = data.userInfo.currentRoleLevel
      state.isInitUserInfo = true
      localStorage.setItem('username', data.userInfo.userName)
      localStorage.setItem('userId', data.userInfo.userId)
      localStorage.setItem('realName', data.userInfo.realName)
      localStorage.setItem('tenantId', data.userInfo.tenantId)
      localStorage.setItem('tenantName', data.userInfo.tenantName)
      localStorage.setItem('currentRoleId', data.userInfo.currentRoleId)
      localStorage.setItem('currentRoleName', data.userInfo.currentRoleName)
      localStorage.setItem('userHomePage', data.userInfo.userHomePage)
      localStorage.setItem('roleList', JSON.stringify(data.userInfo.roleList))
      localStorage.setItem('extend', JSON.stringify(data.userInfo.extend))
      localStorage.setItem('level', data.userInfo.currentRoleLevel)
    },
    // 设置tag
    setTagList(state, val) {
      state.tagList = val
      localStorage.setItem('tagList', JSON.stringify(val))
    },
    // 设置activeTag
    setActiveTag(state, val) {
      state.activeTag = val
      localStorage.setItem('activeTag', val)
    }
  },
  actions: {
    async updateNotification({ commit }, msg) {
      /**
       * displayType 是否弹窗 none popup
       * messageContent 内容 当displayType 为popup时显示
       * messageSubject 标题
       */
      // 存在msg时代表socket发来数据，显示socket信息及更新未读消息数
      if (msg) {
        const { displayType, messageContent, messageSubject, id } = msg
        if (displayType === 'popup') {
          // 当类型为弹窗时，弹窗信息存储当setNotificationDetail中用于显示
          commit('setNotificationDetail', {
            title: messageSubject,
            message: messageContent,
            id
          })
          // 显示弹窗
          commit('setNotificationStatus', true)
        }
      } else {
        // 没有返回msg代表首次进入，获取最新的未读弹窗消息
        const resp: ResponseType<DeviceRecords> = await $ajax.get(
          GET_MESSAGE_LIST,
          { params: { isRead: 0, displayType: 'popup' } }
        )
        if (resp.success && resp.data.records.length > 0) {
          const { messageContent, messageSubject, id } = resp.data.records[0]
          // 当类型为弹窗时，弹窗信息存储当setNotificationDetail中用于显示
          commit('setNotificationDetail', {
            title: messageSubject,
            message: messageContent,
            id
          })
          // 显示弹窗
          commit('setNotificationStatus', true)
        }
      }
      // 未读消息数
      const resp: ResponseType<MessageCount> = await $ajax.get(
        GET_UNREAD_MESSAGE_COUNT
      )
      if (resp.success) {
        commit('getNoticePointNumber', resp.data.count)
      }
    },
    async updateUserInfo({ commit }) {
      // 获取用户信息
      const userInfo: ResponseType<IdeUser> = await $ajax.get(GET_USERINFO)
      if (userInfo.success) {
        commit('getUserInfo', userInfo.data)
        commit('featchUserInfo', { userInfo: userInfo.data })
      }
    }
  }
})

export default store
