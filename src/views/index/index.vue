<template>
    <div id="root" style="width: 100%; height: 100%;">
        <div id="container">
            <div id="title"></div>
            <div id="eventbtn"></div>
            <div id="rulebanner"></div>
            <div id="taskcontainer" class="taskContainer">
                <div id="taskInnerContainer">
                    <u-linear-layout direction="vertical" gap="mini">
                        <div class="taskWrapper">
                            <u-grid-layout>
                                <u-grid-layout-row :repeat="12" alignment="center">
                                    <u-grid-layout-column :span="1">
                                        <u-image :src="n4_image" style="width: 20px;display: block;" fit="contain"></u-image>
                                    </u-grid-layout-column>
                                    <u-grid-layout-column :span="6">
                                        <span>每日登录本活动页面</span>
                                    </u-grid-layout-column>
                                    <u-grid-layout-column :span="2">
                                        <span>（0/1）</span>
                                    </u-grid-layout-column>
                                    <u-grid-layout-column :span="3">
                                        <u-image :src="n5_image" style="max-width: 70px;display: block;" fit="contain"></u-image>
                                    </u-grid-layout-column>
                                </u-grid-layout-row>
                            </u-grid-layout>
                        </div>
                        <div class="taskWrapper">
                            <u-grid-layout>
                                <u-grid-layout-row :repeat="12" alignment="center">
                                    <u-grid-layout-column :span="1">
                                        <u-image :src="n4_image" style="width: 20px;display: block;" fit="contain"></u-image>
                                    </u-grid-layout-column>
                                    <u-grid-layout-column :span="6">
                                        <span>下载任意一款Mu酱的春日心选游戏</span>
                                    </u-grid-layout-column>
                                    <u-grid-layout-column :span="2">
                                        <span>（0/1）</span>
                                    </u-grid-layout-column>
                                    <u-grid-layout-column :span="3">
                                        <u-image :src="n5_image" style="max-width: 70px;display: block;" fit="contain"></u-image>
                                    </u-grid-layout-column>
                                </u-grid-layout-row>
                            </u-grid-layout>
                        </div>
                        <div class="taskWrapper">
                            <u-grid-layout>
                                <u-grid-layout-row :repeat="12" alignment="center">
                                    <u-grid-layout-column :span="1">
                                        <u-image :src="n4_image" style="width: 20px;display: block;" fit="contain"></u-image>
                                    </u-grid-layout-column>
                                    <u-grid-layout-column :span="6">
                                        <span>每日登录Mu酱的春日心选游戏</span>
                                    </u-grid-layout-column>
                                    <u-grid-layout-column :span="2">
                                        <span>（0/1）</span>
                                    </u-grid-layout-column>
                                    <u-grid-layout-column :span="3">
                                        <u-image :src="n5_image" style="max-width: 70px;display: block;" fit="contain"></u-image>
                                    </u-grid-layout-column>
                                </u-grid-layout-row>
                            </u-grid-layout>
                        </div>
                        <div class="taskWrapper">
                            <u-grid-layout>
                                <u-grid-layout-row :repeat="12" alignment="center">
                                    <u-grid-layout-column :span="1">
                                        <u-image :src="n4_image" style="width: 20px;display: block;" fit="contain"></u-image>
                                    </u-grid-layout-column>
                                    <u-grid-layout-column :span="6">
                                        <span>分享活动给好友助力</span>
                                    </u-grid-layout-column>
                                    <u-grid-layout-column :span="2">
                                        <span>（0/1）</span>
                                    </u-grid-layout-column>
                                    <u-grid-layout-column :span="3">
                                        <u-image :src="n5_image" style="max-width: 70px;display: block;" fit="contain"></u-image>
                                    </u-grid-layout-column>
                                </u-grid-layout-row>
                            </u-grid-layout>
                        </div>
                        <div class="taskWrapper">
                            <u-grid-layout>
                                <u-grid-layout-row :repeat="12" alignment="center">
                                    <u-grid-layout-column :span="1">
                                        <u-image :src="n4_image" style="width: 20px;display: block;" fit="contain"></u-image>
                                    </u-grid-layout-column>
                                    <u-grid-layout-column :span="6">
                                        <span>MuMu服游戏内消费任意金额</span>
                                    </u-grid-layout-column>
                                    <u-grid-layout-column :span="2">
                                        <span>（0/1）</span>
                                    </u-grid-layout-column>
                                    <u-grid-layout-column :span="3">
                                        <u-image :src="n5_image" style="max-width: 70px;display: block;" fit="contain"></u-image>
                                    </u-grid-layout-column>
                                </u-grid-layout-row>
                            </u-grid-layout>
                        </div>
                    </u-linear-layout>
                </div>
            </div>
            <div id="infocontainer">
                <u-linear-layout direction="vertical" gap="mini" style="padding: 5px;margin: 0;">
                    <u-text>花材有限～每天只能制作1款插花作品，同一款作品每天最多可以找Mu酱兑换2次谢礼！</u-text>
                </u-linear-layout>
                <u-image id="n6" :src="n6_image" fit="contain"></u-image>
                <u-image id="n11_a" :src="n11_image" fit="contain"></u-image>

                <u-image id="n7" :src="n7_image" fit="contain"></u-image>
                <u-image id="n11_b" :src="n11_image" fit="contain"></u-image>
                <div id="n10">
                    <u-grid-layout gap="small" style="position: absolute;bottom: 0px;">
                        <u-grid-layout-row gap="small" :repeat="12" alignment="center">
                            <u-grid-layout-column :span="4">
                                <u-image :src="n12_image" style="width: 100%;display: block;" fit="contain"></u-image>
                            </u-grid-layout-column>
                            <u-grid-layout-column :span="4">
                                <u-image :src="n12_image" style="width: 100%;display: block;" fit="contain"></u-image>
                            </u-grid-layout-column>
                            <u-grid-layout-column :span="4">
                                <u-image :src="n12_image" style="width: 100%;display: block;" fit="contain"></u-image>
                            </u-grid-layout-column>
                        </u-grid-layout-row>
                    </u-grid-layout>
                </div>
                <div id="n9">
                    <u-grid-layout gap="small" style="position: absolute;bottom: 0px;">
                        <u-grid-layout-row gap="small" :repeat="12" alignment="center">
                            <u-grid-layout-column :span="4">
                                <u-image :src="n12_image" style="width: 100%;display: block;" fit="contain"></u-image>
                            </u-grid-layout-column>
                            <u-grid-layout-column :span="4">
                                <u-image :src="n12_image" style="width: 100%;display: block;" fit="contain"></u-image>
                            </u-grid-layout-column>
                            <u-grid-layout-column :span="4">
                                <u-image :src="n12_image" style="width: 100%;display: block;" fit="contain"></u-image>
                            </u-grid-layout-column>
                        </u-grid-layout-row>

                        <u-grid-layout-row :repeat="12" alignment="center">
                            <u-grid-layout-column :span="4">
                                <u-image :src="n12_image" style="width: 100%;display: block;" fit="contain"></u-image>
                            </u-grid-layout-column>
                            <u-grid-layout-column :span="4">
                                <u-image :src="n12_image" style="width: 100%;display: block;" fit="contain"></u-image>
                            </u-grid-layout-column>
                            <u-grid-layout-column :span="4">
                                <u-image :src="n12_image" style="width: 100%;display: block;" fit="contain"></u-image>
                            </u-grid-layout-column>
                        </u-grid-layout-row>
                    </u-grid-layout>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import AutoLayout from '@lume/autolayout';
