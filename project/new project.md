자바스크립트 예제 풀이
=============

<예제1><br />
배열 삭제 코드 나타내기
-------------
**배열 [100, 200, 300, 400, 500]에서 400,500를 삭제하는 코드 나타내기**
<pre>
<code>
데이터

var nums = [100,200,300,400,500];
nums.splice (3,2);
console.log(nums);

출력
[100,200,300]

</code>
</pre>



* splice() 메서드는 배열에서 요소를 추가하거나 삭제하는데에 사용합니다
<br />
**첫번째 인자 : 삭제할 요소의 시작 인덱스** 
**두번째 인자 : 삭제할 요소의 개수** 
**(선택) 세번째 이후 인자: 삭제된 자리에 추가할 요소들** 
<br  />

* 코드 설명 :
**splice (3,2)** 
‘3’은 삭제할 인덱스 num 배열에서 인덱스 3은 400이다
‘2’은 삭제할 요소의 개수로 주어진 보기에서 400과 500 두 개의 요소를 삭제함
<br />

    배열 [100, 200, 300, 400, 500]에서 인덱스 3부터 두 개의 요소를 삭제한 출력값은 [100,200,300]입니다

<br />
<br />
<br />
<br />

***

<예제2><br />
배열 내장함수를 이용하여 코드를 입력 후 출력하기
-------------
**<pass>부분에 배열 내장함수를 이용하여 코드를 입력하고 다음과 같이 출력되게 하세요.**


<pre>
<code>
데이터 
Var arr = [200,100,300]
//pass
Console.log (arr);

출력
[200,100,10000,300]
</code>
</pre>


<pre>
<code>
작성코드

var arr = [100,200,300];
arr.splice(2,0,1000) // 인덱스 2 위치에 10000을 삽입
console.log(arr)
</code>
</pre>

* 코드 설명 :

   **Splice (2,0,10000)**
    ‘2’는 삽입할 위치의 인덱스 , 100뒤인 인덱스 2에 삽입
    ‘0’은 삭제할 요소가 없다는 의미 
    ‘1000’ 은 배열에 추가할 요소 300 앞에 1000을 삽입함

Splice ()는 배열의 특정위치에 값을 추가하거나 삭제할 수 있는 메서드로 10000을 배열의 인덱스 2 위치에 삽입하여 결과를 얻었습니다


<br />
<br />
<br />
<br />

***


<예제3><br />
typeof -데이터 타입 확인하기
-------------
**다음 코드의 출력값은?**
<pre>
<code>
데이터 

var arr = [100,200,300];
console.log(typeof(arr))
</code>
</pre>


typeof는 자바스크립트에서 데이터 타입을 확인하는 연산자입니다
따라서 출력은  **Object** 입니다


<br />
<br />
<br />
<br />
<br />

***



<예제4><br />
typeof -데이터 타입 확인하기(2)
-------------
**변수 a 를 typeof(a)로 넣었을때 출력 될 값?**

입력: a=1 ,
출력 : number 


입력: a=2.22 
출력 : number 


입력: a=‘p’ 
출력 : string 


입력: a=[1,2,3]
출력 : object

typeof는 자바스크립트에서 데이터 타입을 확인하는 연산자입니다

<br />
<br />
<br />
<br />

***



<예제5><br />
for  반복문 사용으로 계산하기
-------------
**다음 코드의 출력값은??**

<pre>
<code>
데이터

var a =10;
var b =2;

for (var i = 1; i < 5; i += 2 ){
    a += i;
}
console.log(a+b)
</code>
</pre>


*코드설명:
**1. 초기값 설정**
    a = 10
 	b = 2

**2. For 반복문 사용**
<pre>
<code>


for (begin; condition; step)
// condition이 truthy이면 → body를 실행한 후, step을 실행함
</code>
</pre>

초기값 i = 1
조건 i < 5
증가값 i += 2 // i는 1부터 시작해서 3, 5, …로 증가합니다



<br  />

