# Simple-Slider
A very simple slider for carousels and slideshows. This should act as a skeleton for your own crazy and beautiful sliders. It provides you with the basics with very little code and lets you build on top of it with ease.

## Usage

See the demo for an example of how to you. `my-custom-slider-class` can be whatever you like and is used to define your own overriding styles. 

You'll need to include jQuery. 

Use the following markup to define your slider. 

    <div class="slider my-custom-slider-class">
        <ul class="slider__panes">
            <li class="slider__pane"></li>
            <li class="slider__pane"></li>
            <li class="slider__pane"></li>
            <li class="slider__pane"></li>
            <li class="slider__pane"></li>
        </ul>
    </div>
    
    <script>
        $('.my-custom-slider-class').slider();
    </script>

You can use the following shortcode if you're using Emmet to speed things up

    .slider>ul.slider__panes>li.slider__pane*6

### Options

    slide_speed: 300,
    showNav: true,
    showDots: true,
    easing: 'swing',
    autoLoop: false,
    autoLoopTime: 6000
