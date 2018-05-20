define(function(require, exports, module) {
    'use strict';

    var Util = require('util');
    var Collect = require('collect');
    var Services = require('services');

    /* mock data
   需要展示的内容：

    1.球员姓名

    2.球员头像

    3.球员所在球队的号码

    4.所在球队

    5.进球总数
    */
    var res = {
        data: [
            {
                name: '罗德里格斯',
                picUrl:'http://m3.vip.wpscdn.cn/storage/image/4/0/3/b/1/50d3467501a895903b112822bdcab613.jpg@base@tag=imgScale&cox=0&coy=0&w=150&h=98&q=100&c=1&m=2',
                number: 10,
                team:'哥伦比亚',
                goalCounts: '6'
            },
            {
                name: '罗德里格斯',
                picUrl:'http://m3.vip.wpscdn.cn/storage/image/4/0/3/b/1/50d3467501a895903b112822bdcab613.jpg@base@tag=imgScale&cox=0&coy=0&w=150&h=98&q=100&c=1&m=2',
                number: 10,
                team:'哥伦比亚',
                goalCounts: '6'
            },
            {
                name: '罗德里格斯',
                picUrl:'http://m3.vip.wpscdn.cn/storage/image/4/0/3/b/1/50d3467501a895903b112822bdcab613.jpg@base@tag=imgScale&cox=0&coy=0&w=150&h=98&q=100&c=1&m=2',
                number: 10,
                team:'哥伦比亚',
                goalCounts: '6'
            },
            {
                name: '罗德里格斯',
                picUrl:'http://m3.vip.wpscdn.cn/storage/image/4/0/3/b/1/50d3467501a895903b112822bdcab613.jpg@base@tag=imgScale&cox=0&coy=0&w=150&h=98&q=100&c=1&m=2',
                number: 10,
                team:'哥伦比亚',
                goalCounts: '6'
            },
            {
                name: '罗德里格斯',
                picUrl:'http://m3.vip.wpscdn.cn/storage/image/4/0/3/b/1/50d3467501a895903b112822bdcab613.jpg@base@tag=imgScale&cox=0&coy=0&w=150&h=98&q=100&c=1&m=2',
                number: 10,
                team:'哥伦比亚',
                goalCounts: '6'
            }
        ]
    };

    var shootersList = [];
    function initShooter() {
        if (!(res2.data instanceof Array)) {
            res.data = []; //容错处理:非数组重置为[]
        }
        res.data.forEach(function(val, i) {
            shootersList.push(val);
        });


    }

    //*********射手榜**********/
    var VM = avalon.define({
        $id: 'FIFAShooter',
        shootersList:shootersList,
        $skipArray: ['']
    });

    initShooter();

    return {};
});
