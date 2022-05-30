const bannerRouter = {
  route: null,
  name: null,
  title: 'Banner-test',
  type: 'folder',
  icon: 'el-icon-postcard',
  filePath: 'view/banner-test/',
  order: null,
  inNav: true,
  children: [
    {
      title: 'banner列表',
      type: 'view',
      name: 'bannerList',
      route: '/banner-test/list',
      filePath: 'view/banner-test/banner-list.vue',
      inNav: true,
      icon: '',
    },
    {
      title: '创建banner',
      type: 'view',
      name: 'bannerAdd',
      route: '/banner-test/add',
      filePath: 'view/banner-test/banner-add.vue',
      inNav: true,
      icon: '',
    },
  ],
}

export default bannerRouter