import { autoLayout } from './index';
const n4_image = require('../../assets/images/image00004.png');
const n5_image = require('../../assets/images/image00005.png');
const n6_image = require('../../assets/images/image00006.png');
const n7_image = require('../../assets/images/image00007.png');
const n11_image = require('../../assets/images/image00011.png');

const n12_image = require('../../assets/images/image00012.png');
console.log(n12_image)
export default {
    data() {
        return {
            n4_image,
            n5_image,
            n6_image,
            n7_image,
            n11_image,
            n12_image
        };
    },
    meta: {
        title: "首页",
        crumb: undefined,
        first: undefined,
        auth: undefined,
    },
    mounted() {
        const root = document.getElementById('root');
        const container = document.getElementById('container');
        const taskContainer = document.getElementById('taskcontainer');
        const infocontainer = document.getElementById('infocontainer');
        autoLayout(root, [
            'H:|[container]|',
            'V:|[container(container.width*0.781)]'
        ]);
        autoLayout(container, [
            'H:|-20%-[title(50%)]',
            'V:|-5.5%-[title(title.width*0.176)]',
            'H:[eventbtn(14%)]-7%-|',
            'V:|-4%-[eventbtn(eventbtn.width*0.355)]',
            'H:|-8%-[rulebanner(41%)]-[infocontainer(rulebanner.width)]',
            'H:|-8%-[taskcontainer(rulebanner.width)]',
            'V:|-19%-[rulebanner(rulebanner.width*0.333)][taskcontainer(taskcontainer.width*0.893)]',
            'V:|-19%-[infocontainer(infocontainer.width*1.27)]'
        ]);

        autoLayout(taskContainer, [
            'H:|-8%-[taskInnerContainer]-4%-|',
            'V:|-15%-[taskInnerContainer]-|'
        ]);

        autoLayout(infocontainer, [
            'H:|-10-[n11_a(19.7%)]',
            'H:[n10(65%)]-10-|',
            'C:n6.centerX(n11_a.centerX)',
            'C:n7.centerX(n11_a.centerX)',
            'C:n11_b.centerX(n11_a.centerX)',
            'C:n6.width(n11_a.width/1.6)',
            'C:n7.width(n6.width)',
            'C:n11_b.width(n11_a.width)',
            'C:n10.height(n10.width*0.549)',
            'C:n9.centerX(n10.centerX)',
            'C:n9.width(n10.width)',
            'C:n9.height(n9.width*0.886)',
            'V:|-25%-[n6(n6.width*1.84)]-(-4%)-[n11_a(n11_a.width*0.337)]',
            'V:|-74%-[n7(n7.width*1.84)]-(-4%)-[n11_b(n11_b.width*0.337)]',
            'V:|-15%-[n10]-[n9]',
            'C:c1.width(n10.width)',
            'C:c1.height(n10.height*0.6)',
            'C:c1.centerX(n10.centerX)',
            'C:c1.centerY(n10.centerY)',
        ])
        
    },
    methods: {},
};
</script>

