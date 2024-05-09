function triggerDownload(){
    const btn = document.getElementById("btn-download");
    const loadingBar = document.getElementById("loading-bar");
    const content = document.getElementById("content");

    content.innerHTML = ""
    btn.classList.add("toLoadingBar");

    loadingBar.classList.add("isLoading")

    setTimeout(()=>{
        loadingBar.classList.add("isLoading")
        setTimeout(()=>{
            loadingBar.style.display = "none"
            btn.innerHTML = 'Download !'
            btn.classList.add("toButton")
        },1000)
    },300)
}