


        $(document).on('ready', function () {

            $('.regular2').slick({
                dots: true,
                infinite: true,
                speed: 400,
                slidesToShow: 5,
                slidesToScroll: 1,
                

                responsive: [
                    {
                        breakpoint: 1024,
                        settings: {
                            slidesToShow: 3,
                            slidesToScroll: 3,
                            infinite: true,
                            dots: true
                        }
                    },
                    {
                        breakpoint: 600,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 2
                        }
                    },
                    {
                        breakpoint: 480,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1
                        }
                    }
                ]
            });
        });

    


        

        $(document).on('ready', function () {

            $('.regular').slick({
                dots: false,
                infinite: true,
                speed: 300,
                slidesToShow: 2,
                slidesToScroll: 1,

                responsive: [
                    {
                        breakpoint: 1024,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 3,
                            infinite: true,
                            dots: true
                        }
                    },
                    {
                        breakpoint: 600,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 2
                        }
                    },
                    {
                        breakpoint: 480,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1
                        }
                    }
                ]
            });
        });





        $('#play-video').on('click', function(e){
            e.preventDefault();
            $('#video-overlay').addClass('open');
            $("#video-overlay").append('<iframe width="560" height="315" src="https://www.youtube.com/embed/ngElkyQ6Rhs" frameborder="0" allowfullscreen></iframe>');
          });
          
          $('.video-overlay, .video-overlay-close').on('click', function(e){
            e.preventDefault();
            close_video();
          });
          
          $(document).keyup(function(e){
            if(e.keyCode === 27) { close_video(); }
          });
          
          function close_video() {
            $('.video-overlay.open').removeClass('open').find('iframe').remove();
          };