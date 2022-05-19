<<<<<<< HEAD
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';



const KakaoRedirectHandler = () => {
  const code = new URL(window.location.href).searchParams.get("code");
  const history = useNavigate()
  useEffect(()=> {
=======
import React, { useEffect, useHistory } from "react";
import axios from "axios";

const KakaoRedirectHandler = () => {
  const code = new URL(window.location.href).searchParams.get("code");
  const history = useHistory();
  useEffect(() => {
>>>>>>> fc64cb463d4b358aa5bd68bbced3d7d30d901e22
    let params = new URL(document.location.toString()).searchParams;
    let code = params.get("code"); // 인가코드 받는 부분
    let grant_type = "authorization_code";
    let client_id = "a879c6361070a85ff535c43fddfd2bba";

    axios
      .post(
        `https://kauth.kakao.com/oauth/token?
        grant_type=${grant_type}
        &client_id=${client_id}
<<<<<<< HEAD
        &redirect_uri=http://ec2-3-39-231-239.ap-northeast-2.compute.amazonaws.com/oauth/callback/kakao
        &code=${code}`
        , 
=======
        &redirect_uri=http://ec2-43-200-8-0.ap-northeast-2.compute.amazonaws.com/oauth/callback/kakao
        &code=${code}`,
>>>>>>> fc64cb463d4b358aa5bd68bbced3d7d30d901e22
        {
          headers: {
            "Content-type": "application/x-www-form-urlencoded;charset=utf-8",
          },
        }
      )
      .then((res) => {
        console.log(res);
        history.replace("/KakaoMypage");
        // res에 포함된 토큰 받아서 원하는 로직을 하면된다.
      });
  }, []);

  return { code };
};

export default KakaoRedirectHandler;
