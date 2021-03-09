function toggle_visibility(id){
  var e = document.getElementById(id);
    if(e.classList.contains('hidden')){
      e.classList.remove('hidden')
    }
    else {
        e.classList.add('hidden')
    }
}