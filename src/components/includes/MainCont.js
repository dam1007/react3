import React from 'react'

//props 안 쓰고 TextInfor에서 반복돌린 버전
/* const textInfor = [
    {text: "we provide",
    num: "1"},
    {text: "visual coding",
    num: "2"},
    {text: "solution",
    num: "3"},
    {text: "for you webs",
    num: "4"},
];

function TextInfor() {
    return(
        <>
            {textInfor.map((elem) => (
                <div key={elem.num}>{elem.text}</div>
            ))}
        </>
    );
}

function MainCont() {
  return (
    <section className="main__cont">
        <div className='main__inner'>
            <TextInfor />
        </div>
    </section>
    );
} */

const textInfor = [
    {text: "we provide"},
    {text: "visual coding"},
    {text: "solution"},
    {text: "for you webs"},
];

function Text({text}) {
    return(
        <div>{text}</div>
    );
}

function MainCont() {
    return(
        <section className='main__cont'>
            <div className='main__inner'>
                {textInfor.map((txt) => (
                    <Text text={txt.text} key={txt.text} />
                ))}
            </div>
        </section>
    );
}

export default MainCont;
