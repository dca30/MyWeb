// Glitch Timeline Function
var text = document.querySelector(".btn-glitch-active");
var filter = document.querySelector(".svg-sprite");
var turb = filter.querySelector("#filter feTurbulence");
var turbVal = {
  val: 0.000001,
};
var turbValX = {
  val: 0.000001,
};

var glitchTimeline = function () {
  var timeline = new TimelineMax({
    repeat: -1,
    repeatDelay: 2,
    paused: true,
    onUpdate: function () {
      turb.setAttribute("baseFrequency", turbVal.val + " " + turbValX.val);
    },
  });

  timeline
    .to(turbValX, 0.1, {
      val: 0.5,
    })
    .to(turbVal, 0.1, {
      val: 0.02,
    });
  timeline
    .set(turbValX, {
      val: 0.000001,
    })
    .set(turbVal, {
      val: 0.000001,
    });
  timeline
    .to(
      turbValX,
      0.2,
      {
        val: 0.4,
      },
      0.4
    )
    .to(
      turbVal,
      0.2,
      {
        val: 0.002,
      },
      0.4
    );
  timeline
    .set(turbValX, {
      val: 0.000001,
    })
    .set(turbVal, {
      val: 0.000001,
    });

  return {
    start: function () {
      timeline.play(0);
    },
    stop: function () {
      timeline.pause();
    },
  };
};

var btnGlitch = new glitchTimeline();

var btnsGlitch = document.querySelectorAll(".btn-glitch");
for (var i = 0; i < btnsGlitch.length; i++) {
  btnsGlitch[i].addEventListener("mouseenter", function () {
    this.classList.add("btn-glitch-active");
    btnGlitch.start();
  });
  btnsGlitch[i].addEventListener("mouseleave", function () {
    if (this.classList.contains("btn-glitch-active")) {
      this.classList.remove("btn-glitch-active");
      btnGlitch.stop();
    }
  });
}
