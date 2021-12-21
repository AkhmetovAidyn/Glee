$(function () {

  $('.product-one__num').styler();

  $('.num-in span').click(function () {
    var $input = $(this).parents('.num-block').find('input.in-num');
    if ($(this).hasClass('minus')) {
      var count = parseFloat($input.val()) - 1;
      count = count < 1 ? 1 : count;
      if (count < 2) {
        $(this).addClass('dis');
      }
      else {
        $(this).removeClass('dis');
      }
      $input.val(count);
    }
    else {
      var count = parseFloat($input.val()) + 1
      $input.val(count);
      if (count > 1) {
        $(this).parents('.num-block').find(('.minus')).removeClass('dis');
      }
    }

    $input.change();
    return false;
  });


  $('.product-slide__thumb').slick({
    asNavFor: '.product-slide__big',
    focusOnSelect: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: true,
    draggable: false,
    arrows: false,
  });

  $('.product-slide__big').slick({
    asNavFor: '.product-slide__thumb',
    draggable: false,
    arrows: false,
    fade: true
  });

 $(".star").rateYo({
    starWidth: "12px",
    normalFill: "#d6d6d6",
    ratedFill: "#ffcc00",
    readOnly: true
  });

$(".star-content").rateYo({
  starWidth: "18px",
  normalFill: "#d6d6d6",
  ratedFill: "#ffcc00",
  readOnly: true
});


  var keypressSlider = document.querySelector(".filter-price__slider");
  var input0 = document.querySelector(".filter-price__input-0");
  var input1 = document.querySelector(".filter-price__input-1");
  var inputs = [input0, input1];

  noUiSlider.create(keypressSlider, {
    start: [100, 500],
    connect: true,
    step: 0.1,
    padding: [0, 40],
    range: {
      'min': [0.00],
      'max': [1000]
    }
  });

  /* begin Inputs  */

  /* end Inputs  */
  keypressSlider.noUiSlider.on("update", function (values, handle) {
    inputs[handle].value = values[handle];

    /* begin Listen to keypress on the input */
    function setSliderHandle(i, value) {
      var r = [null, null];
      r[i] = value;
      keypressSlider.noUiSlider.set(r);
    }

    // Listen to keydown events on the input field.
    inputs.forEach(function (input, handle) {
      input.addEventListener("change", function () {
        setSliderHandle(handle, this.value);
      });

      input.addEventListener("keydown", function (e) {
        var values = keypressSlider.noUiSlider.get();
        var value = Number(values[handle]);

        // [[handle0_down, handle0_up], [handle1_down, handle1_up]]
        var steps = keypressSlider.noUiSlider.steps();

        // [down, up]
        var step = steps[handle];

        var position;

        // 13 is enter,
        // 38 is key up,
        // 40 is key down.
        switch (e.which) {
          case 13:
            setSliderHandle(handle, this.value);
            break;

          case 38:
            // Get step to go increase slider value (up)
            position = step[1];

            // false = no step is set
            if (position === false) {
              position = 1;
            }

            if (position !== null) {
              setSliderHandle(handle, value + position);
            }

            break;

          case 40:
            position = step[0];

            if (position === false) {
              position = 1;
            }

            if (position !== null) {
              setSliderHandle(handle, value - position);
            }

            break;
        }
      });
    });
  });
});

$('.top-slider__inner').slick({
  dots: true,
  arrows: false,
  fade: true,
  autoplay: true,
  autoplaySpeed: 2000
});

var containerEl1 = $('[data-ref="container-1"]');
var containerEl2 = $('[data-ref="container-2"]');

var config = {
  controls: {
    scope: 'local'
  }
};

var mixer1 = mixitup(containerEl1, config);
var mixer2 = mixitup(containerEl2, config);