<style>
.abs{
    position: absolute;
    left: 0;
    top: 0;
}
#container {
    background: no-repeat url(../../assets/images/image00001.jpg);
    background-position: top center;
    background-size: 100% auto;
    position: relative;
}
#title {
    background: no-repeat url(../../assets/images/image00002.png);
    background-position: top center;
    background-size: 100% auto;
}
#eventbtn {
    background: no-repeat url(../../assets/images/image00020.png);
    background-position: top center;
    background-size: 100% auto;
}
#rulebanner {
    background: no-repeat url(../../assets/images/image00003.png);
    background-position: top center;
    background-size: 100% auto;
}
#taskcontainer {
    background: no-repeat url(../../assets/images/image00008.png);
    background-position: top center;
    background-size: 100% auto;
}
#taskInnerContainer{
    overflow: scroll;
}
#infocontainer{
    border: 5px solid rgb(218, 174, 155);
    border-radius: 10px;
    background-color: rgb(252, 247, 234);
}
#n10 {
    background: no-repeat url(../../assets/images/image00010.jpg);
    background-position: top center;
    background-size: 100% auto;
}
#n9 {
    background: no-repeat url(../../assets/images/image00009.jpg);
    background-position: top center;
    background-size: 100% auto;
}

.taskWrapper{
    border-radius: 10px;
    border-color: rgb(218, 174, 155);
    border-width: 2px;
    border-style: solid;
    background-color: rgb(252, 247, 234);
    padding: 4px 6px;
}

</style>