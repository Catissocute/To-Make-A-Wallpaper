var ree = document.getElementById('ree').value;
var greee = document.getElementById('greee').value;
var blee = document.getElementById('blee').value;

var re = document.querySelector(':root');
re.style.setProperty('--ble', bluee);
re.style.setProperty('--rde', redee);
re.style.setProperty('--gre', greenee);

re.style.setProperty('--secr', rew);
re.style.setProperty('--secg', greew);
re.style.setProperty('--secb', bluw);

re.style.setProperty('--thir', ree);
re.style.setProperty('--thig', greee);
re.style.setProperty('--thib', blee);
if(document.getElementById("radio-l").checked){
  re.style.setProperty('--final', 'var(--calculated-l)' )
}
else if (document.getElementById("radio-r").checked) {
  re.style.setProperty('--final', 'var(--calculated-r)' )
}
else if (document.getElementById("radio-r-r").checked) {
    re.style.setProperty('--final', 'var(--calculated-r-r)' )
}
else if (document.getElementById("radio-r-l").checked) {
  re.style.setProperty('--final', 'var(--calculated-r-l)' )
}
else if (document.getElementById("radio-r-c").checked) {
  re.style.setProperty('--final', 'var(--calculated-r-c)' )
}
 else {
  re.style.setProperty('--final', 'var(--calculated-l)' )
}
}
