/*눈 내리는 효과*/
$(document).ready(function(){
    $('.snowBox').snowfall({
        image :"img2/flake.png", 
        minSize: 3, 
        maxSize:10, 
        flakeCount : 120,
        minSpeed : 0.4,
        maxSpeed : 1,
        collection: false,
    });
});

//flakeCount: 생성할 눈송이의 개수

//flakeColor: 눈송이의 색상

//flakeIndex: 눈송이의 z-index 값, 다른 요소들 위에 눈송이가 표시되도록 설정. 높은 값일수록 위에 표시

//flakePosition: 눈송이의 위치 속성입니다. absolute로 설정되어 있어, 부모 요소에 상대적인 위치에서 표시

//minSize: 생성될 눈송이의 최소 크기입니다. 

//maxSize: 생성될 눈송이의 최대 크기입니다. 

//minSpeed: 눈송이가 떨어지는 최소 속도입니다. 

//maxSpeed: 눈송이가 떨어지는 최대 속도입니다. 

//round: 눈송이가 둥글게 표시될지를 결정하는 속성입니다. false로 설정되어 있어, 기본적인 모양

//shadow: 눈송이에 그림자를 추가할지를 결정하는 속성입니다. false로 설정되어 있어 그림자가 없습니다.

//collection: 눈송이가 바닥에 쌓일지를 결정하는 속성입니다. false로 설정되어 있어, 쌓이지 않습니다.

//image: 눈송이에 사용할 이미지 여부입니다. false로 설정되어 있어, 기본 모양의 눈송이가 사용됩니다.

//collectionHeight: 눈송이가 쌓일 수 있는 최대 높이입니다. 이 값은 collection이 true일 때만 의미가 있습니다.