# 1. 웹표준이란?

* 웹표준 - 월드와이드웹(WWW) 구현하기 위해 따라야 할 표준 또는 규격. 특정 브라우저에서만 사용되는 비 표준화된 기술은 배제하고 W3C의 토론을 통해 나온 권고안(recomendation)을 사용하는 것

* 웹 접근성 - 모든 사용자가 신체적, 환경적 조건에 관계없이 웹에 접근하여 이용할 수 있도록 보장하는 것

# 2. html 작성 기초

* ### 태그 작성법
  * 태그명 대문자 사용 금지. 소문자로만 사용!
  * 태그는 항상 시작태그와 종료태그로 만든다.
  * 종료가 없는 태그는 종료 선언을 해도 되고, 안해도 된다.(html5 이상) 하지만 XHTML로 선언 되어있다면, 종료(/)를 선언해줘야 한다.
  * 태그의 속성을 정의할 때 시작태그에 정의해주고, 값은 ""(따옴표)로 감싸줘야 한다.

# 3. 문서형 선언, 언어 지정, 문자 코드 셋 지정하기

 ## html5
  * ### 문서형 선언
    ```html
    <!DOCTYPE html> <!-- html5 문서형 선언 -->
    <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd"><!-- html4.01 문서형 선언 -->
    <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.1//EN" "http://www.w3.org/TR/xhtml11/DTD/xhtml11.dtd"><!-- xhtml1.1 문서형 선언 -->
      ...
    ```

  * ### 언어 지정
    ```html
    <html lang="en"> <!-- html 언어 지정 -->
    <html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en"><!-- xhtml 언어 지정 -->
      ...
    </html>
    ```

  * ### 문자 코드 셋
    * title tag 보다 앞에 선언 해야 한다.
    ```html
    <html lang="en">
      <head>
        <meta charset="UTF-8"> <!-- html5 문자 코드 셋 -->
        <meta http-equiv="Content-Type" content="Text/html; charset=UTF-8"> <!-- html4.01 문자 코드 셋 -->
        <meta http-equiv="Content-Type" content="application/xhtml+xml; charset=UTF-8" /> <!-- xhtml1.1 문자 코드 셋 -->
      </head>
      ...
    </html>
    ```
  
# 4. meta요소 알아보기

* 문자 코드셋을 제외하고, 다른 meta 태그는 필수로 쓰지 않아도 된다.
```html
<html lang="en">
  <head>
    <meta name="keywords" content=""> <!-- 웹페이지에서 대표되는 단어들 -->
    <meta name="description" content=""> <!-- 문서에 대한 설명 -->
    <meta name="author" content=""> <!-- 저자 -->
    <meta name="generator" content=""> <!-- 웹페이지 프레임워크 정보 -->
    <meta name="robots" content="index,follow"> <!-- 검색엔진 허용 관련 -->
    <!-- 오픈 그래픽(카카오톡 같은거 메세지 보내면 뜨는 정보들) -->
    <meta name="og:title" content="페이지제목"> 
    <meta name="og:url" content="http://사이트주소/">
    <meta name="og:image" content="http://이미지경로">
    <meta name="og:type" content="website">
    <meta name="og:description" content="사이트 설명">
    <!-- 일정 시간 후, 다른페이지로 redirect하는 meta tag -->
    <meta http-equiv="refresh" content="시간; url=이동할 페이지 주소">
    <!-- 반응형 작업 -->
    <meta name="viewport" content="width=device-width,initial-scale=1.0">
  ...
</html>
```
# 5. html템플릿 작성하기
* 주석은 코드량이 많을 때, 찾기 편하기 위해서 하는 것
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="">
  <title>template</title>
</head>
<body>
  <p><a href="#content">본문바로가기</a></p>
  <div id="wrap">
    <!-- header -->
    <div id="header">

    </div>
    <!-- /header -->
    <!-- container -->
    <div id="container">
      <!-- content -->
      <div id="content">

      </div>
      <!-- /content -->
    </div>
    <!-- /container -->
    <!-- footer -->
    <div id="footer">

    </div>
    <!-- /footer -->
  </div>
</body>
</html>
```