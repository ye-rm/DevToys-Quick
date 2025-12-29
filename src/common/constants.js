/**
* @author Ye Wenyu
* @date 2025/12/29
* @version 1.1
*
* @copyright Copyright (c) 2025 Ye Wenyu
* SPDX-License-Identifier: KAPP-R-1.1
* @see {@link https://github.com/ye-rm/LICENSE-KAPP-R}
*/
export default {
    TOOLS: [
      {
        name: 'Base64 编解码',
        icon: '/assets/icons/base64.svg',
        route: '/pages/base64'
      },      
      {
        name: '进制转换',
        icon: '/assets/icons/numbase.svg',
        route: '/pages/number-base'
      },
      {
        name: 'JSON 格式化',
        icon: '/assets/icons/json.svg',
        route: '/pages/json-formatter'
      },
      {
        name: "XML 格式化",
        icon: '/assets/icons/xml.svg',
        route: 'pages/xml-formatter'
      },
      {
        name: '密码生成器',
        icon: '/assets/icons/password.svg',
        route: '/pages/password-gen'
      },
      {
        name: "哈希生成",
        icon: '/assets/icons/hash.svg',
        route: '/pages/hash-gen'
      },
      {
        name: "检验和生成",
        icon: '/assets/icons/checksum.svg',
        route: '/pages/checksum'
      },
      {
        name: "语音转文字",
        icon: '/assets/icons/mic.svg',
        route: '/pages/speech2text'
      },
      {
        name: "系统信息",
        icon: '/assets/icons/system-info.svg',
        route: '/pages/system-info'
      },
      {
        name: "关于",
        icon: '/assets/icons/quickapp.svg',
        route: '/pages/about'
      }
    ]
  };