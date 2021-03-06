const string = '.head * {\n' +
    '    margin: 0;\n' +
    '    padding: 0;\n' +
    '    box-sizing: border-box\n' +
    '}\n' +
    '\n' +
    '.head *::before, *::after {\n' +
    '    box-sizing: border-box\n' +
    '}\n' +
    '.head{\n' +
    '    animation: wave1 25s infinite linear;\n' +
    '}\n' +
    '@keyframes wave1{\n' +
    '    0% {\n' +
    '        transform: rotate(0deg);\n' +
    '    }\n' +
    '    25% {\n' +
    '        transform: rotate(15deg);\n' +
    '    }\n' +
    '    50% {\n' +
    '        transform: rotate(-15deg);\n' +
    '    }\n' +
    '    100%{\n' +
    '        transform: rotate(0deg);\n' +
    '    }\n' +
    '}\n' +
    '.head {\n' +
    '    width: 300px;\n' +
    '    height: 300px;\n' +
    '    border: 1px solid black;\n' +
    '    border-radius: 50%;\n' +
    '    background: #009FE3;\n' +
    '    position: relative;\n' +
    '}\n' +
    '\n' +
    '.eyes {\n' +
    '    height: 80px;\n' +
    '    width: 120px;\n' +
    '    position: relative;\n' +
    '    left: 90px; /* 150-60 */\n' +
    '    top: 6px;\n' +
    '}\n' +
    '\n' +
    '.eyes::before {\n' +
    '    content: \'\';\n' +
    '    display: block;\n' +
    '    height: 80px;\n' +
    '    width: 60px;\n' +
    '    background: #FFFFFF;\n' +
    '    position: absolute;\n' +
    '    border-radius: 50%;\n' +
    '    border: 1px solid black;\n' +
    '    z-index: 1;\n' +
    '}\n' +
    '\n' +
    '.eyes::after {\n' +
    '    content: \'\';\n' +
    '    display: block;\n' +
    '    height: 80px;\n' +
    '    width: 60px;\n' +
    '    background: #FFFFFF;\n' +
    '    position: absolute;\n' +
    '    left: 60px;\n' +
    '    border-radius: 50%;\n' +
    '    border: 1px solid black;\n' +
    '    z-index: 1;\n' +
    '}\n' +
    '\n' +
    '.eyes .eyeball {\n' +
    '    background-color: black;\n' +
    '    height: 18px;\n' +
    '    width: 18px;\n' +
    '    position: absolute;\n' +
    '    border-radius: 50%;\n' +
    '    left: 51px;\n' +
    '    top: 30px;\n' +
    '    z-index: 2;\n' +
    '}\n' +
    '\n' +
    '.eyes .eyeball.left {\n' +
    '    transform: translateX(15px);\n' +
    '}\n' +
    '\n' +
    '.eyes .eyeball.right {\n' +
    '    transform: translateX(-15px);\n' +
    '}\n' +
    '\n' +
    '.face {\n' +
    '    background: #FFF;\n' +
    '    width: 270px;\n' +
    '    height: 230px;\n' +
    '    border-radius: 50% 50% 60%  60% / 60% 60% 80% 80%;\n' +
    '    position: absolute;\n' +
    '    left: 15px;\n' +
    '    top: 56px;\n' +
    '}\n' +
    '\n' +
    '.nose {\n' +
    '    border: 1px solid black;\n' +
    '    height: 38px;\n' +
    '    width: 38px;\n' +
    '    background: #D80516;\n' +
    '    border-radius: 50%;\n' +
    '    position: absolute;\n' +
    '    left: 116px;\n' +
    '    top: 18px;\n' +
    '    z-index: 1;\n' +
    '}\n' +
    '\n' +
    '.nose::before {\n' +
    '    content: \'\';\n' +
    '    display: block;\n' +
    '    background: #FFFFFF;\n' +
    '    width: 10px;\n' +
    '    height: 10px;\n' +
    '    position: absolute;\n' +
    '    border-radius: 50%;\n' +
    '    left: 16px;\n' +
    '    top: 8px;\n' +
    '}\n' +
    '\n' +
    '.moustaches {\n' +
    '    height: 50px;\n' +
    '    width: 240px;\n' +
    '    position: relative;\n' +
    '    top: 56px;\n' +
    '    left: 15px; /*135-???240/2=120???*/\n' +
    '}\n' +
    '\n' +
    '/* ??????????????????????????? */\n' +
    '.moustache {\n' +
    '    height: 2px;\n' +
    '    width: 80px;\n' +
    '    border: 1px solid black;\n' +
    '    position: absolute;\n' +
    '    left: 80px; /*120-40*/\n' +
    '    top: 10px;\n' +
    '    z-index: 2;\n' +
    '}\n' +
    '\n' +
    '.moustache.left {\n' +
    '    transform-origin: right bottom;\n' +
    '}\n' +
    '\n' +
    '.moustache.right {\n' +
    '    transform-origin: left bottom;\n' +
    '}\n' +
    '\n' +
    '.moustache.left.up {\n' +
    '    /* 40+25 */\n' +
    '    transform: translateX(-65px) translateY(-10px) rotate(20deg);\n' +
    '}\n' +
    '\n' +
    '.moustache.left.center {\n' +
    '    transform: translateX(-65px) translateY(0px) rotate(2deg);\n' +
    '}\n' +
    '\n' +
    '.moustache.left.down {\n' +
    '    transform: translateX(-65px) translateY(10px) rotate(-20deg);\n' +
    '}\n' +
    '\n' +
    '.moustache.right.up {\n' +
    '    transform: translateX(65px) translateY(-10px) rotate(-20deg);\n' +
    '}\n' +
    '\n' +
    '.moustache.right.center {\n' +
    '    transform: translateX(65px) translateY(0px) rotate(2deg);\n' +
    '}\n' +
    '\n' +
    '.moustache.right.down {\n' +
    '    transform: translateX(65px) translateY(10px) rotate(20deg);\n' +
    '}\n' +
    '.boundary {\n' +
    '    width: 2px;\n' +
    '    height: 52px;\n' +
    '    position: absolute;\n' +
    '    left: 135px;\n' +
    '    top: 56px;\n' +
    '    background: black;\n' +
    '    z-index: 2;\n' +
    '}\n' +
    '\n' +
    '.mouth {\n' +
    '    border-bottom-left-radius: 50% 100%;\n' +
    '    border-bottom-right-radius: 50% 100%;\n' +
    '    border-top: none;\n' +
    '    height: 150px;\n' +
    '    width: 240px;\n' +
    '    background: #E80214;\n' +
    '    position: relative;\n' +
    '    left: 15px; /*135px-120px*/\n' +
    '    top: -68px;\n' +
    '    overflow: hidden;\n' +
    '}\n' +
    '\n' +
    '.lips {\n' +
    '    width: 290px;\n' +
    '    height: 79px;\n' +
    '    position: relative;\n' +
    '    left: -10px; /* (290px-270px)/2 */\n' +
    '}\n' +
    '\n' +
    '.lips::before {\n' +
    '    content: \'\';\n' +
    '    display: block;\n' +
    '    position: absolute;\n' +
    '    width: 260px;\n' +
    '    height: 50px;\n' +
    '    top: 8px;\n' +
    '    left: 15px; /*145-130*/\n' +
    '    background: white;\n' +
    '    z-index: 1;\n' +
    '}\n' +
    '\n' +
    '.lips::after {\n' +
    '    content: \'\';\n' +
    '    display: block;\n' +
    '    position: absolute;\n' +
    '    width: 56px;\n' +
    '    height: 50px;\n' +
    '    top: 18px;\n' +
    '    left: 117px; /*145-28*/\n' +
    '    background: white;\n' +
    '    z-index: 1;\n' +
    '}\n' +
    '\n' +
    '.lip.center {\n' +
    '    background: #FFFFFF;\n' +
    '    position: absolute;\n' +
    '    border-radius: 60%  0%   0% 75% / 50% 0%  0% 50%;\n' +
    '    border-right: none;\n' +
    '    width: 40px;\n' +
    '    height: 60px;\n' +
    '    border-top-style: solid;\n' +
    '    border-left-style: solid;\n' +
    '    border-bottom-style: solid;\n' +
    '    border-color: black;\n' +
    '    border-width: 2px;\n' +
    '    left: 124px;\n' +
    '}\n' +
    '\n' +
    '.lip.right-center {\n' +
    '    transform: translateX(-125px) rotate(15deg);\n' +
    '}\n' +
    '\n' +
    '.lip.left-center {\n' +
    '    transform: translateX(125px) rotate(165deg);\n' +
    '}\n' +
    '\n' +
    '.lip.downside {\n' +
    '    position: absolute;\n' +
    '    border-radius: 70% / 50%;\n' +
    '    border-top: none;\n' +
    '    width: 130px;\n' +
    '    height: 56px;\n' +
    '    border-bottom-style: solid;\n' +
    '    border-width: 2px;\n' +
    '    border-color: black;\n' +
    '    left: 80px;\n' +
    '    top: 12px;\n' +
    '    background: #FFFFFF;\n' +
    '    z-index: 1;\n' +
    '}\n' +
    '\n' +
    '.lip.downside.down-left {\n' +
    '    transform: translateX(-74px);\n' +
    '}\n' +
    '\n' +
    '.lip.downside.down-right {\n' +
    '    transform: translateX(74px);\n' +
    '}\n' +
    '\n' +
    '.lip.down.down-center {\n' +
    '    position: absolute;\n' +
    '    border-bottom-left-radius: 60%;\n' +
    '    border-bottom-right-radius: 66%;\n' +
    '    border-top: none;\n' +
    '    width: 148px;\n' +
    '    height: 56px;\n' +
    '    border-bottom-style: solid;\n' +
    '    border-width: 2px;\n' +
    '    border-color: black;\n' +
    '    left: 70px; /*145 - 75*/\n' +
    '    top: 58px;\n' +
    '    transform: rotate(180deg);\n' +
    '    background: #E80214;\n' +
    '    z-index: 2;\n' +
    '}\n' +
    '\n' +
    '.lip.down.down-center::before {\n' +
    '    border-bottom-left-radius: 66%;\n' +
    '    position: absolute;\n' +
    '    content: \'\';\n' +
    '    display: block;\n' +
    '    width: 50px;\n' +
    '    height: 50px;\n' +
    '    background: #E80115;\n' +
    '    top: -2px;\n' +
    '    left: -7px;\n' +
    '}\n' +
    '\n' +
    '.lip.down.down-center::after {\n' +
    '    border-bottom-right-radius: 66%;\n' +
    '    position: absolute;\n' +
    '    content: \'\';\n' +
    '    display: block;\n' +
    '    width: 50px;\n' +
    '    height: 50px;\n' +
    '    background: #E80115;\n' +
    '    top: -2px;\n' +
    '    right: -7px;\n' +
    '}\n' +
    '.tongue {\n' +
    '    border-top-left-radius: 50% 80%;\n' +
    '    border-top-right-radius: 50% 80%;\n' +
    '    height: 60px;\n' +
    '    width: 80px;\n' +
    '    background: #EF6C1B;\n' +
    '    position: absolute;\n' +
    '    top: 110px;\n' +
    '    left: 67px; /*120-53*/\n' +
    '    z-index: 2;\n' +
    '}\n' +
    '\n' +
    '\n' +
    '.tongue.left {\n' +
    '    transform: translateX(-20px) rotate(-45deg);\n' +
    '}\n' +
    '.tongue.right {\n' +
    '    transform: translateX(40px) rotate(45deg);\n' +
    '\n' +
    '}\n' +
    '\n' +
    '\n' +
    '\n'

export default string //?????????