*첫 번째 반복 (i = 1):
a += i → a = 10 + 1 = 11


*두 번째 반복 (i = 3):
a += i → a = 11 + 3 = 14

이제 i가 5가 되어 i < 5 조건을 만족하지 않으므로 반복문 종료.


Console.log (a+b) a+b의 계산 값을 나타냅니다 

a=14
b=2

a+b =14+2 = 16

**따라서 출력값 16**

<br />
<br />
<br />
<br />

***
<예제6><br />
자바스크립트문법에서 False 와 True
-------------
**다음 코드를 실행 했을때 출력되는 값은??**
<pre>
<code>


console.log(Boolean(NaN)); // false 
console.log(Boolean(1)); // true 
console.log(Boolean("")); // false 
console.log(Boolean(0)); // false 
console.log(Boolean(undefined)); // false
</code>
</pre>

*설명:
**1.Boolean(NaN)**
NaN은 Not a Number 를 의미하며, 자바스크립트 에서 Falsy값입니다

Boolean(NaN)은 false를 반환합니다

**출력 : false**

<br  />

**2.Boolean (1)**
1은 truthy 값입니다 어떤 값이 숫자 0이 아닌 한 , 숫자는 모두 true로 나타나게됩니다

**출력 : true**

<br  />

**3.Boolean(“”)**
빈 문자열 “”은 Falsy 값입니다

**출력: False**

<br  />

**4.Boolean(0)**
숫자 0은 Falsy 값입니다
**출력 :False**
<br  />
**5.Boolean (undefined)**
Undefined는 Flasy값입니다
**출력 : False**
<br  />


<br  />
<br  />
<br  />

***

<예제7><br />
자바스크립트문법에서 변수명의 규칙
-------------
**자바스크립트문법에서 변수명의 규칙**
<pre>
<code>


1. 변수명은 **알파벳, 숫자, 밑줄(_), 달러 기호($)**를 포함할 수 있습니다.
2. 변수명은 숫자로 시작할 수 없습니다.
3. 변수명은 예약어(예: let, var, function, if 등)을 사용할 수 없습니다.
</code>
</pre>

<br  />
<br  />
<br  />

***

<예제7><br />
Concat 을 활용하기
-------------
**다음 소스코드를 완성하여 날짜와 시간을 출력하시오**

<pre>
<code>


데이터
var year ='2025';
var month ='01';
var day ='26';
var hour ='11';
var minute ='25';
var second ='38';

var result=year.concat('-',month,'-',day,' ',hour,':',minute,':',second);
console.log(result);


출력
2025/01/26 11:25:38

</code>
</pre>

설명 :

**concat() 메서드는 주로 배열이나 문자열을 결합하는 데 사용됩니다.**

concat() 메서드를 사용하여 각 변수들을 이어붙였습니다.

year, month, day는 "/"로 구분하고, hour, minute, second는 ":"로 구분하여 최종적으로 원하는 날짜 및 시간 형식을 만들었습니다.

year.concat('/', month, '/', day, ' ', hour, ':', minute, ':', second)가 날짜와 시간을 올바르게 이어붙여서 **출력값 2025/01/26 11:25:38**을 얻습니다.



<br />
<br />
<br />

***

<예제7><br />
별찍기 for 반복문 사용
-------------
**5줄 짜리의 별 피라미드를 완성하세요.**

<pre>
<code>


var n = 5; //피라미드의 높이 5줄

for ( var i = 1; i <= n; i++ ){
    var spaces = ' '.repeat(n - i);  //공백을 생성  (줄 번호에 따라 공백이 점덤 줄어듬 )
    var star = '*'.repeat(2 * i -1); // 별의 개수는 2*i-1(1,3,5,7,9 …)
console.log (spaces + star)//공백과 별을 결합하여 출력
}



출력

    *
   ***
  *****
 *******
*********


</code>
</pre>

* 코드설명 :
  
1. n = 5 : 피라미드의 높이는5줄입니다
2. For 반복문 : i는 1부터 n 까지 반복됩니다 . 각 줄마다 별을 출력합니다


