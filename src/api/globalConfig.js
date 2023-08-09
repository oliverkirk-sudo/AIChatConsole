import request from '@/utils/request'

export function getWebsiteConfig() {
  return request({
    url: '/globalConfig/website',
    method: 'get'
  })
}

export function saveWebsiteConfig(content) {
  return request({
    url: '/globalConfig',
    method: 'post',
    data: {
      type: 'Website',
      ...content
    }
  })
}

export function getEmailConfig() {
  return request({
    url: '/globalConfig/email',
    method: 'get'
  })
}

export function saveEmailConfig(content) {
  return request({
    url: '/globalConfig',
    method: 'post',
    data: {
      type: 'Email',
      ...content
    }
  })
}

export function getRegisterQuotaConfig() {
  return request({
    url: '/globalConfig/registerQuota',
    method: 'get'
  })
}

export function saveRegisterQuotaConfig(content) {
  return request({
    url: '/globalConfig',
    method: 'post',
    data: {
      type: 'RegisterQuota',
      ...content
    }
  })
}

export function getSensitiveWordsConfig() {
  return request({
    url: '/globalConfig/sensitiveWords',
    method: 'get'
  })
}

export function saveSensitiveWordsConfig(content) {
  return request({
    url: '/globalConfig',
    method: 'post',
    data: {
      type: 'SensitiveWords',
      ...content
    }
  })
}

export function getNoticeConfig() {
  return request({
    url: '/globalConfig/notice',
    method: 'get'
  })
}

export function saveNoticeConfig(content) {
  return request({
    url: '/globalConfig',
    method: 'post',
    data: {
      type: 'Notice',
      ...content
    }
  })
}

export function getChatConfig() {
  return request({
    url: '/globalConfig/chat',
    method: 'get'
  })
}

export function saveChatConfig(content) {
  return request({
    url: '/globalConfig',
    method: 'post',
    data: {
      type: 'Chat',
      ...content
    }
  })
}

export function getDrawConfig() {
  return request({
    url: '/globalConfig/draw',
    method: 'get'
  })
}

export function saveDrawConfig(content) {
  return request({
    url: '/globalConfig',
    method: 'post',
    data: {
      type: 'Draw',
      ...content
    }
  })
}
