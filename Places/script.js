function removevisi(){
    let prop = document.querySelectorAll(".find")
    prop.forEach((e)=>{
        if(e.classList.contains("visi")==true){
            e.classList.remove("visi")
        }else{
            e.classList.add("visi");
        }
        console.log(e)
    })
}
