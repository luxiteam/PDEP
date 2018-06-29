<template>
  <div class="container demo-1">
    <div class="content">
      <div id="large-header" class="large-header">
        <canvas id="demo-canvas"></canvas>
        <div class="logo_box">
          <h3>数据交换平台</h3>
          <form action="#" name="f" method="post" id='form'>
            <div class="input_outer">
              <span class="u_user"></span>
              <input name="account" class="text" id='user' style="color: #FFFFFF !important" type="text" placeholder="请输入账户" />
            </div>
            <div class="input_outer">
              <span class="us_uer"></span>
              <input name="password" class="text" id='password' style="color: #FFFFFF !important; position:absolute; z-index:100;" value="" type="password" placeholder="请输入密码" />
            </div>
            <div class="mb2"><a class="act-but submit" href="javascript:;" style="color: #FFFFFF">登录</a></div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Base64 from "base-64";
  export default {
    mounted() {
      let $scope = this;
      $(function() {
        $(".submit").on("click", function() {
          sub();
        });
        $("#password").on("keydown", function(e) {
          if (e.keyCode == 13) {
            sub();
          }
        });
      });
  
      function sub() {
        var user = $("#user").val();
        if ($("#password").val()) {
          var basepassword = Base64.encode($("#password").val(), "base64");
          basepassword = Base64.encode(basepassword, "base64");
        }
  
        $.ajax({
          url: "http://59.202.28.203/PDE/login?account=" +
            user +
            "&password=" +
            basepassword,
          type: "get",
          crossDomain: true,
          xhrFields: {
            withCredentials: true
          },
          error: function() {},
          success: function(res) {
            if (res.data.has == 1) {
              // $scope.$router.push("/");
              console.log(res.data);
              $scope.account = res.data.account;
              $scope.username = res.data.username;
            }
          }
        });
      }
    },
    data() {
      return {
        account: "",
        username: ""
      };
    }
  };
</script>

<style lang="postcss">
  /* Header */
  
  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active {
    -webkit-transition-delay: 99999s;
    -webkit-transition: color 99999s ease-out, background-color 99999s ease-out;
  }
  
  .demo-1 {
    position: fixed;
    width: 100%;
    height: 100%;
  }
  
  .large-header {
    position: absolute;
    width: 100%;
    height: 100%;
    background: #333;
    overflow: hidden;
    background-size: cover;
    background-position: center center;
    z-index: 1;
  }
  
  .demo-1 .large-header {
    background-image: url("~/assets/demo-1-bg.jpg");
  }
  
  .logo_box {
    width: 400px;
    height: 500px;
    padding: 35px;
    color: #eee;
    position: absolute;
    left: 50%;
    top: 50%;
    margin-left: -200px;
    margin-top: -250px;
  }
  
  .logo_box h3 {
    text-align: center;
    height: 20px;
    font: 20px "microsoft yahei", Helvetica, Tahoma, Arial, "Microsoft jhengHei", sans-serif;
    color: #ffffff;
    height: 20px;
    line-height: 20px;
    padding: 0 0 35px 0;
  }
  
  .forms {
    width: 280px;
    height: 485px;
  }
  
  .logon_inof {
    width: 100%;
    min-height: 450px;
    padding-top: 35px;
    position: relative;
  }
  
  .input_outer {
    height: 46px;
    padding: 0 5px;
    margin-bottom: 30px;
    border-radius: 50px;
    position: relative;
    border: rgba(255, 255, 255, 0.2) 2px solid !important;
  }
  
  .u_user {
    width: 25px;
    height: 25px;
    background: url("~/assets/login_ico.png");
    background-position: -125px 0;
    position: absolute;
    margin: 10px 13px;
  }
  
  .us_uer {
    width: 25px;
    height: 25px;
    background-image: url("~/assets/login_ico.png");
    background-position: -125px -34px;
    position: absolute;
    margin: 10px 13px;
  }
  
  .l-login {
    position: absolute;
    z-index: 1;
    left: 50px;
    top: 0;
    height: 46px;
    font: 14px "microsoft yahei", Helvetica, Tahoma, Arial, "Microsoft jhengHei";
    line-height: 46px;
  }
  
  .text {
    width: 220px;
    height: 46px;
    outline: none;
    display: inline-block;
    font: 14px "microsoft yahei", Helvetica, Tahoma, Arial, "Microsoft jhengHei";
    margin-left: 50px;
    border: none;
    background: none;
    line-height: 46px;
    & input {
      border: none;
      background: none;
      color: #fff;
      padding: 0;
    }
  }
  
  
  /*///*/
  
  .mb2 {
    margin-bottom: 20px;
  }
  
  .mb2 a {
    text-decoration: none;
    outline: none;
  }
  
  .submit {
    padding: 15px;
    margin-top: 20px;
    display: block;
  }
  
  .act-but {
    line-height: 20px;
    text-align: center;
    font-size: 20px;
    border-radius: 50px;
    background: #0096e6;
  }
</style>
