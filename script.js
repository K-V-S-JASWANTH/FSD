function showFriend(friendNumber) {
  var sections = document.getElementsByTagName("section");
  for (var i = 0; i < sections.length; i++) {
    sections[i].style.display = "none";
  }
  document.getElementById("friend" + friendNumber).style.display = "block";
}
