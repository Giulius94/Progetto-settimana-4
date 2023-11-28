// Scroll Animation
document.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    
    if (window.scrollY > 380) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
})

//Animazioni M
let arrayG = document.querySelectorAll("g [opacity]")
let n = document.querySelectorAll("g [opacity]").length;
let casuale = 0;
function giveMeRandom ()
{
    {
        for(i = 0; i < n; i++)
        {
            casuale = Math.round(Math.random());
            if(casuale === 0)
            {
                arrayG[i].classList.add("random");
            }
            else
            {
                arrayG[i].classList.remove("random");
            }
        }
    }
}
giveMeRandom();
setInterval(giveMeRandom, 500);
