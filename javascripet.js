function change(){
var bluee = document.getElementById('blue').value;
var greenee = document.getElementById('green').value;
var redee = document.getElementById('red').value;
var re = document.querySelector(':root');
re.style.setProperty('--ble', bluee);
re.style.setProperty('--rde', redee);
re.style.setProperty('--gre', greenee);
if(document.getElementById("radio-l").checked){
  re.style.setProperty('--final', 'var(--calculated-l)' )
}
else if (document.getElementById("radio-r").checked) {
  re.style.setProperty('--final', 'var(--calculated-r)' )
} else {
  re.style.setProperty('--final', 'var(--calculated-l)' )
}
}
