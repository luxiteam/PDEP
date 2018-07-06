<template>
    <div>
        <el-col :span='12' class='pagination-message'>
            <p>总计<span>{{totalRow}}</span>条</p>
        </el-col>
        <el-col :span='10' class='pagination-number'>
            <el-pagination layout="prev, pager, next" @current-change='doSomething' :page-size="5" :total="totalRow" :current-page="currentpage">
            </el-pagination>
        </el-col>
        <el-col :span='2' class='totalpageNumber'>
            <p>共<span>{{totalpageNumber}}</span>页</p>
        </el-col>
    </div>
</template>
 
<script>
    export default {
        data() {
            return {
                totalpageNumber: 0, //表格总页数
                totalRow: 0, //表格内容总条数
                currentpage: 1 //表格分页当前页数
            };
        },
        methods: {
            doSomething(){}
        }
    };
</script>
 
<style lang="postcss">
    .pagination-message {
        p {
            padding: 20px;
            color: #838383;
            margin: auto 0px;
        }
    }
    
    .totalpageNumber {
        padding: 25px;
        color: #949494;
    }
    
    .pagination-number {
        padding: 20px;
        text-align: right;
    }
</style>
 
