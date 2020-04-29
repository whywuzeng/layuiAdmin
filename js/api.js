layui.define(function (exports) {

    var HOSTAPI = "127.0.0.1:8081";

    var bossUrl = new REQUEST().BOSSURL;

    exports('api', {
        advertService: {
            all: bossUrl + '/advert/manager/all',
            add: bossUrl + '/advert/manager/add',
            delete: bossUrl + '/advert/manager/delete',
            remove: bossUrl + '/boss/SceneService/remove',
            update: bossUrl + '/boss/SceneService/update',
            enable: bossUrl + '/boss/SceneService/enable',
            disable: bossUrl + '/boss/SceneService/disable',
            displaySql: bossUrl + '/boss/SceneService/displaySql',
            listData: bossUrl + '/boss/SceneService/listData',
            getDetailData: bossUrl + '/boss/SceneService/getDetailData',
        },

    });

    /**
     * 根据环境获取请求地址
     * @constructor
     */
    function REQUEST() {
       this.BOSSURL = window.location.protocol + '//' + HOSTAPI ;
    }
});