3. Spaces = ‘  ‘.repaeat (n- i) : 각 줄마다 왼쪽에 공백을 추가합니다. 
첫번째줄은 4개의 공백 ,
두번째줄은 3개의 공백,
세번째 줄은 2개의 공백을 추가합니다



4. Star = ‘8’.repeat(2* i -1 ) 각 줄마다 출력할 별의 개수를 계산합니다. 
첫번째줄은 1개,
두번째줄은 3개,
세번째줄은 5개 홀수개의 별을 출력합니다


* 첫 번째 줄: n - 1 = 4개의 공백과 1개의 별 *이 출력됩니다
* 두 번째 줄: n - 2 = 3개의 공백과 3개의 별 ***이 출력됩니다
* 세 번째 줄: n - 3 = 2개의 공백과 5개의 별 *****이 출력됩니다
* 네 번째 줄: n - 4 = 1개의 공백과 7개의 별 *******이 출력됩니다
* 다섯 번째 줄: n - 5 = 0개의 공백과 9개의 별 *********이 출력됩니다


주어진 n값에 따라 피라미드 모양으로 출력하며, 각 줄마다 공백의 수는 점점 줄어들고,
별의 수는 홀수로 증가합니다.
<br />
<br />
<br />


***

<예제8><br />
1부터 100까지의 합
-------------
**1부터 100까지의 합을 완성하세요.**


<pre>
<code>
let total = 0; 

for (let i = 1; i <=100; i++){      
    total += i;  
}
console.log("1부터 100까지의 합",total); 

</code>
</pre>

* 코드설명 :
  
1.  let total = 0; 
    합을 저장할 변수 초기화합니다. 1부터 100까지의 합을 저장할 용도로 사용됩니다.
<br />

2.  for (let i = 1; i <=100; i++){ 
  for 반복문을 사용하여 1부터 100까지 숫자를 차례대로 반복합니다.
<br />

3. total += i;  }
  반복문 안에서 total에 현재 숫자 i를 계속 더합니다.
<br />

4. console.log("1부터 100까지의 합",total); 
   결과를 출력합니다
<br />
5. 결과값 = 1부터 100까지의 합: 5050



<br />
<br />

***

<예제9><br />
함수를 사용해 메뉴계산하기
-------------
**Q.머쓱이네 양꼬치 가게는 10인분을 먹으면 음료수 하나를 서비스로 줍니다. 양꼬치는 1인분에 12,000원, 음료수는 2,000원입니다. <br />정수 n과 k가 매개변수로 주어졌을 때, 양꼬치 n인분과 음료수 k개를 먹었다면 총얼마를 지불해야 하는지 return 하도록 solution 함수를 완성해보세요.**

<pre>
<code>

function solution(n, k) {

   const lambPrice = 12000;
   const drinkPrice = 2000;
   const freeDrink= Math.floor (n/10)
   
   
   const totalPrice= (n*lambPrice)+((k-freeDrink)*drinkPrice)
   return totalPrice
}

</code>
</pre>

* 코드설명
  
1. lambPrice와 drinkPrice 설정:

   양고기 한 사람당 가격은 12,000원 (lambPrice).
   음료 한 개의 가격은 2,000원 (drinkPrice).
 
 <br />
 
2. 무료 음료 계산:

    10명마다 음료 한 개가 무료입니다. 즉, n명일 때, Math.floor(n/10)을 사용해 몇 개의 음료가 무료로 제공되는지 계산합니다. 이 값은 freeDrink 변수에 저장됩니다.

 <br />
 
3. 최종 가격 계산:

    양고기 가격은 손님 수 n에 양고기 가격 lambPrice를 곱하여 계산합니다.
    음료 가격은 k에서 무료 음료 수 freeDrink를 빼고, 그 나머지 음료에 대해 가격을 계산합니다. 
    (k - freeDrink) * drinkPrice로 계산합니다.

    두 가격을 합산하여 totalPrice를 구합니다.   


    