import string from './css.js'


const player = {
    // 按f2可以到下一个要修改的地方
    n: 1,
    time: 1,
    id: undefined,
    ui: {
        demo: document.querySelector("#demo"),
        demo2: document.querySelector("#demo2")
    },
    init: () => {
        player.ui.demo.innerText = string.substr(0, player.n);
        player.ui.demo2.innerHTML = string.substr(0, player.n);
        player.play()
        player.addEvents()
    },
    events: {
        "#btnPause": 'pause',
        "#btnPlay": 'play',
        "#btnSlow": 'slow',
        "#btnNormal": 'normal',
        "#btnFast": 'fast'
    },
    addEvents: () => {
        for (let key in player.events) {
            // 防御性编程，防止原型被改后遍历到不是player上的内容
            if (player.events.hasOwnProperty(key)) {
                const value = player.events[key]
                document.querySelector(key).onclick = player[value];
            }
        }
    },
    run: () => {
        player.n += 1;
        if (player.n > string.length) {
            window.clearInterval(player.id)
            return
        }
        player.ui.demo.innerText = string.substr(0, player.n);
        player.ui.demo2.innerHTML = string.substr(0, player.n);
        player.ui.demo.scrollTop = player.ui.demo.scrollHeight;
        console.log(player.n)
    },
    play: () => {
        player.id = setInterval(player.run, player.time)
    },
    pause: () => {
        window.clearInterval(player.id);
    },
    slow: () => {
        player.pause()
        player.time = 300;
        player.play()
    },
    normal: () => {
        player.pause()
        player.time = 100;
        player.play()
    },
    fast: () => {
        player.pause()
        player.time = 1;
        player.play()
    }
}

player.init()
