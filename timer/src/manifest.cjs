/**
 * StreamDock Plugin Template V1.2.1 说明文件 =>
 *
 *      1 => 开发环境支持热更新 => 修改代码无需重启服务器和软件 ( 修改图片/配置文件时需要重启 ) !
 *      2 => 自动打包到插件目录 => 使用 pnpm dev/build 即可自动打包到插件目录，无需手动复制删除。
 *      3 => 数据持久化驱动视图 => 通过 v-model 绑定 settings 的值即可实现双向绑定持久化数据回显啦 !
 *      4 => 完美集成 Navie UI 组件库 => 主题可调，无需穿透样式，有超过 90 个组件，希望能帮你少写点代码。
 *
 *      !! 注意事项 !! => 自动化含有许多约定配置 => 以下内容请务必认真填写 => 祝你开发愉快 _> </>
 *
 * =========== Kriac =================================================================================== 于 2024.03.30 更新 ===========>
 */

const Plugin = {
  UUID: 'timer',
  version: '2.0',
  Icon: 'images/icon.svg',
  i18n: {
    en: {
      Name: 'Timer',
      Description: 'This is an timer'
    },
    zh_CN: {
      Name: '计时器',
      Description: '这是一个计时器'
    }
  }
};

// 操作数组
const Actions = [
  {
    UUID: 'action1',
    Icon: 'images/icon.svg',
    i18n: {
      en: {
        Name: 'Timer',
        Tooltip: 'This is an timer'
      },
      zh_CN: {
        Name: '计时器',
        Tooltip: '这是一个计时器'
      }
    },
    state: 0,
    States: [
      {
        FontSize: '10',
        TitleAlignment: 'bottom',
        Image: 'images/default.png'
      }
    ],
    Settings: {
      select: '1',
      deep: 0
    },
    UserTitleEnabled: false,
    SupportedInMultiActions: false,
    Controllers: ['Keypad', 'Information']
  }
];

// !! 请勿修改 !!
module.exports = { PUUID: Plugin.UUID, Version: Plugin.version, CategoryIcon: Plugin.Icon, i18n: Plugin.i18n, Actions };
