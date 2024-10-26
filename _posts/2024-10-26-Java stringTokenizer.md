---
title: "Java stringTokenizer"
author: chunbae
date: 2024-10-26 00:00:00 +0900
categories: [Java, Class]
tags: [java, class, stringTokenizer]
render_with_liquid: falses
---

## StringTokenizer 클래스

문자열을 구분자로 이용하여 분리할 때 사용하는 클래스

디폴트 구획문자로 `공백문자(\t, \n, \r, \f)`를 가진다.

<br>

## StringTokenizer 생성자

StringTokenizer 생성자는 최대 세 가지 인자를 받는다.

```java
StringTokenizer st = new StringTokenizer(문자열, 구분자, Token에 구분자 포함여부);
```

<br>

### 1. 문자열

말 그대로 조작을 원하는 문자열을 넣으면 된다. 아래는 예시이다

```java
StringTokenizer st = new StringTokenizer(br.readLine());
```

<br>

### 2. 구분자

문자열을 분리할 기준이다. 디폴트 값은 `공백문자(\t, \n, \r, \f)`를 가진다.

```java
String input = "에잉,쯧쯧쯧,하여간,젊은것들이란";
StringTokenizer st = new StringTokenizer(input, ",");
while(!st.hasMoreTokens()) {
	System.out.println(st.nextToken());
}

/*
Output
에잉
쯧쯧쯧
하여간
젊은것들이란
*/
```

<br>

### 3. Token에 구분자 포함여부

`2. 구분자` 예제를 보면 구분자인 `쉼표(,)`는 출력이 되고 있지 않는 것을 볼 수 있다.
<br>
만약 구분자도 출력하고프다면, 세 번째 인자 값에 `true`를 넣어주면 된다.

```java
String input = "에잉,쯧쯧쯧,하여간,젊은것들이란";
StringTokenizer st = new StringTokenizer(input, ",", true);
while(!st.hasMoreTokens()) {
	System.out.println(st.nextToken());
}

/*
Output
에잉
,
쯧쯧쯧
,
하여간
,
젊은것들이란
*/
```

<br>

## StringTokenizer 메서드

### countTokens()

토큰의 개수를 반환한다.

<br>

### hasMoreTokens()

남아있는 토큰이 있으면 `true`를 , 더 이상 토큰이 없으면 `false`를 리턴한다.
<br>
구분자로 분리한 문자열을 출력하고 싶을 때 많이 사용되며, 사용법은 `2. 구분자`에서 확인할 수 있다.

<br>

### nextToken()

다음 토큰을 반환한다. 이 때, **이전 토큰은 제거된다.**

```java
String input = "에잉,쯧쯧쯧,하여간,젊은것들이란";
StringTokenizer st = new StringTokenizer(input, ",");
for (int i = 0; i < st.countTokens(); i++) {
	System.out.println(st.nextToken());
}

/*
Output
에잉
쯧쯧쯧
*/
```

구분자로 구분한 문자열을 출력하려는 위 코드는 `nextToken()` 사용 시 이전 토큰이 제거된다는 사실을 고려하지 않은 코드로, 아래와 같이 수정해야 한다.

```java
String input = "에잉,쯧쯧쯧,하여간,젊은것들이란";
StringTokenizer st = new StringTokenizer(input, ",");
int count = st.countTokens();
for (int i = 0; i < count ; i++) {
	System.out.println(st.nextToken());
}

// 혹은

while (st.hasMoreTokens()) {
	System.out.println(st.nextToken());
}

/*
Output
에잉
쯧쯧쯧
하여간
젊은것들이란
*/
```

<br>

### hasMoreElements

`hasMoreTokens`와 동일하나, 엘리먼트보다 토큰으로 된 메서드를 주로 사용한다.

<br>

### nextElement()

`nextToken`와 동일하지만, 문자열이 아닌 객체를 반환한다.

<br>

## 출처

- [[Java] StringTokenizer 사용법과 주요 메소드](https://da2uns2.tistory.com/entry/Java-StringTokenizer-%EC%82%AC%EC%9A%A9%EB%B2%95%EA%B3%BC-%EC%A3%BC%EC%9A%94-%EB%A9%94%EC%86%8C%EB%93%9C)	
- [[Java] StringTokenizer 문자열 분리하기 (split과 차이는 뭘까?)](https://dev-coco.tistory.com/94)