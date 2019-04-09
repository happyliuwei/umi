import routes from './src/router'

export default {
  treeShaking: true,
  plugins: [
    ['umi-plugin-react', {
      antd: false,
      dva: true,
      dynamicImport: false,
      title: 'umi',
      dll: false,
      
      routes: {
        exclude: [
          /components\//,
        ],
      },
    }],
	],
	proxy: {
		'/map': {
			target: 'http://10.9.4.81:8080',
			changeOrigin: true
		}
	},
	...routes
}
