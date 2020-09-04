<template>
	<div class="main">
		<div class="menu-top">
			<div class="logo fl tc fb">bms</div>
		</div>
		<div class="content clearfix" :style="{height: contentH + 'px'}">
			<div class="menu-left fl">
				<el-menu router :default-active="$route.path" :default-openeds="['0']">
			      	<menuTree :menuData="menu"></menuTree>
			    </el-menu>
			</div>
			<div class="content-right fr">
				<router-view></router-view>
			</div>
		</div>
	</div>
</template>

<script>
	import menuTree from '@/views/layout/menuTree';

	export default {
		components: {
			menuTree
		},
		data() {
			return {
				menu: [
                    {
                        "name": "组件",
                        "subMenu": [
                            {
                                "name": "主页",
                                "href": "/home"
                            }
                        ]
                    }
                ],
                contentH: 0
			}
        },
        mounted() {
			this.getContentH();
			window.onresize = () => {
				this.getContentH();
			};
        },
        methods: {
            getContentH(){
		    	let wh = window.innerHeight;
				this.contentH = wh - 61;
		    }
        }
    }
</script>

<style lang="scss" scoped>
    .main {
        width: 1200px;
        margin: 0 auto;
    }
    .menu-top{
        height: 60px;
        line-height: 60px;
        font-size: 25px;
        color: #1989fa;
        border-bottom: 1px #ccc solid;        
    }
    .content{
        height: calc(100% - 60px);
    }

    .menu-left{
        width: 219px;
        height: 100%;
        overflow: auto;

        .top{
            height: 150px;
        }

        .top-img{
            width: 80px;
            height: 80px;
            border-radius: 100%;
            box-shadow: 0 0 10px 5px #ccc;
        }

        .el-menu{
            border: 0;
            /deep/ .el-submenu__title {
                font-size: 16px;
                font-weight: bold;
            }
        }
    }

    .content-right{
        width: calc(100% - 220px);
        height: 100%;
        overflow: auto;
    }
</style>