
function psychedelicMode(){
    var mode = document.getElementById('psychedelic-mode');
    var defaultStyle = document.getElementsByTagName('body')[0].style;
    var headings = document.querySelectorAll("h1, h2, h3, h4, h5, h6");
    if (mode.value =='Activate psychedelic'){
        document.getElementsByTagName('body')[0].style.backgroundColor = 'magenta';
        document.getElementsByTagName('body')[0].style.color = 'blue';
        document.getElementsByTagName('body')[0].style.fontFamily = 'papyrus';
        for (val of headings)
        {
            val.style.color = 'green';
            val.style.fontFamily = 'Comic Sans';
        }
        mode.value = 'Deactivate psychedelic';
    }else{
        document.getElementsByTagName('body')[0].style = defaultStyle;
        mode.value ='Activate psychedelic';
    }
}

window.onload=function(){setTimeout(popupShow,2000)};

function popupShow()
{
    var popup = document.getElementById('popup');
    popup.style.display = 'block';
}

function popupClose() {
    var popup = document.getElementById('popup');
    popup.style.display = 'none';
}
