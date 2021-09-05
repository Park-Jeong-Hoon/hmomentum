const sayingSpan = document.querySelector("#famous-saying span:first-child");
const whoSpan = document.querySelector("#famous-saying span:last-child");

const sayings = [
    {
        who:"<세네카>",
        saying:`"때로는 살아있는 것조차도 용기가 될 때가 있다."`
    },
    {
        who:"<마릴린 보스 사번트>",
        saying:`"지식을 얻으려면 공부를 해야 하고, 지혜를 얻으려면 관찰을 해야 한다."`
    },
    {
        who:"<파울로 코엘료>",
        saying:`"언제나 현재에 집중할 수 있다면 행복할 것이다."`
    },
    {
        who:"<메리 케이 애쉬>",
        saying:`"실패하는 것은 곧 성공으로 한 발짝 더 나아가는 것이다."`
    },
    {
        who:"<에이브러햄 링컨>",
        saying:`"만약 누군가를 당신의 편으로 만들고 싶다면, 먼저 당신이 그의 진정한 친구임을 확신시켜라."`
    },
    {
        who:"<액톤 경>",
        saying:`"읽는 것 만큼 쓰는 것을 통해서도 많이 배운다."`
    },
    {
        who:"<칼 샌드버그>",
        saying:`"시간은 인생의 동전이다. 시간은 네가 가진 유일한 동전이고, 그 동전을 어디에 쓸지는 너만이 결정할 수 있다. 네 대신 타인이 그 동전을 써버리지 않도록 주의하라."`
    },
    {
        who:"<조세프 캠벨>",
        saying:`"우리가 계획한 삶을 기꺼이 버릴 수 있을 때만, 우리를 기다리고 있는 삶을 맞이할 수 있다."`
    },
    {
        who:"<에드거 앨런 포>",
        saying:`"낮에 꿈꾸는 사람은 밤에만 꿈꾸는 사람에게는 찾아오지 않는 많은 것을 알고 있다."`
    },
    {
        who:"<로버트 스턴버그>",
        saying:`"정열적인 사랑은 빨리 달아오른 만큼 빨리 식는다. 은은한 정은 그보다는 천천히 생기며, 헌신적인 마음은 그 보다도 더디다."`
    }
];

const randNum = Math.floor(Math.random()*sayings.length);

sayingSpan.innerText = sayings[randNum].saying;
whoSpan.innerText = sayings[randNum].who;