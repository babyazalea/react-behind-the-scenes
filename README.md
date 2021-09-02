# React Behind the Scenes!

* Component는 state, props, context가 업데이트 될 때마다 re-evaluate 된다. 해당 Component의 자식 Component까지 모두!
<br/>

* React.memo()는 Component에 주어진 state, props, context의 값이 변하지 않을 땐 Component를 re-evaluate하지 않도록 만들 수 있다. state, props, context가 빈번하게 변하는 Component에는 적합하지 않다. re-evaluate 방식과 동일하게, React.memo()가 적용된 Component의 모든 하위 컴포넌트들도 React.memo()의 효과를 받게 된다.
<br/>

* state, props, context는 Javascript의 데이터 타입을 충실히 따른다. 원시 타입Primitive Type의 state, props, context의 경우 해당 값이 이전의 값과 같을 때, 예를 들어 'state === prevState'라면 React(Javascript의 일종)는 해당 state에 변화가 없다고 판단하고 re-evaluate를 진행하지 않는다. 이와 반대로 참조 타입Reference Type의 state, props, context라면(onClick 메서드의 props로 전달되는 핸들러 함수, 배열Array, 객체Object 등) 해당 값이 이전의 값과 동일하더라도 re-evaluate 될 수 있다(참조 타입의 데이터는 값이 동일하더라도 Javascript에겐 늘 새로운 데이터로 인식된다. 데이터 자체가 아니라 데이터가 저장된 장소의 '주소'를 참조하는 것이기 때문).
<br/>


* 
  ~~~ 
  let obj1 = {}; 
  let obj2 = {}; 
  obj1 === obj2;
  // false

  obj1 = obj2;
  // 비교를 원하는 값에 비교의 대상이 되는 값을 그대로 대응.   
  obj1 === obj2;
  // true
  ~~~
    위의 코드는 앞에서 언급한 원시 타입 데이터와 참조 타입 데이터의 차이점을 보여준다. 이런 Javascript의 특성을 이용해 React에서는 useCallback hook을 제공한다. useCallback은 참조 타입인 함수(Javascript에서는 함수를 객체Object로 취급한다)로 선언된 변수를 useCallback hook을 통해 해당 함수가  포함된 Component가 최초로 렌더링 될 때 React의 특정 storage에 해당 함수를 저장한다. useCallback hook은 두 번째 인자로 배열Array를 받으며, 해당 배열에 넣은 인자의 값이 변화할 때 해당 함수를 re-evaluate 하도록 만들 수 있다.