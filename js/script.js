$(function () {
  // side menu
  let menuContentWidth = $(".side-content").innerWidth();
  $("#sideMenuContainer").css("left", -menuContentWidth);
  $("#wordsCounter").text(100);
  $("#menuBtn").click(function () {
    $("#sideMenuContainer").animate({ left: 0 }, 700);
  });
  $(".menuCloser").click(function () {
    $("#sideMenuContainer").animate({ left: -menuContentWidth }, 700);
  });
  //scroll animations
  $("#linksMenu a").click(function (e) {
    let sectionId = $(this).attr("href");
    let distanceOfSec = $(sectionId).offset().top;
    $("body,html").animate({ scrollTop: distanceOfSec }, 500);
  });
  //menu button when scroll
  $(window).scroll(function () {
    let scrolldistance = $(this).scrollTop();
    let secondSection = $("#details").offset().top;
    let menuBtn = $("#menuBtn");
    scrolldistance > secondSection - 70
      ? (menuBtn[0].style.cssText = "display : none !important")
      : menuBtn.fadeIn(1000);
  });
  // accordion
  $(".event-details h3").click(function () {
    $(".slide").not($(this).next()).slideUp(1500);
    $(this).next().slideToggle(1500);
  });
  //event countdown
  let ended = setInterval(function () {
    let eventTime = new Date("Sep 15, 2024 18:00:00").getTime();
    let now = new Date().getTime();
    let timeDiff = eventTime - now;
    let days = Math.floor(timeDiff / (24 * 60 * 60 * 1000));
    let hours = Math.floor(
      (timeDiff % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)
    );
    let mins = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    let secs = Math.floor((timeDiff % (1000 * 60)) / 1000);
    $(".days").html(days + "d");
    $(".hours").html(hours + "h");
    $(".mins").html(mins + "m");
    $(".secs").html(secs + "s");
    if (timeDiff < 0) {
      clearInterval(ended);
      $(".days").html("Event Ended");
      $(".hours").html("Event Ended");
      $(".mins").html("Event Ended");
      $(".secs").html("Event Ended");
    }
  }, 1000);
  // text counter
  $(".text-field").keyup(function () {
    let maxWords = 100;
    let value = $(this).val().length;
    maxWords -= value;
    if (maxWords <= 0) {
      $("#wordsCounter").text("Exceeded max words.");
    } else {
      $("#wordsCounter").text(maxWords);
    }
  });
});
