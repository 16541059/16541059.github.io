$('.navTrigger').click(function () {
    $(this).toggleClass('active');
    $("section h1").toggle();
    $("section p").toggle();
    $(".btn-danger").toggle();
    $(".btn-primary").toggle();
    console.log("Clicked menu");

    $("#mainListDiv").toggleClass("show_list");
    $("#mainListDiv").fadeIn();

});


$(".btn-danger").click(function (e) {
    e.preventDefault();
    window.open("https://www.instagram.com/at_hirsizi_timothy");
});
$(".btn-primary").click(function (e) {
    e.preventDefault();
    window.open("https://www.linkedin.com/in/bekiryildirim/");
    
});
/* Demo purposes only */
$(".hover").mouseleave(
    function () {
      $(this).removeClass("hover");
    }
  );

$("#hakkında").animatedModal({
    animatedIn: 'lightSpeedIn',
    animatedOut: 'bounceOutDown',
    color: '#fff',
    beforeOpen: function () {
        var children = $(".thumb");
        var index = 0;
        function addClassNextChild() {
            if (index == children.length) return;
            children.eq(index++).show().velocity("transition.expandIn", {
                opacity: 1,
                stagger: 250
            });
            window.setTimeout(addClassNextChild, 200);
        }
        addClassNextChild();
    },
    afterClose: function () {
        $(".thumb").hide();
    }
});

$("#Sertifikalar").animatedModal({
    animatedIn: 'lightSpeedIn',
    animatedOut: 'bounceOutDown',
    color: '#000',
    beforeOpen: function () {
        var children = $(".thumb");
        var index = 0;
        function addClassNextChild() {
            if (index == children.length) return;
            children.eq(index++).show().velocity("transition.expandIn", {
                opacity: 1,
                stagger: 250
            });
            window.setTimeout(addClassNextChild, 200);
        }
        addClassNextChild();
    },
    afterClose: function () {
        $(".thumb").hide();
    }
});

$("#iletisim").animatedModal({
    animatedIn: 'lightSpeedIn',
    animatedOut: 'bounceOutDown',
    color: '#000',
    beforeOpen: function () {
        var children = $(".thumb");
        var index = 0;
        function addClassNextChild() {
            if (index == children.length) return;
            children.eq(index++).show().velocity("transition.expandIn", {
                opacity: 1,
                stagger: 250
            });
            window.setTimeout(addClassNextChild, 200);
        }
        addClassNextChild();
    },
    afterClose: function () {
        $(".thumb").hide();
    }
});

$("#deneyim").animatedModal({
    animatedIn: 'lightSpeedIn',
    animatedOut: 'bounceOutDown',
    color: '#fff',
    beforeOpen: function () {
        var children = $(".thumb");
        var index = 0;
        function addClassNextChild() {
            if (index == children.length) return;
            children.eq(index++).show().velocity("transition.expandIn", {
                opacity: 1,
                stagger: 250
            });
            window.setTimeout(addClassNextChild, 200);
        }
        addClassNextChild();
    },
    afterClose: function () {
        $(".thumb").hide();
    }
});

window.addEventListener("DOMContentLoaded", function() {

    // get the form elements defined in your form HTML above
    
    var form = document.getElementById("my-form");
    var button = document.getElementById("my-form-button");
    var status = document.getElementById("my-form-status");

    // Success and Error functions for after the form is submitted
    
    function success() {
      form.reset();
      button.style = "display: none ";
      status.innerHTML = "Mesajınız Alındı Teşşekürler";
    }

    function error() {
      status.innerHTML = "Bir hata oluştu tekrar deneyiniz...!";
    }

    // handle the form submission event

    form.addEventListener("submit", function(ev) {
      ev.preventDefault();
      var data = new FormData(form);
      ajax(form.method, form.action, data, success, error);
    });
  });
  
  // helper function for sending an AJAX request

  function ajax(method, url, data, success, error) {
    var xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = function() {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        success(xhr.response, xhr.responseType);
      } else {
        error(xhr.status, xhr.response, xhr.responseType);
      }
    };
    xhr.send(data);
  }