// 'use strict';
var cw, ch;
// const canvas = document.createElement("CANVAS");
const canvas = document.getElementById("matrix");
canvas.width = cw = window.innerWidth;
canvas.height = ch = window.innerHeight - 20;
canvas.style.display = 'block';
const ctx = canvas.getContext('2d');
var matrix = '0123456789abcdefijklmnopqrstuvwxyz'.split('');
var rain = []
onload = () => {
    document.body.style.background = 'black';
    for (let i = 0; i < cw / 2; i++)
        rain[i] = 1;
    //var prom = prompt('please choose column', '3');
    function raining() {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
        ctx.fillRect(0, 0, cw, ch);

        ctx.fillStyle = 'cyan';
        ctx.font = 25 + 'px arial';
        for (let j = 0; j < rain.length; j++) {
            var txt = matrix[Math.floor(Math.random() * matrix.length)];
            ctx.fillText(txt, j * 10, rain[j] * 10);
            if (rain[j] * 10 > ch && Math.random() > 0.975)
                rain[j] = 0;

            rain[j]++;
        }
    }
    setInterval(raining, 50);
}

// Countdown Script
var ringer = {
    //countdown_to: "10/31/2014",
    countdown_to: "03/17/2022",
    rings: {
        DAYS: {
            s: 86400000, // mseconds in a day,
            max: 365
        },
        HOURS: {
            s: 3600000, // mseconds per hour,
            max: 24
        },
        MINUTES: {
            s: 60000, // mseconds per minute
            max: 60
        },
        SECONDS: {
            s: 1000,
            max: 60
        },
        // MICROSEC: {
        //     s: 10,
        //     max: 100
        // }
    },
    r_count: 5,
    r_spacing: 15, // px
    r_size: 100, // px
    r_thickness: 5, // px
    update_interval: 11, // ms

    init: function () {
        // this = ringer;
        this.cvs = document.getElementById("landing-timer")

        this.size = {
            w:
                (this.r_size + this.r_thickness) * this.r_count +
                this.r_spacing * (this.r_count - 1),
            h: this.r_size + this.r_thickness
        };

        this.cvs.setAttribute("width", this.size.w);
        this.cvs.setAttribute("height", this.size.h);
        this.ctx = this.cvs.getContext("2d");
        // document.body.append(this.cvs);
        this.ctx.textAlign = "center";
        this.actual_size = this.r_size + this.r_thickness;
        this.countdown_to_time = new Date(this.countdown_to).getTime();
        this.cvs.style.width = this.size.w + "px";
        this.cvs.style.height = this.size.h + "px";
        this.go();
    },
    ctx: null,
    go: function () {
        var idx = 0;

        this.time = new Date().getTime() - this.countdown_to_time;

        for (var r_key in this.rings) this.unit(idx++, r_key, this.rings[r_key]);
        // console.log("hello");
        // setInterval(this.go, this.update_interval);
    },
    unit: function (idx, label, ring) {
        var x,
            y,
            value,
            ring_secs = ring.s;
        value = parseFloat(this.time / ring_secs);
        this.time -= Math.round(parseInt(value)) * ring_secs;
        value = Math.abs(value);

        x = this.r_size * 0.5 + this.r_thickness * 0.5;
        x += +(idx * (this.r_size + this.r_spacing + this.r_thickness));
        y = this.r_size * 0.5;
        y += this.r_thickness * 0.5;

        // calculate arc end angle
        var degrees = 360 - (value / ring.max) * 360.0;
        var endAngle = degrees * (Math.PI / 180);

        this.ctx.save();

        this.ctx.translate(x, y);
        this.ctx.clearRect(
            this.actual_size * -0.5,
            this.actual_size * -0.5,
            this.actual_size,
            this.actual_size
        );

        // first circle
        this.ctx.strokeStyle = "#000";
        this.ctx.beginPath();
        this.ctx.arc(0, 0, this.r_size / 2, 0, 2 * Math.PI, 2);
        this.ctx.lineWidth = this.r_thickness;
        this.ctx.stroke();

        // second circle
        this.ctx.strokeStyle = "lime";
        this.ctx.beginPath();
        this.ctx.arc(0, 0, this.r_size / 2, 0, endAngle, 1);
        this.ctx.lineWidth = this.r_thickness;
        this.ctx.stroke();

        // label
        this.ctx.fillStyle = "#fff";

        this.ctx.font = "12px Goldman";
        this.ctx.fillText(label, 0, 23);
        this.ctx.fillText(label, 0, 23);

        this.ctx.font = "bold 40px Helvetica";
        this.ctx.fillText(Math.floor(value), 0, 10);

        this.ctx.restore();
    }
};
// ringer.init()
setInterval(() => ringer.init(), 11);
