import { defineConfig } from 'dumi';

const repo = 'knot-react'
export default defineConfig({
  outputPath: 'docs-dist',
  base: process.env.NODE_ENV === 'production' ? `/${repo}/` : '/',
  publicPath: process.env.NODE_ENV === 'production' ? `/${repo}/` : '/',
  themeConfig: {
    name: 'knot react',
    logo: process.env.NODE_ENV === 'production' ? `${repo}/logo.png` : 'logo.png', // 读取public文件夹
    nav: [
      { title: '指南', link: '/guide' },
      { title: '组件', link: '/components/hello' },
    ],
    socialLinks: {
      github: 'https://github.com/lh-js/lh-ui-react'
    },
    lastUpdated: true
  },
  apiParser: {},
  resolve: {
    // 配置入口文件路径，API 解析将从这里开始
    entryFile: './src/index.ts',
    atomDirs: [
      { type: 'components', dir: './src/components' },
    ]
  },
});
