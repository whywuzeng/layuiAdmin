layui.define(function (exports) {

    var HOSTAPI = "127.0.0.1:8081";

    var bossUrl = new REQUEST().BOSSURL;

    exports('api', {
        advertService: {
            all: bossUrl + '/advert/manager/all',
            add: bossUrl + '/advert/manager/add',
            delete: bossUrl + '/advert/manager/delete',
            update: bossUrl + '/advert/manager/update',

            enable: bossUrl + '/boss/SceneService/enable',
            disable: bossUrl + '/boss/SceneService/disable',
            displaySql: bossUrl + '/boss/SceneService/displaySql',
            listData: bossUrl + '/boss/SceneService/listData',
            getDetailData: bossUrl + '/boss/SceneService/getDetailData',
        },
        advertDetail:{
            all: bossUrl + '/advert/all',
            add: bossUrl + '/advert/add',
            delete: bossUrl + '/advert/delete',
            update: bossUrl + '/advert/update',
            upload: bossUrl + '/advert/image',
        },
        //线索管理
        trackmanager:{
            all: bossUrl + '/track/manager/all',
            add: bossUrl + '/track/manager/add',
            delete: bossUrl + '/track/manager/delete',
            update: bossUrl + '/track/manager/update',
        },
        //校区管理
        schoolmanager:{
            all: bossUrl + '/school/all',
            add: bossUrl + '/school/add',
            delete: bossUrl + '/school/delete',
            update: bossUrl + '/school/update',
        }
    });

    /**
     * 根据环境获取请求地址
     * @constructor
     */
    function REQUEST() {
       this.BOSSURL = window.location.protocol + '//' + HOSTAPI ;
    }
});


